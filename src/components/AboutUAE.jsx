import React from "react";
import "./AboutUAE.css";

import aboutImage from "../assets/about-uae.jpg";

const AboutUAE = () => {
  return (
    <section id="about" className="about-uae">
      <div className="about-uae-container">
        {/* LEFT CONTENT */}
        <div className="about-uae-content">
          <span className="about-label">ABOUT US</span>

          <h2 className="about-title">
            Redefining Real Estate
            <span> in the UAE</span>
          </h2>

          <p className="about-text">
            We are a boutique real estate advisory specializing in premium and
            luxury properties across the UAE. From iconic Dubai developments to
            exclusive waterfront residences, we connect discerning clients with
            exceptional real estate opportunities.
          </p>

          <p className="about-text muted">
            Our expertise is built on market insight, transparency, and a deep
            understanding of lifestyle-driven investments — ensuring a seamless
            and confident property journey from start to finish.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="about-uae-image">
          <img src={aboutImage} alt="Luxury Real Estate UAE" />
        </div>
      </div>
    </section>
  );
};

export default AboutUAE;
