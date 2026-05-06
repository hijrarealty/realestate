import React from "react";
import "./VideoHero.css";

/* 🔹 IMPORT YOUR OWN VIDEO HERE */
import heroVideo from "../assets/hero-video-1.mp4";

const VideoHero = () => {
  return (
    <section className="video-hero">
      {/* Background Video */}
      <video
        className="video-bg"
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay */}
      <div className="video-overlay" />

      {/* Content */}
      <div className="video-content">
        <h1>Where Luxury Meets Location</h1>
        <p>
          Step into a world of exclusive residences, timeless design, and unmatched living experiences.
        </p>

        {/* <button className="play-btn" aria-label="Play Video">
          ▶
        </button> */}
      </div>
    </section>
  );
};

export default VideoHero;
