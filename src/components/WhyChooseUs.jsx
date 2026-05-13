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
    text: "We exclusively feature premium properties that meet the highest standards of design, quality, and prime locations.",
  },
  {
    id: 2,
    icon: guidanceIcon,
    title: "Expert Guidance",
    text: "Our experienced consultants provide personalized advice to help you secure the perfect property aligned with your lifestyle.",
  },
  {
    id: 3,
    icon: supportIcon,
    title: "End-to-End Support",
    text: "From discovery to handover, we manage every step of your real estate journey with dedication and care.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose" className="why">
      <div className="why-container">

        {/* LEFT CONTENT */}
        <div className="why-content">

          <span className="why-label">
            WHY CHOOSE HIJRA REALTY
          </span>

          <h2 className="why-title">
            Elevating Your
            <span> Property Journey</span>
          </h2>

          <p className="why-text">
            We deliver premium real estate experiences through
            expert consultation, curated luxury listings, and
            dedicated client support tailored to your goals.
          </p>

        </div>

        {/* RIGHT SIDE */}
        <div className="why-features">

          {features.map((item) => (
            <div key={item.id} className="why-feature">

              <div className="feature-icon">
                <img src={item.icon} alt={item.title} />
              </div>

              <div className="feature-content">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;