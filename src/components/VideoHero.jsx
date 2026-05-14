import React from "react";

import "./VideoHero.css";

/* VIDEO */

import heroVideo from "../assets/hero-video-1.mp4";

const VideoHero = () => {

  return (

    <section
      className="video-hero"
      aria-labelledby="video-hero-heading"
    >

      {/* BACKGROUND VIDEO */}

      <video
        className="video-bg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >

        <source
          src={heroVideo}
          type="video/mp4"
        />

      </video>

      {/* OVERLAY */}

      <div
        className="video-overlay"
        aria-hidden="true"
      />

      {/* CONTENT */}

      <div className="video-content">

        <h2 id="video-hero-heading">

          Where Luxury
          <br />

          Meets Lifestyle

        </h2>

        <p>

          Discover Dubai's most exclusive
          residences, waterfront villas,
          and iconic investment opportunities
          crafted for elevated living.

        </p>

      </div>

    </section>
  );
};

export default VideoHero;