import React, { useEffect, useRef, useState } from "react";
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
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const partners = [
    { id: 1, logo: Partner1, name: "Partner 1" },
    { id: 2, logo: Partner2, name: "Partner 2" },
    { id: 3, logo: Partner3, name: "Partner 3" },
    { id: 4, logo: Partner4, name: "Partner 4" },
    { id: 5, logo: Partner5, name: "Partner 5" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="partners" ref={sectionRef}>
      <div className="partners-container">
        {/* Decorative background elements */}
        <div className="partners-bg-blur-1"></div>
        <div className="partners-bg-blur-2"></div>
        
        <div className={`partners-header ${isVisible ? "fade-in-up" : ""}`}>
          <span className="partners-badge">Trusted Partners</span>
          <h2 className="partners-title">
            Powered by Industry
            <span className="title-highlight"> Leaders</span>
          </h2>
          <p className="partners-subtitle">
            Join over 1,000+ forward-thinking companies worldwide already scaling 
            with our ecosystem
          </p>
        </div>

        <div className={`partners-grid ${isVisible ? "fade-in-up delay-1" : ""}`}>
          {partners.map((partner, index) => (
            <div 
              className="partner-card" 
              key={partner.id}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="partner-logo-wrapper">
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="partner-logo"
                  loading="lazy"
                />
              </div>
              <div className="partner-hover-effect"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;