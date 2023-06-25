import React, { useEffect, useRef } from "react";
import * as THREE from "three";

function TextMagazine3d() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // Set clear color to black with 0 opacity
    containerRef.current.appendChild(renderer.domElement);

    // Create a box geometry
    const boxGeometry = new THREE.BoxGeometry(1, 19, 9.5);
    // Create a material
    const boxMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 }); // Red color
    // Create a mesh with the geometry and material
    const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    // Set the initial rotation of the box
    boxMesh.rotation.y = (Math.PI / 180) * 90;
    // Add the mesh to the scene
    scene.add(boxMesh);

    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(0, 10, 0); // Set the position of the light
    scene.add(directionalLight);

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Camera position
    camera.position.x = 17;
    camera.position.y = 0;
    camera.position.z = 0;
    // Look at the center of the box
    camera.lookAt(boxMesh.position);

    // Resize handling
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // Animation loop
    const animate = () => {
      const duration = 0.5; // Duration in seconds
      const angle = (Math.PI / 180) * 90 * (1 / (60 * duration)); // 90 degrees over 60 frames and duration

      // Rotate the box around the y-axis
      boxMesh.rotation.y -= angle;

      // Render the scene
      renderer.render(scene, camera);

      // Check if the animation is complete
      if (boxMesh.rotation.y <= 0) {
        // Set the final rotation to 0 degrees
        boxMesh.rotation.y = 0;
        // Stop animating
        return;
      }

      // Continue animating
      requestAnimationFrame(animate);
    };

    animate();
    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} style={{ width: "100%", height: "100vh" }} />;
}

export default TextMagazine3d;
