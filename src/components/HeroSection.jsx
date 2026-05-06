import React, { useEffect, useState } from "react";
import "./HeroSection.css";

import heroBg from "../assets/hero-bg-1.jpg";
import locationIcon from "../assets/icon-location.png";
import propertyIcon from "../assets/icon-property.png";
import priceIcon from "../assets/icon-price.png";

const words = ["Luxury Home", "Apartment", "Villa", "Penthouse", "Townhouse"];

const HeroSection = ({ onSearch }) => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const [filters, setFilters] = useState({
    location: "",
    type: "",
    price: "",
  });

  useEffect(() => {
    const currentWord = words[wordIndex];

    if (charIndex < currentWord.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + currentWord[charIndex]);
        setCharIndex(charIndex + 1);
      }, 80);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setText("");
        setCharIndex(0);
        setWordIndex((prev) => (prev + 1) % words.length);
      }, 1400);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, wordIndex]);

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSearch = () => {
    onSearch(filters);
  };

  return (
    <section
      id="hero"
      className="hero"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="hero-overlay" />

      <div className="hero-content">
        <span className="hero-badge">Premium UAE Properties</span>

        <h1 className="hero-title">
          Find Your <span className="highlight">{text}</span>
          <br />
          in the UAE
        </h1>

        <p className="hero-subtitle">
          Discover exclusive properties across Dubai, Abu Dhabi, and beyond.
        </p>

        <div className="search-container">
          <div className="search-box">
            <div className="input-group">
              <div className="input-icon">
                <img src={locationIcon} alt="Location" />
              </div>
              <select name="location" onChange={handleChange} value={filters.location}>
                <option value="">Select Location</option>
                <option value="Palm Jumeirah">Palm Jumeirah</option>
                <option value="Downtown Dubai">Downtown Dubai</option>
                <option value="Dubai Marina">Dubai Marina</option>
                <option value="Jumeirah">Jumeirah</option>
                <option value="Dubai Hills">Dubai Hills</option>
                <option value="Business Bay">Business Bay</option>
                <option value="Emirates Hills">Emirates Hills</option>
              </select>
            </div>

            <div className="input-group">
              <div className="input-icon">
                <img src={propertyIcon} alt="Property Type" />
              </div>
              <select name="type" onChange={handleChange} value={filters.type}>
                <option value="">Select Type</option>
                <option value="Apartment">Apartment</option>
                <option value="Villa">Villa</option>
                <option value="Penthouse">Penthouse</option>
                <option value="Townhouse">Townhouse</option>
              </select>
            </div>

            <div className="input-group">
              <div className="input-icon">
                <img src={priceIcon} alt="Price" />
              </div>
              <select name="price" onChange={handleChange} value={filters.price}>
                <option value="">Select Price Range</option>
                <option value="1950000">Up to AED 1.95M</option>
                <option value="2150000">Up to AED 2.15M</option>
                <option value="2400000">Up to AED 2.4M</option>
                <option value="3100000">Up to AED 3.1M</option>
                <option value="8500000">Up to AED 8.5M</option>
                <option value="9300000">Up to AED 9.3M</option>
                <option value="12000000">Up to AED 12M</option>
                <option value="14500000">Up to AED 14.5M</option>
                <option value="25000000">Up to AED 25M+</option>
              </select>
            </div>

            <button className="search-button" onClick={handleSearch}>
              <span>Search Now</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;