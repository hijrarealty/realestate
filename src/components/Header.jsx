import React, { useEffect, useState } from "react";
import "./Header.css";
import colorLogo from "../assets/logo-white.png";

import {
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";

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
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  }, []);

  const scrollToSection = (id) => {

    if (location.pathname !== "/") {
      navigate(`/#${id}`);

      return;
    }

    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }

    setMenuOpen(false);

  };

  return (

    <header
      className={`header ${scrolled ? "scrolled" : ""}`}
    >

      <div className="header-container">

        {/* LOGO */}

        <Link
          to="/"
          className="logo"
          aria-label="Hijra Realty Home"
        >

          <img
            src={colorLogo}
            alt="Hijra Realty Logo"
            className="logo-img"
            width="160"
            height="60"
            loading="eager"
            decoding="async"
          />

        </Link>

        {/* NAVIGATION */}

        <nav
          className={`nav ${menuOpen ? "open" : ""}`}
          aria-label="Main Navigation"
        >

          <ul>

            <li>
              <a href="/#hero" >
                Home
              </a>
            </li>

            <li>
              <a href="/#properties" >
                Properties
              </a>
            </li>

            <li>
              <a href="/#communities" >
                Communities
              </a>
            </li>

            <li>
              <a href="/#about" >
                About
              </a>
            </li>

            <li>
              <Link to="/contact" >
                Contact
              </Link>
            </li>

          </ul>

        </nav>

        {/* ACTIONS */}

        <div className="header-actions">

          <Link
            to="/contact"
            className="contact-btn"
          >
            Contact Us
          </Link>

          <button
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >

            <span />
            <span />
            <span />

          </button>

        </div>

      </div>

      {/* MOBILE OVERLAY */}

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