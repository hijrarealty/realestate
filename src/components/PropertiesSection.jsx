import React, { useMemo, useState } from "react";

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
    category: "new",
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
    category: "new",
    name: "Downtown Luxury Apartment",
    type: "Apartment",
    image: p2,
    badge: "For Sale",
    price: "AED 2,400,000",
    beds: 2,
    baths: 2,
    size: "1,450 sq ft",
    location: "Downtown Dubai",
  },

  {
    id: 3,
    category: "new",
    name: "Marina Penthouse",
    type: "Penthouse",
    image: p3,
    badge: "For Sale",
    price: "AED 12,000,000",
    beds: 4,
    baths: 5,
    size: "4,800 sq ft",
    location: "Dubai Marina",
  },

  {
    id: 4,
    category: "used",
    name: "Beachfront Villa",
    type: "Villa",
    image: p4,
    badge: "Used Property",
    price: "AED 9,300,000",
    beds: 5,
    baths: 6,
    size: "5,900 sq ft",
    location: "Jumeirah",
  },

  {
    id: 5,
    category: "used",
    name: "Modern Townhouse",
    type: "Townhouse",
    image: p5,
    badge: "Used Property",
    price: "AED 3,100,000",
    beds: 3,
    baths: 3,
    size: "2,300 sq ft",
    location: "Dubai Hills",
  },

  {
    id: 6,
    category: "used",
    name: "Skyline View Apartment",
    type: "Apartment",
    image: p6,
    badge: "Used Property",
    price: "AED 1,950,000",
    beds: 2,
    baths: 2,
    size: "1,300 sq ft",
    location: "Business Bay",
  },

  {
    id: 7,
    category: "new",
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
    category: "used",
    name: "Canal View Apartment",
    type: "Apartment",
    image: p8,
    badge: "Used Property",
    price: "AED 2,150,000",
    beds: 2,
    baths: 2,
    size: "1,400 sq ft",
    location: "Dubai Canal",
  },

  {
    id: 9,
    category: "new",
    name: "Signature Villa",
    type: "Villa",
    image: p9,
    badge: "Featured",
    price: "AED 14,500,000",
    beds: 6,
    baths: 7,
    size: "7,200 sq ft",
    location: "Palm Jumeirah",
  },
];

const getPriceValue = (price) =>
  Number(price.replace(/[^0-9]/g, ""));

const PropertiesSection = ({ filters }) => {

  const [activeTab, setActiveTab] =
    useState("new");

  const filteredProperties =
    useMemo(() => {

      return allProperties.filter((item) => {

        const price =
          getPriceValue(item.price);

        const matchCategory =
          item.category === activeTab;

        const matchLocation =
          !filters?.location ||
          item.location ===
            filters.location;

        const matchType =
          !filters?.type ||
          item.type === filters.type;

        const matchPrice =
          !filters?.price ||
          price <=
            Number(filters.price);

        return (
          matchCategory &&
          matchLocation &&
          matchType &&
          matchPrice
        );
      });

    }, [filters, activeTab]);

  return (
    <section
      id="properties"
      className="properties-section"
      aria-labelledby="properties-heading"
    >

      <div className="properties-container">

        {/* HEADER */}

        <header className="section-header">

          <span className="section-tag">
            ✨ Latest Listings
          </span>

          <h2
            className="section-title"
            id="properties-heading"
          >
            Discover Exceptional
            Properties
          </h2>

          <p className="section-description">
            Explore our curated collection
            of luxury homes and investment
            opportunities in Dubai's most
            prestigious locations.
          </p>

        </header>

        {/* STATS */}

        <div className="properties-topbar">

          <div className="properties-stats">

            <span className="stats-count">
              {filteredProperties.length}
            </span>

            <span className="stats-text">
              Luxury Properties Available
            </span>

          </div>

          {/* TABS */}

          <div className="properties-tabs">

            <button
              className={`tab-btn ${
                activeTab === "new"
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                setActiveTab("new")
              }
            >
              New Properties
            </button>

            <button
              className={`tab-btn ${
                activeTab === "used"
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                setActiveTab("used")
              }
            >
              Used Properties
            </button>

          </div>

        </div>

        {/* GRID */}

        {filteredProperties.length > 0 ? (

          <div className="properties-grid">

            {filteredProperties.map(
              (item) => (

                <article
                  key={item.id}
                  className="property-card"
                >

                  <div className="card-image-wrapper">

                    <img
                      src={item.image}
                      alt={item.name}
                      className="property-image"
                    />

                    <div className="card-badge">
                      {item.badge}
                    </div>

                  </div>

                  <div className="card-content">

                    <div className="card-header">

                      <h3>{item.name}</h3>

                      <div className="property-location">

                        <span>
                          {item.location}
                        </span>

                      </div>

                    </div>

                    <div className="property-features">

                      <div className="feature">
                        {item.beds} Beds
                      </div>

                      <div className="feature">
                        {item.baths} Baths
                      </div>

                      <div className="feature">
                        {item.size}
                      </div>

                    </div>

                    <div className="card-footer">

                      <div className="price-container">

                        <span className="price-label">
                          Starting From
                        </span>

                        <span className="price-value">
                          {item.price}
                        </span>

                      </div>

                      <button className="details-btn">
                        View Details
                      </button>

                    </div>

                  </div>

                </article>

              )
            )}

          </div>

        ) : (

          <div className="empty-state">

            <div className="empty-state-icon">
              🏠
            </div>

            <p>No Properties Found</p>

            <span className="empty-state-subtitle">
              Try adjusting your filters
            </span>

          </div>

        )}

      </div>

    </section>
  );
};

export default PropertiesSection;