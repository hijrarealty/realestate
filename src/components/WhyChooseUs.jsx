import React from "react";

import "./WhyChooseUs.css";

import luxuryIcon from "../assets/luxury.png";
import guidanceIcon from "../assets/guidance.png";
import supportIcon from "../assets/support.png";

const features = [
  {
    id: 1,
    icon: luxuryIcon,
    title: "Luxury Listings Only",
    text:
      "We exclusively feature premium properties that meet the highest standards of architecture, design, and prime investment locations.",
  },
  {
    id: 2,
    icon: guidanceIcon,
    title: "Expert Real Estate Guidance",
    text:
      "Our experienced consultants deliver strategic property advice tailored to your investment goals and lifestyle preferences.",
  },
  {
    id: 3,
    icon: supportIcon,
    title: "End-to-End Client Support",
    text:
      "From discovery to handover, we manage every step of your real estate journey with precision and dedicated care.",
  },
];

const WhyChooseUs = () => {

  return (

    <section
      id="why-choose"
      className="why"
      aria-labelledby="why-title"
    >

      <div className="why-container">

        {/* TOP SECTION */}

        <div className="why-header">

          <span className="why-label">
            WHY CHOOSE HIJRA REALTY
          </span>

          <h2
            className="why-title"
            id="why-title"
          >

            Elevating Luxury
            <span> Real Estate Experiences</span>

          </h2>

          <p className="why-description">

            Discover premium real estate solutions designed
            around your lifestyle, investment goals, and
            long-term value through expert guidance and
            curated luxury properties.

          </p>

        </div>

        {/* FEATURE GRID */}

        <div className="why-grid">

          {features.map((item) => (

            <article
              key={item.id}
              className="why-card"
            >

              {/* ICON */}

              <div className="why-icon">

                <img
                  src={item.icon}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  width="36"
                  height="36"
                />

              </div>

              {/* CONTENT */}

              <div className="why-card-content">

                <h3>{item.title}</h3>

                <p>{item.text}</p>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
};

export default WhyChooseUs;