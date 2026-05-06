import React, { useState } from "react";
import "./PremiumExperience.css";

import premiumPoster from "../assets/premium-poster.jpg";
import premiumVideo from "../assets/premium-video.mp4";

const PremiumExperience = () => {
  const [open, setOpen] = useState(false);

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <>
      {/* SECTION */}
      <section className="premium">
        <div className="premium-container">
          {/* LEFT CONTENT */}
          <div className="premium-content">
            <span className="premium-label">VIRTUAL EXPERIENCE</span>

            <h1 className="premium-title">
              Experience <span>Luxury Living</span>
              <br /> Reimagined
            </h1>

            <p className="premium-text">
              Step inside Dubai's most exclusive residences through immersive
              virtual experiences. Discover architecture, interiors, and lifestyle
              details from anywhere in the world.
            </p>

            <div className="premium-actions">
              <button className="primary-btn" onClick={() => setOpen(true)}>
                ▶ Watch Virtual Tour
              </button>
            </div>
          </div>

          {/* RIGHT THUMBNAIL */}
          <div className="premium-media">
            <div
              className="media-wrapper"
              onClick={() => setOpen(true)}
            >
              <img src={premiumPoster} alt="Virtual Tour" />
              <div className="play-overlay">
                <div className="play-button">
                  <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23 12.0001C24.3333 12.667 24.3333 14.6662 23 15.3331L4 26.2599C2.66667 26.9268 1 25.9275 1 24.2606L1 2.33385C1 0.666992 2.66667 -0.332298 4 0.33458L23 11.2614C23.3333 11.4299 23.6667 11.7643 23 12.0001Z" fill="white" stroke="white" strokeWidth="2"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO MODAL */}
      {open && (
        <div className="video-modal" onClick={closeModal}>
          <div
            className="video-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-btn" onClick={closeModal}>
              ✕
            </button>

            <video src={premiumVideo} controls autoPlay />
          </div>
        </div>
      )}
    </>
  );
};

export default PremiumExperience;