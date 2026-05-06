import React, { useEffect, useRef } from "react";
import "./CommunitiesSection.css";

import downtown from "../assets/downtown.jpg";
import marina from "../assets/marina.jpg";
import palm from "../assets/palm.jpg";
import businessBay from "../assets/businessbay.jpg";
import jbr from "../assets/jbr.jpg";
import dubaiHills from "../assets/dubai.jpg";
import city from "../assets/city.jpg";

const CommunitiesSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const items = sectionRef.current.querySelectorAll(".community-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            entry.target.style.transitionDelay = `${index * 0.08}s`;
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.15 }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="communities" className="communities" ref={sectionRef}>
      <div className="communities-container">
        {/* Header */}
        <div className="communities-header">
          <span className="section-label">EXPLORE UAE</span>
          <h2 className="section-title">
            Popular <span>Communities</span>
          </h2>
          <p className="section-subtitle">
            Discover the most sought-after neighborhoods across the UAE, each
            offering a distinct lifestyle and investment opportunity.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="bento-grid">
          <div
            className="community-card large"
            style={{ backgroundImage: `url(${downtown})` }}
          >
            <div className="overlay" />
            <div className="content">
              <span className="count">145 Properties</span>
              <h3>Downtown Dubai</h3>
              <p>Iconic city living near Burj Khalifa and Dubai Mall.</p>
              <button>Explore →</button>
            </div>
          </div>

          <div
            className="community-card medium"
            style={{ backgroundImage: `url(${businessBay})` }}
          >
            <div className="overlay" />
            <div className="content">
              <span className="count">178 Properties</span>
              <h3>Business Bay</h3>
              <p>Modern high-rises with canal-side residences.</p>
              <button>Explore →</button>
            </div>
          </div>

          <div
            className="community-card medium"
            style={{ backgroundImage: `url(${jbr})` }}
          >
            <div className="overlay" />
            <div className="content">
              <span className="count">120 Properties</span>
              <h3>JBR</h3>
              <button>Explore →</button>
            </div>
          </div>

          <div
            className="community-card small"
            style={{ backgroundImage: `url(${marina})` }}
          >
            <div className="overlay" />
            <div className="content">
              <span className="count">230 Properties</span>
              <h3>Dubai Marina</h3>
              <p>Waterfront lifestyle with skyline views.</p>
              <button>Explore →</button>
            </div>
          </div>

          <div
            className="community-card small"
            style={{ backgroundImage: `url(${palm})` }}
          >
            <div className="overlay" />
            <div className="content">
              <span className="count">90 Properties</span>
              <h3>Palm Jumeirah</h3>
              <button>Explore →</button>
            </div>
          </div>

          <div
            className="community-card small"
            style={{ backgroundImage: `url(${dubaiHills})` }}
          >
            <div className="overlay" />
            <div className="content">
              <span className="count">160 Properties</span>
              <h3>Dubai Hills</h3>
              <button>Explore →</button>
            </div>
          </div>

          <div
            className="community-card small"
            style={{ backgroundImage: `url(${city})` }}
          >
            <div className="overlay" />
            <div className="content">
              <span className="count">110 Properties</span>
              <h3>City Walk</h3>
              <p>Urban lifestyle with boutique living and cafés.</p>
              <button>Explore →</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitiesSection;
