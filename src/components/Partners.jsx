import React, {
  useEffect,
  useRef,
  useState,
} from "react";

import "./Partners.css";

/* PARTNER LOGOS */

import Partner1 from "../assets/partner1.png";
import Partner2 from "../assets/partner2.png";
import Partner3 from "../assets/partner3.png";
import Partner4 from "../assets/partner4.png";
import Partner5 from "../assets/partner5.png";

const Partners = () => {

  const [isVisible, setIsVisible] =
    useState(false);

  const sectionRef = useRef(null);

  const partners = [
    {
      id: 1,
      logo: Partner1,
      name: "Luxury Development Partner",
    },

    {
      id: 2,
      logo: Partner2,
      name: "Premium Property Partner",
    },

    {
      id: 3,
      logo: Partner3,
      name: "Real Estate Investment Partner",
    },

    {
      id: 4,
      logo: Partner4,
      name: "Luxury Villa Development Partner",
    },

    {
      id: 5,
      logo: Partner5,
      name: "Dubai Real Estate Partner",
    },
  ];

  useEffect(() => {

    const observer =
      new IntersectionObserver(
        ([entry]) => {

          if (entry.isIntersecting) {

            setIsVisible(true);

            observer.disconnect();
          }
        },
        {
          threshold: 0.1,
        }
      );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () =>
      observer.disconnect();

  }, []);

  return (

    <section
      className="partners"
      ref={sectionRef}
      aria-labelledby="partners-heading"
    >

      <div className="partners-container">

        {/* BACKGROUND */}

        <div
          className="partners-bg-blur-1"
          aria-hidden="true"
        />

        <div
          className="partners-bg-blur-2"
          aria-hidden="true"
        />

        {/* HEADER */}

        <header
          className={`
            partners-header
            ${isVisible ? "fade-in-up" : ""}
          `}
        >

          <span className="partners-badge">

            Trusted Partners

          </span>

          <h2
            className="partners-title"
            id="partners-heading"
          >

            Powered by Industry

            <span className="title-highlight">

              {" "}Leaders

            </span>

          </h2>

          <p className="partners-subtitle">

            Collaborating with globally
            recognized developers, investment
            firms, and premium real estate
            brands shaping the future of
            luxury living.

          </p>

        </header>

        {/* GRID */}

        <div
          className={`
            partners-grid
            ${isVisible ? "fade-in-up delay-1" : ""}
          `}
          role="list"
        >

          {partners.map((partner, index) => (

            <article
              className="partner-card"
              key={partner.id}
              role="listitem"
              style={{
                animationDelay:
                  `${index * 0.1}s`,
              }}
            >

              <div className="partner-logo-wrapper">

                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="partner-logo"
                  loading="lazy"
                  decoding="async"
                  width="160"
                  height="60"
                />

              </div>

              <div
                className="partner-hover-effect"
                aria-hidden="true"
              />

            </article>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Partners;