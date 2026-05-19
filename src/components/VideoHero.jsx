import React, {
  useEffect,
  useState,
} from "react";

import "./VideoHero.css";

/* VIDEO */
import heroVideo from "../assets/hero-video-1.mp4";

/* FALLBACK IMAGE */
import heroPoster from "../assets/hero-bg-4.webp";

const VideoHero = () => {

  const [isMobile, setIsMobile] =
    useState(false);

  useEffect(() => {

    const checkMobile = () => {

      setIsMobile(
        window.innerWidth < 768
      );
    };

    checkMobile();

    window.addEventListener(
      "resize",
      checkMobile
    );

    return () =>
      window.removeEventListener(
        "resize",
        checkMobile
      );

  }, []);

  return (

    <section
      className="video-hero"
      aria-labelledby="video-hero-heading"
    >

      {/* DESKTOP VIDEO */}

      {!isMobile ? (

        <video
          className="video-bg"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster={heroPoster}
          aria-hidden="true"
        >

          <source
            src={heroVideo}
            type="video/mp4"
          />

        </video>

      ) : (

        /* MOBILE IMAGE */

        <img
          src={heroPoster}
          alt="Luxury Dubai residence"
          className="video-bg"
          loading="eager"
          decoding="async"
          width="1920"
          height="1080"
        />

      )}

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