import React from "react";
import "./DreamHomeCTA.css";

const DreamHomeCTA = () => {
  return (
    <section className="dream-cta">
      <div className="dream-cta-container">
        {/* LEFT CONTENT */}
        <div className="dream-cta-content">
          <div className="cta-icon-wrapper">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 9L12 3L21 9L12 15L3 9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M5 12v6a2 2 0 002 2h10a2 2 0 002-2v-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 21v-6a2 2 0 012-2h2a2 2 0 012 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h2>Looking for a <span>Dream Home</span>?</h2>
          <p>
            We help you turn your vision into reality with exclusive properties
            and expert guidance tailored to your needs.
          </p>
        </div>

        {/* RIGHT ACTION */}
        <div className="dream-cta-action">
          <button className="dream-cta-btn">
            Explore Properties
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default DreamHomeCTA;