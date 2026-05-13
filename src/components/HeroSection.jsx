import React, { useState } from "react";
import "./HeroSection.css";

import heroBg from "../assets/hero-bg-4.jpg";

const HeroSection = ({ onSearch }) => {
  const [filters, setFilters] = useState({
    location: "",
    type: "",
    price: "",
  });

  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const handleSearch = () => {
    onSearch(filters);
  };

  return (
    <section className="hero-wrapper" id="hero">
      <div className="hero-container">
        {/* Background Image Div - Separate for better control */}
        <div 
          className="hero-background"
          style={{
            backgroundImage: `url(${heroBg})`,
          }}
        />
        
        {/* Overlay */}
        <div className="hero-overlay" />

        {/* Content */}
        <div className="hero-content">
          {/* Tags */}
          <div className="hero-tags">
            <span>Luxury</span>
            <span>Architectural</span>
            <span>Premium</span>
          </div>

          {/* Main Grid */}
          <div className="hero-grid">
            {/* Left */}
            <div className="hero-left">
              <h1>
                Own Your World,
                <br />
                One Property at a Time.
              </h1>
            </div>

            {/* Right */}
            <div className="hero-right">
              <p>
                Seamlessly navigate the UAE real estate market.
                Discover curated luxury homes, villas, and
                premium investment opportunities tailored to
                your lifestyle.
              </p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="hero-search-bar">
            <div className="search-item">
              <label>Type</label>
              <select
                name="type"
                value={filters.type}
                onChange={handleChange}
              >
                <option value="">Select Type</option>
                <option value="Apartment">Apartment</option>
                <option value="Villa">Villa</option>
                <option value="Penthouse">Penthouse</option>
                <option value="Townhouse">Townhouse</option>
              </select>
            </div>

            <div className="search-item">
              <label>Price</label>
              <select
                name="price"
                value={filters.price}
                onChange={handleChange}
              >
                <option value="">Budget Range</option>
                <option value="2000000">AED 2M</option>
                <option value="5000000">AED 5M</option>
                <option value="10000000">AED 10M+</option>
              </select>
            </div>

            <div className="search-item">
              <label>Area</label>
              <select
                name="location"
                value={filters.location}
                onChange={handleChange}
              >
                <option value="">Select Area</option>
                <option value="Palm Jumeirah">Palm Jumeirah</option>
                <option value="Dubai Marina">Dubai Marina</option>
                <option value="Downtown Dubai">Downtown Dubai</option>
                <option value="Dubai Hills">Dubai Hills</option>
              </select>
            </div>

            <button className="hero-search-btn" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;