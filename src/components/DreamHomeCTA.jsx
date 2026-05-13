import React, { useEffect, useRef, useState } from "react";
import "./DreamHomeCTA.css";

const DreamHomeCTA = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.18 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="dcta-section">
      {/* background blobs */}
      <span className="dcta-blob dcta-blob--l" aria-hidden="true" />
      <span className="dcta-blob dcta-blob--r" aria-hidden="true" />

      <div className="dcta-wrap">
        <div
          ref={ref}
          className={`dcta-card ${visible ? "dcta-card--in" : ""}`}
        >
          {/* shimmer top bar */}
          <span className="dcta-shimmer" aria-hidden="true" />

          {/* dot texture */}
          <span className="dcta-texture" aria-hidden="true" />

          {/* ── ICON ── */}
          <div className="dcta-icon" aria-hidden="true">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"
                stroke="currentColor" strokeWidth="1.6"
                strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 21V12h6v9"
                stroke="currentColor" strokeWidth="1.6"
                strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* ── LEFT TEXT ── */}
          <div className="dcta-left">
            <p className="dcta-eyebrow">
              <span className="dcta-eyebrow__dot" />
              Personalized Property Search
            </p>
            <h2 className="dcta-heading">
              Looking for Your<br />
              <span>Dream Home?</span>
            </h2>
            <p className="dcta-body">
              We match you with Dubai's finest properties — from
              waterfront apartments to exclusive villas — with expert
              guidance every step of the way.
            </p>

            {/* trust pills */}
            <div className="dcta-pills">
              <span className="dcta-pill">
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7l3.5 3.5L12 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Free Consultation
              </span>
              <span className="dcta-pill">
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7l3.5 3.5L12 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                500+ Listings
              </span>
              <span className="dcta-pill">
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7l3.5 3.5L12 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Verified Properties
              </span>
            </div>
          </div>

          {/* ── RIGHT CTA ── */}
          <div className="dcta-right">
            <button className="dcta-btn dcta-btn--primary">
              Explore Properties
              <span className="dcta-btn__arrow">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M8 3l5 5-5 5"
                    stroke="currentColor" strokeWidth="1.8"
                    strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </button>
            <button className="dcta-btn dcta-btn--ghost">
              Talk to an Agent
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DreamHomeCTA;