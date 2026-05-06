import React, { useMemo } from "react";
import "./PropertiesSection.css";

import p1 from "../assets/property-1.jpg";
import p2 from "../assets/property-2.jpg";
import p3 from "../assets/property-3.jpg";
import p4 from "../assets/property-4.jpg";
import p5 from "../assets/property-5.jpg";
import p6 from "../assets/property-6.jpg";
import p7 from "../assets/property-7.jpg";
import p8 from "../assets/property-8.jpg";
import p9 from "../assets/property-9.jpg";

const allProperties = [
  {
    id: 1,
    name: "Palm Jumeirah Villa",
    type: "Villa",
    image: p1,
    badge: "Featured",
    price: "AED 8,500,000",
    beds: 5,
    baths: 6,
    size: "6,200 sq ft",
    location: "Palm Jumeirah",
  },
  {
    id: 2,
    name: "Downtown Luxury Apartment",
    type: "Apartment",
    image: p2,
    badge: "New",
    price: "AED 2,400,000",
    beds: 2,
    baths: 2,
    size: "1,450 sq ft",
    location: "Downtown Dubai",
  },
  {
    id: 3,
    name: "Marina Penthouse",
    type: "Penthouse",
    image: p3,
    badge: "Exclusive",
    price: "AED 12,000,000",
    beds: 4,
    baths: 5,
    size: "4,800 sq ft",
    location: "Dubai Marina",
  },
  {
    id: 4,
    name: "Beachfront Villa",
    type: "Villa",
    image: p4,
    badge: "Featured",
    price: "AED 9,300,000",
    beds: 5,
    baths: 6,
    size: "5,900 sq ft",
    location: "Jumeirah",
  },
  {
    id: 5,
    name: "Modern Townhouse",
    type: "Townhouse",
    image: p5,
    badge: "New",
    price: "AED 3,100,000",
    beds: 3,
    baths: 3,
    size: "2,300 sq ft",
    location: "Dubai Hills",
  },
  {
    id: 6,
    name: "Skyline View Apartment",
    type: "Apartment",
    image: p6,
    badge: "Exclusive",
    price: "AED 1,950,000",
    beds: 2,
    baths: 2,
    size: "1,300 sq ft",
    location: "Business Bay",
  },
  {
    id: 7,
    name: "Ultra Luxury Mansion",
    type: "Villa",
    image: p7,
    badge: "Featured",
    price: "AED 25,000,000",
    beds: 7,
    baths: 8,
    size: "12,000 sq ft",
    location: "Emirates Hills",
  },
  {
    id: 8,
    name: "Canal View Apartment",
    type: "Apartment",
    image: p8,
    badge: "New",
    price: "AED 2,150,000",
    beds: 2,
    baths: 2,
    size: "1,400 sq ft",
    location: "Dubai Canal",
  },
  {
    id: 9,
    name: "Signature Villa",
    type: "Villa",
    image: p9,
    badge: "Exclusive",
    price: "AED 14,500,000",
    beds: 6,
    baths: 7,
    size: "7,200 sq ft",
    location: "Palm Jumeirah",
  },
];

const getPriceValue = (price) => Number(price.replace(/[^0-9]/g, ""));

const PropertiesSection = ({ filters }) => {
  const filteredProperties = useMemo(() => {
    if (!filters) return allProperties;
    
    return allProperties.filter((item) => {
      const price = getPriceValue(item.price);
      const matchLocation = !filters.location || item.location === filters.location;
      const matchType = !filters.type || item.type === filters.type;
      const matchPrice = !filters.price || price <= Number(filters.price);
      
      return matchLocation && matchType && matchPrice;
    });
  }, [filters]);

  return (
    <section id="properties" className="properties-section">
      <div className="properties-container">
        <div className="section-header">
          <span className="section-tag">Latest Listings</span>
          <h2 className="section-title">Discover Exceptional Properties</h2>
          <p className="section-description">
            Explore our curated collection of luxury homes and investment opportunities
          </p>
        </div>

        <div className="properties-grid">
          {filteredProperties.map((item) => (
            <div key={item.id} className="property-card">
              <div className="card-image-wrapper">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  loading="lazy"
                  decoding="async"
                />
                <div className={`card-badge card-badge-${item.badge.toLowerCase()}`}>
                  {item.badge}
                </div>
              </div>

              <div className="card-content">
                <div className="card-header">
                  <h3>{item.name}</h3>
                  <div className="property-location">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
                    </svg>
                    {item.location}
                  </div>
                </div>

                <div className="property-features">
                  <div className="feature">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="3" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="2"/>
                      <rect x="13" y="3" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="2"/>
                      <rect x="3" y="13" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="2"/>
                      <rect x="13" y="13" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    <span>{item.size}</span>
                  </div>
                  <div className="feature">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M20 9V7c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2M4 13h16M6 17h3M15 17h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <rect x="2" y="9" width="20" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    <span>{item.beds} Beds</span>
                  </div>
                  <div className="feature">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M4 12h16M12 4v16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    <span>{item.baths} Baths</span>
                  </div>
                </div>

                <div className="card-footer">
                  <div className="price-container">
                    <span className="price-label">Price</span>
                    <span className="price-value">{item.price}</span>
                  </div>
                  <button className="details-btn" aria-label="View property details">
                    <span>View Details</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProperties.length === 0 && (
          <div className="empty-state">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none">
              <path d="M3 9L12 3L21 9L12 15L3 9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M5 12v6a2 2 0 002 2h10a2 2 0 002-2v-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 21v-6a2 2 0 012-2h2a2 2 0 012 2v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p>No properties found</p>
            <span>Try adjusting your filters</span>
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertiesSection;