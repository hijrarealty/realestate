import React, { useState, useEffect, useRef } from "react";
import "./PremiumExperience.css";
import premiumPoster from "../assets/premium-poster.jpg";
import premiumVideo from "../assets/premium-video.mp4";



const PremiumExperience = () => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  /* ── Scroll-triggered entry ── */
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  /* ── Lock body scroll while modal is open ── */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  /* ── Keyboard close ── */
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const openModal  = () => setOpen(true);
  const closeModal = () => { setOpen(false); if (videoRef.current) videoRef.current.pause(); };

  return (
    <>
      {/* ══════════════════════════════════════
          SECTION
      ══════════════════════════════════════ */}
      <section
        ref={sectionRef}
        className={`prem-section ${visible ? "prem-visible" : ""}`}
      >
        {/* decorative blobs */}
        <span className="prem-blob prem-blob--tl" aria-hidden="true" />
        <span className="prem-blob prem-blob--br" aria-hidden="true" />

        <div className="prem-container">

          {/* ── LEFT ─────────────────────────── */}
          <div className="prem-left">

            <div className="prem-eyebrow">
              <span className="prem-eyebrow__line" />
              <span className="prem-eyebrow__text">Virtual Experience</span>
            </div>

            <h2 className="prem-title">
              Experience<br />
              <span>Luxury Living</span><br />
              Reimagined
            </h2>

            <p className="prem-body">
              Step inside Dubai's most exclusive residences through immersive
              virtual tours. Discover architecture, interiors, and lifestyle
              details from anywhere in the world — at your own pace.
            </p>


            <div className="prem-actions">
              <button className="prem-btn prem-btn--primary" onClick={openModal}>
                <span className="prem-btn__icon">
                  <svg width="11" height="13" viewBox="0 0 11 13" fill="currentColor">
                    <path d="M0 0.5v12l11-6L0 0.5z"/>
                  </svg>
                </span>
                Watch Virtual Tour
              </button>
              <button className="prem-btn prem-btn--ghost">
                Explore Properties
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* ── RIGHT ────────────────────────── */}
          <div className="prem-right">

            {/* Floating badge */}
            <div className="prem-badge" aria-hidden="true">
              <span className="prem-badge__ring" />
              <span className="prem-badge__inner">
                <strong>4K</strong>
                <small>Ultra HD</small>
              </span>
            </div>

            {/* Thumbnail card */}
            <button
              className="prem-thumb"
              onClick={openModal}
              aria-label="Play virtual tour video"
            >
              <img src={premiumPoster} alt="Luxury property virtual tour" className="prem-thumb__img" />

              {/* dark gradient */}
              <span className="prem-thumb__overlay" aria-hidden="true" />

              {/* play ring */}
              <span className="prem-thumb__play" aria-hidden="true">
                <svg width="22" height="26" viewBox="0 0 22 26" fill="none">
                  <path d="M1 1.5l20 11L1 24.5V1.5z" fill="white" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
                </svg>
              </span>

              {/* bottom caption */}
              <span className="prem-thumb__caption">
                <span className="prem-thumb__tag">Virtual Tour</span>
                <span className="prem-thumb__dur">03:45 min</span>
              </span>
            </button>

            {/* Decorative card behind thumbnail */}
            <span className="prem-thumb-shadow" aria-hidden="true" />
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          VIDEO MODAL
      ══════════════════════════════════════ */}
      {open && (
        <div
          className="prem-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Virtual tour video"
          onClick={closeModal}
        >
          <div
            className="prem-modal__content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="prem-modal__close"
              onClick={closeModal}
              aria-label="Close video"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <video
              ref={videoRef}
              src={premiumVideo}
              controls
              autoPlay
              playsInline
            />
          </div>
        </div>
      )}
    </>
  );
};

export default PremiumExperience;