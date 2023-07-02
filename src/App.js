import React, { useState, useEffect, useRef } from "react";
import "./styles.css";
import pdfFile from "./texts/ISSUE0-TEXT1.pdf";
import {
  paragraph1,
  paragraph2,
  paragraph3,
  paragraph4,
  paragraph5,
  paragraph6,
  paragraph7,
  paragraph8,
  paragraph9,
  paragraph10,
  paragraph11,
  paragraph12,
  paragraph13,
  paragraph14,
  paragraph15,
  paragraph16,
  paragraph17,
  paragraph18,
  paragraph19,
  paragraph20,
  paragraph21,
  paragraph22,
  paragraph23,
} from "./texts";

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [showImage, setShowImage] = useState(true);

  const VisualMagazinePage1 = require("./images/VisualMagazine_p1.png");
  const VisualMagazinePage2_3 = require("./images/VisualMagazine_p2-3.png");
  const VisualMagazinePage4_5 = require("./images/VisualMagazine_p4-5.png");
  const VisualMagazinePage6_7 = require("./images/VisualMagazine_p6-7.png");
  const VisualMagazinePage8 = require("./images/VisualMagazine_p8.png");

  const TextMagazinePage1 = require("./images/TextMagazine_LowRes_p1.png");
  const TextMagazinePage2_3 = require("./images/TextMagazine_LowRes_p2-3.png");
  const TextMagazinePage4_5 = require("./images/TextMagazine_LowRes_p4-5.png");
  const TextMagazinePage6_7 = require("./images/TextMagazine_LowRes_p6-7.png");
  const TextMagazinePage8 = require("./images/TextMagazine_LowRes_p8.png");

  const visualMagazinePages = [
    VisualMagazinePage1,
    VisualMagazinePage2_3,
    VisualMagazinePage4_5,
    VisualMagazinePage6_7,
    VisualMagazinePage8,
  ];

  const textMagazinePages = [
    TextMagazinePage1,
    TextMagazinePage2_3,
    TextMagazinePage4_5,
    TextMagazinePage6_7,
    TextMagazinePage8,
  ];

  const disableRightClick = (event) => {
    event.preventDefault();
  };

  // SCROLL TO ARTICLE NAVIGATION

  const scrollToTitle = useRef(null);

  const handleImageClick = (event) => {
    const image = event.target;
    const imageHeight = image.offsetHeight;
    const clickPosition = event.clientY - image.getBoundingClientRect().top;
    const topPercentage = (clickPosition / imageHeight) * 100;

    if (topPercentage <= 14 && scrollToTitle.current) {
      scrollToTitle.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTitle2 = useRef(null);

  const handleImageClick2 = (event) => {
    const image = event.target;
    const imageHeight = image.offsetHeight;
    const clickPosition = event.clientY - image.getBoundingClientRect().top;
    const topPercentage = (clickPosition / imageHeight) * 100;

    if (topPercentage >= 15 && topPercentage <= 23 && scrollToTitle2.current) {
      scrollToTitle2.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const scrollToTitle3 = useRef(null);

  const handleImageClick3 = (event) => {
    const image = event.target;
    const imageHeight = image.offsetHeight;
    const clickPosition = event.clientY - image.getBoundingClientRect().top;
    const topPercentage = (clickPosition / imageHeight) * 100;

    if (topPercentage >= 25 && topPercentage <= 33 && scrollToTitle3.current) {
      scrollToTitle3.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const scrollToTitle4 = useRef(null);

  const handleImageClick4 = (event) => {
    const image = event.target;
    const imageHeight = image.offsetHeight;
    const clickPosition = event.clientY - image.getBoundingClientRect().top;
    const topPercentage = (clickPosition / imageHeight) * 100;

    if (topPercentage >= 35 && topPercentage <= 43 && scrollToTitle4.current) {
      scrollToTitle4.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const scrollToTitle5 = useRef(null);

  const handleImageClick5 = (event) => {
    const image = event.target;
    const imageHeight = image.offsetHeight;
    const clickPosition = event.clientY - image.getBoundingClientRect().top;
    const topPercentage = (clickPosition / imageHeight) * 100;

    if (topPercentage >= 45 && topPercentage <= 53 && scrollToTitle5.current) {
      scrollToTitle5.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const scrollToTitle6 = useRef(null);

  const handleImageClick6 = (event) => {
    const image = event.target;
    const imageHeight = image.offsetHeight;
    const clickPosition = event.clientY - image.getBoundingClientRect().top;
    const topPercentage = (clickPosition / imageHeight) * 100;

    if (topPercentage >= 55 && topPercentage <= 63 && scrollToTitle6.current) {
      scrollToTitle6.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  // SCROLL TO TOP NAVIGATION

  const scrollToTop = useRef(null);
  const scrollToTopRef = useRef(null);

  const handleClick = () => {
    if (scrollToTopRef.current) {
      scrollToTopRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    const checkScreenSize = () => {
      const isMobile = window.innerWidth <= 480;
      setIsMobile(isMobile);
      setShowImage(isMobile); // Update showImage state based on screen size
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  // DEVICE SITE

  if (isMobile) {
    return (
      <div className="App">
        <div className="text-container">
          <h3 ref={scrollToTopRef} id="Top">
            T
          </h3>
          <img
            ref={scrollToTop}
            id="Cover"
            src={require("./images/TextMagazine_LowRes_Cover_WIP.png")}
            alt="Image"
            style={{
              width: "110%",
              height: "auto",
              marginTop: "75px",
            }}
            onClick={(event) => {
              handleImageClick(event);
              handleImageClick2(event);
              handleImageClick3(event);
              handleImageClick4(event);
              handleImageClick5(event);
              handleImageClick6(event);
            }}
          />
          <h1 ref={scrollToTitle} id="textOneTitle">
            <br />
            Text One Title
          </h1>
          <a className="sound-symbol">⏵</a>
          <h2>AUTHOR FULL NAME</h2>
          <br />
          <a className="download-symbol" href={pdfFile} download role="img">
            ⤓
          </a>
          <br />
          <br />
          <br />
          <br />
          <br />
          <p className="indented">{paragraph1}</p>
          <p className="indented">{paragraph2}</p>
          <p className="indented">{paragraph3}</p>
          <br />
          <b>1. Low Resolutions</b>
          <p className="indented">{paragraph4}</p>
          <p className="indented">{paragraph5}</p>
          <p className="indented">{paragraph6}</p>
          <p className="indented">{paragraph7}</p>
          <br />
          <b>3. Privatization and Piracy</b>
          <p className="indented">{paragraph8}</p>
          <p className="indented">{paragraph9}</p>
          <p className="indented">{paragraph10}</p>
          <br />
          <b> 4. Imperfect Cinema </b>
          <p className="indented">{paragraph11}</p>
          <p className="indented">{paragraph12}</p>
          <p className="indented">{paragraph13}</p>
          <p className="indented">{paragraph14}</p>
          <p className="indented">{paragraph15}</p>
          <p className="indented">{paragraph16}</p>
          <p className="indented">{paragraph17}</p>
          <br />
          <b>5. Comrade, what is your visual bond today?</b>
          <p className="indented">{paragraph18}</p>
          <p className="indented">{paragraph19}</p>
          <p className="indented">{paragraph20}</p>
          <p className="indented">{paragraph21}</p>
          <p className="indented">{paragraph22}</p>
          <p className="indented">{paragraph23}</p>

          <h1 ref={scrollToTitle2} id="textTwoTitle">
            <br />
            Text Two Title
          </h1>
          <a className="sound-symbol">⏵</a>
          <h2>AUTHOR FULL NAME</h2>
          <br />
          <a className="download-symbol" href={pdfFile} download role="img">
            ⤓
          </a>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <p className="indented">{paragraph1}</p>
          <p className="indented">{paragraph2}</p>
          <p>...</p>

          <h1 ref={scrollToTitle3} id="textTwoTitle">
            <br />
            Text Thre Title
          </h1>
          <a className="sound-symbol">⏵</a>
          <h2>AUTHOR FULL NAME</h2>
          <br />
          <a className="download-symbol" href={pdfFile} download role="img">
            ⤓
          </a>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <p className="indented">{paragraph1}</p>
          <p className="indented">{paragraph2}</p>
          <p>...</p>

          <h1 ref={scrollToTitle4} id="textTwoTitle">
            <br />
            Text Four Title
          </h1>
          <a className="sound-symbol">⏵</a>
          <h2>AUTHOR FULL NAME</h2>
          <br />
          <a className="download-symbol" href={pdfFile} download role="img">
            ⤓
          </a>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <p className="indented">{paragraph1}</p>
          <p className="indented">{paragraph2}</p>
          <p>...</p>

          <h1 ref={scrollToTitle5} id="textTwoTitle">
            <br />
            Text Five Title
          </h1>
          <a className="sound-symbol">⏵</a>
          <h2>AUTHOR FULL NAME</h2>
          <br />
          <a className="download-symbol" href={pdfFile} download role="img">
            ⤓
          </a>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <p className="indented">{paragraph1}</p>
          <p className="indented">{paragraph2}</p>
          <p>...</p>

          <h1 ref={scrollToTitle6} id="textTwoTitle">
            <br />
            Tra. Title
          </h1>
          <a className="sound-symbol">⏵</a>
          <h2>AUTHOR FULL NAME</h2>
          <br />
          <a className="download-symbol" href={pdfFile} download role="img">
            ⤓
          </a>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <p className="indented">{paragraph1}</p>
          <p className="indented">{paragraph2}</p>
          <p>...</p>
        </div>
        <a href="#" className="static-features" onClick={handleClick}>
          ↑
        </a>
      </div>
    );
  }

  // COMPUTER SITE

  const Magazine = () => {
    const [currentMagazine, setCurrentMagazine] = useState("visual");
    const [currentPage, setCurrentPage] = useState(0);

    const handlePageChange = (direction) => {
      if (direction === "previous" && currentPage > 0) {
        setCurrentPage(currentPage - 1);
      } else if (
        direction === "next" &&
        currentPage < magazines[currentMagazine].pages.length - 1
      ) {
        setCurrentPage(currentPage + 1);
      }
    };

    const handleScreenClick = (event) => {
      const screenWidth = window.innerWidth;
      const clickX = event.clientX;

      if (clickX < screenWidth / 2) {
        handlePageChange("previous");
      } else {
        handlePageChange("next");
      }
    };

    const handleMagazineChange = () => {
      setCurrentPage(0); // Reset current page to 0
      setCurrentMagazine(currentMagazine === "visual" ? "text" : "visual"); // Change the magazine
    };

    const magazines = {
      visual: { pages: visualMagazinePages, currentPage },
      text: { pages: textMagazinePages, currentPage },
    };

    return (
      <div
        className="App"
        onClick={handleScreenClick}
        onContextMenu={disableRightClick}
      >
        <div className="magazine-container">
          <div
            className={`magazine-page ${
              currentMagazine === "visual"
                ? "visual-magazine-page"
                : "text-magazine-page"
            }`}
          >
            <img
              src={magazines[currentMagazine].pages[currentPage]}
              alt={`Page ${currentPage + 1}`}
            />
          </div>
          <div className="toggle-container">
            <label className="toggle-label">
              <input
                type="checkbox"
                className="toggle-input"
                checked={currentMagazine === "text"}
                onChange={handleMagazineChange}
              />
              <span className="toggle-slider">
                {currentMagazine === "visual" ? "📷" : "🅃"}
              </span>
            </label>
          </div>
        </div>
      </div>
    );
  };

  return <Magazine />;
}

export default App;
