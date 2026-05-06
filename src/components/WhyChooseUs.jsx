import React, { useEffect, useRef } from "react";
import "./WhyChooseUs.css";

import luxuryIcon from "../assets/luxury.png";
import guidanceIcon from "../assets/guidance.png";
import supportIcon from "../assets/support.png";

const WhyChooseUs = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll(".why-feature");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            entry.target.style.transitionDelay = `${index * 0.15}s`;
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="why-choose"
      className="why"
      ref={sectionRef}
    >
      <div className="why-container">
        {/* LEFT */}
        <div className="why-content">
          <span className="why-label">WHY CHOOSE US</span>
          <h2 className="why-title">
            Your Trusted <span>Support</span>
          </h2>
          <p className="why-text">
            We’re committed to making your property journey seamless,
            transparent, and rewarding with expert-driven solutions.
          </p>
        </div>

        {/* RIGHT */}
        <div className="why-features">
          <div className="why-feature">
            <div className="icon">
              <img src={luxuryIcon} alt="Luxury Listings" />
            </div>
            <div className="feature-content">
              <h3>Luxury Listings Only</h3>
              <p>
                We exclusively feature premium properties that meet the highest
                standards of design, quality, and prime locations.
              </p>
            </div>
          </div>

          <div className="why-feature">
            <div className="icon">
              <img src={guidanceIcon} alt="Expert Guidance" />
            </div>
            <div className="feature-content">
              <h3>Expert Guidance</h3>
              <p>
                Our experienced consultants provide personalized advice to help
                you secure the perfect property aligned with your lifestyle.
              </p>
            </div>
          </div>

          <div className="why-feature">
            <div className="icon">
              <img src={supportIcon} alt="End to End Support" />
            </div>
            <div className="feature-content">
              <h3>End-to-End Support</h3>
              <p>
                From discovery to handover, we manage every step of your real
                estate journey with dedication and care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
