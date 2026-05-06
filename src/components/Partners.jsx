import React from "react";
import "./Partners.css";

// Import your partner logos from assets
import Partner1 from "../assets/partner1.png";
import Partner2 from "../assets/partner2.png";
import Partner3 from "../assets/partner3.png";
import Partner4 from "../assets/partner4.png";
import Partner5 from "../assets/partner5.png";
// import Partner6 from "../assets/partner6.svg";
// import Partner7 from "../assets/partner7.svg";
// import Partner8 from "../assets/partner8.svg";

const Partners = () => {
  const partners = [
    Partner1,
    Partner2,
    Partner3,
    Partner4,
    Partner5,
    // Partner6,
    // Partner7,
    // Partner8,
  ];

  return (
    <section className="partners">
      <div className="partners-container">
        <h2 className="partners-title">Our Partner</h2>
        <p className="partners-subtitle">
          Join over 1,000 companies worldwide already growing with us
        </p>

        <div className="partners-logos">
          {partners.map((logo, index) => (
            <div className="partner-logo" key={index}>
              <img src={logo} alt={`Partner ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
