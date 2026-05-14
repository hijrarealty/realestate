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

  const handleSearch = (e) => {

    e.preventDefault();

    onSearch(filters);
  };

  return (

    <section
      className="hero-wrapper"
      id="hero"
      aria-label="Luxury Real Estate Hero Section"
    >

      <div className="hero-container">

        {/* SEO + PERFORMANCE IMAGE */}

        <img
          src={heroBg}
          alt="Luxury real estate property in Dubai"
          className="hero-bg-image"
          fetchPriority="high"
          loading="eager"
          decoding="async"
          width="1920"
          height="1080"
        />

        {/* OVERLAY */}

        <div className="hero-overlay" />

        {/* CONTENT */}

        <div className="hero-content">

          {/* TAGS */}

          <div className="hero-tags">

            <span>Luxury</span>

            <span>Architectural</span>

            <span>Premium</span>

          </div>

          {/* MAIN GRID */}

          <div className="hero-grid">

            {/* LEFT */}

            <div className="hero-left">

              <h1>
                Own Your World,
                <br />
                One Property at a Time.
              </h1>

            </div>

            {/* RIGHT */}

            <div className="hero-right">

              <p>
                Seamlessly navigate the UAE real estate market.
                Discover curated luxury homes, villas, and
                premium investment opportunities tailored to
                your lifestyle.
              </p>

            </div>

          </div>

          {/* SEARCH FORM */}

          <form
            className="hero-search-bar"
            onSubmit={handleSearch}
            aria-label="Property Search Form"
          >

            {/* TYPE */}

            <div className="search-item">

              <label htmlFor="property-type">
                Type
              </label>

              <select
                id="property-type"
                name="type"
                value={filters.type}
                onChange={handleChange}
                aria-label="Select Property Type"
              >

                <option value="">
                  Select Type
                </option>

                <option value="Apartment">
                  Apartment
                </option>

                <option value="Villa">
                  Villa
                </option>

                <option value="Penthouse">
                  Penthouse
                </option>

                <option value="Townhouse">
                  Townhouse
                </option>

              </select>

            </div>

            {/* PRICE */}

            <div className="search-item">

              <label htmlFor="property-price">
                Price
              </label>

              <select
                id="property-price"
                name="price"
                value={filters.price}
                onChange={handleChange}
                aria-label="Select Budget Range"
              >

                <option value="">
                  Budget Range
                </option>

                <option value="2000000">
                  AED 2M
                </option>

                <option value="5000000">
                  AED 5M
                </option>

                <option value="10000000">
                  AED 10M+
                </option>

              </select>

            </div>

            {/* LOCATION */}

            <div className="search-item">

              <label htmlFor="property-location">
                Area
              </label>

              <select
                id="property-location"
                name="location"
                value={filters.location}
                onChange={handleChange}
                aria-label="Select Property Area"
              >

                <option value="">
                  Select Area
                </option>

                <option value="Palm Jumeirah">
                  Palm Jumeirah
                </option>

                <option value="Dubai Marina">
                  Dubai Marina
                </option>

                <option value="Downtown Dubai">
                  Downtown Dubai
                </option>

                <option value="Dubai Hills">
                  Dubai Hills
                </option>

              </select>

            </div>

            {/* SEARCH BUTTON */}

            <button
              type="submit"
              className="hero-search-btn"
              aria-label="Search Properties"
            >

              Search

            </button>

          </form>

        </div>

      </div>

    </section>
  );
};

export default HeroSection;