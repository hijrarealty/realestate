import React, { useEffect, useState } from "react";
import "./Header.css";
import colorLogo from "../assets/logo-color.png";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {

    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        const section = document.getElementById(id);

        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
          });
        }
      }, 100);

    } else {

      const section = document.getElementById(id);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
        });
      }
    }

    setMenuOpen(false);
  };

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>

      <div className="header-container">

        {/* LOGO */}

        <div
          className="logo"
          onClick={() => navigate("/")}
        >
          <img
            src={colorLogo}
            alt="Hijra Realty"
            className="logo-img"
          />
        </div>

        {/* NAVIGATION */}

        <nav className={`nav ${menuOpen ? "open" : ""}`}>

          <button onClick={() => scrollToSection("hero")}>
            Home
          </button>

          <button onClick={() => scrollToSection("properties")}>
            Properties
          </button>

          <button onClick={() => scrollToSection("communities")}>
            Communities
          </button>

          <button onClick={() => scrollToSection("about")}>
            About
          </button>

          <button onClick={() => navigate("/contact")}>
            Contact
          </button>

        </nav>

        {/* ACTIONS */}

        <div className="header-actions">

          <button
            className="contact-btn"
            onClick={() => navigate("/contact")}
          >
            Contact Us
          </button>

          <div
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </div>

        </div>

      </div>

      {/* OVERLAY */}

      {menuOpen && (
        <div
          className="mobile-overlay"
          onClick={() => setMenuOpen(false)}
        />
      )}

    </header>
  );
};

export default Header;