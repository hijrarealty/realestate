import React, { useEffect, useRef, useState } from "react";
import "./AboutUAE.css";
import aboutImage from "../assets/about-uae.jpg";

const FEATURES = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2L12.5 7.5H18L13.5 11L15.5 17L10 13.5L4.5 17L6.5 11L2 7.5H7.5L10 2Z"
          stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Premium Listings",
    desc: "Exclusive access to Dubai's finest off-market properties.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3 10l7 7 7-7M3 5l7 7 7-7" stroke="currentColor" strokeWidth="1.6"
          strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "End-to-End Advisory",
    desc: "Seamless guidance from search to final handover.",
  },
];

const AboutUAE = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" className={`au-section ${visible ? "au-visible" : ""}`} ref={ref}>

      {/* ── BACKGROUND ACCENTS ── */}
      <span className="au-accent au-accent--tl" aria-hidden="true" />
      <span className="au-accent au-accent--br" aria-hidden="true" />

      <div className="au-container">

        {/* ══════════════════════════
            LEFT — IMAGE SIDE
        ══════════════════════════ */}
        <div className="au-visual">

          {/* main photo */}
          <div className="au-img-wrap">
            <img src={aboutImage} alt="Luxury Real Estate UAE" className="au-img" />
            <span className="au-img-overlay" aria-hidden="true" />
          </div>

          {/* decorative border frame */}
          <span className="au-frame" aria-hidden="true" />
        </div>

        {/* ══════════════════════════
            RIGHT — TEXT SIDE
        ══════════════════════════ */}
        <div className="au-content">

          {/* eyebrow */}
          <div className="au-eyebrow">
            <span className="au-eyebrow__line" />
            <span className="au-eyebrow__text">About Us</span>
          </div>

          {/* heading */}
          <h2 className="au-heading">
            Redefining Real Estate<br />
            <span>in the UAE</span>
          </h2>

          {/* divider */}
          <span className="au-divider" aria-hidden="true" />

          {/* body paragraphs */}
          <p className="au-body">
            We are a boutique real estate advisory specialising in premium and
            luxury properties across the UAE. From iconic Dubai developments to
            exclusive waterfront residences, we connect discerning clients with
            exceptional real estate opportunities.
          </p>
          <p className="au-body au-body--muted">
            Our expertise is built on market insight, transparency, and a deep
            understanding of lifestyle-driven investments — ensuring a seamless
            and confident property journey from start to finish.
          </p>

          {/* feature list */}
          <ul className="au-features" role="list">
            {FEATURES.map((f) => (
              <li key={f.title} className="au-feature">
                <span className="au-feature__icon">{f.icon}</span>
                <div className="au-feature__text">
                  <strong>{f.title}</strong>
                  <span>{f.desc}</span>
                </div>
              </li>
            ))}
          </ul>


        </div>
      </div>
    </section>
  );
};

export default AboutUAE;  