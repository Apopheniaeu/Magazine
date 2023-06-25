import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function TextMagazine3d({ modelPath }) {
  const containerRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Load the model
    const loader = new GLTFLoader();
    loader.load(modelPath, (gltf) => {
      const model = gltf.scene;

      // Set the position and scale of the model
      model.position.set(0, 0, 0); // Optional: Set the desired position of the model
      model.scale.set(9.5, 19, 1); // Set the scale of the model based on the provided values

      // Add the model to the scene
      scene.add(model);

      // Animation loop
      const animate = () => {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
      };

      animate();
    });

    // Camera position
    camera.position.y = -125;

    // Clean up
    return () => {
      renderer.dispose();
    };
  }, [modelPath]);

  return <div ref={containerRef} />;
}

export default TextMagazine3d;
