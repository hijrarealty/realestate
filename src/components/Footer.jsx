import "./Footer.css";
import { useState } from "react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowUp,
  FaRegClock
} from "react-icons/fa";

import footerLogo from "../assets/footer-logo.png";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail("");
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  const quickLinks = [
    { name: "Home", id: "hero" },
    { name: "Properties", id: "properties" },
    { name: "Communities", id: "communities" },
    { name: "About Us", id: "about" },
    { name: "Why Choose Us", id: "why-choose" },
    { name: "Contact", id: "footer" },
  ];

  const contactInfo = [
    { icon: FaMapMarkerAlt, text: "Fujairah Creative City - Media Free Zone Fujairah - Twin Towers P.O.Box 4422 Fujairah", delay: "0.1s" },
    { icon: FaPhoneAlt, text: "+971 58 984 2522", delay: "0.2s" },
    { icon: FaEnvelope, text: "info@yourofficepartners.com", delay: "0.3s" },
    { icon: FaRegClock, text: "Mon - Fri: 9:00 AM - 6:00 PM", delay: "0.4s" },
  ];

  const socialLinks = [
    { icon: FaFacebookF, url: "#", label: "Facebook", color: "#1877f2" },
    { icon: FaInstagram, url: "#", label: "Instagram", color: "#e4405f" },
    { icon: FaLinkedinIn, url: "#", label: "LinkedIn", color: "#0077b5" },
  ];

  return (
    <footer id="footer" className="footer">
      {/* Wave SVG Divider */}
      <div className="footer-wave">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="wave-fill"></path>
        </svg>
      </div>

      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-main">
          {/* Brand Section */}
          <div className="footer-section brand-section">
            <div className="brand-wrapper">
              <img src={footerLogo} alt="HIJRAREALTYGROUP" className="footer-logo" />
              <div className="brand-badge">
                <span>Luxury Redefined</span>
              </div>
            </div>
            <p className="brand-description">
              We are creators of transformative spaces that inspire, innovate, and endure. 
              Your trusted partner in luxury real estate since 2010.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="footer-section links-section">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="quick-links">
              {quickLinks.map((link, index) => (
                <li 
                  key={index}
                  onClick={() => scrollToSection(link.id)}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <span className="link-dot"></span>
                  {link.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="footer-section contact-section">
            <h3 className="footer-heading">Contact Info</h3>
            <div className="contact-list">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={index} 
                    className="contact-item"
                    style={{ animationDelay: item.delay }}
                  >
                    <div className="contact-icon-wrapper">
                      <Icon />
                    </div>
                    <span>{item.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Newsletter Section - Modern Redesign */}
        <div className="newsletter-modern">
          <div className="newsletter-content">
            <div className="newsletter-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 6L12 13L2 6M22 6V18C22 18.5304 21.7893 19.0391 21.4142 19.4142C21.0391 19.7893 20.5304 20 20 20H4C3.46957 20 2.96086 19.7893 2.58579 19.4142C2.21071 19.0391 2 18.5304 2 18V6M22 6C22 5.46957 21.7893 4.96086 21.4142 4.58579C21.0391 4.21071 20.5304 4 20 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6M22 6L12 13L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="newsletter-text">
              <h3>Stay in the Loop</h3>
              <p>Subscribe to receive exclusive property updates, market insights, and special offers</p>
            </div>
            <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
              <div className="input-wrapper">
                <FaEnvelope className="input-icon" />
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="newsletter-btn">
                {isSubmitted ? "Subscribed! ✓" : "Subscribe"}
              </button>
            </form>
          </div>
        </div>

        {/* Social Links */}
        <div className="social-section">
          <div className="social-links">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.url}
                  aria-label={social.label}
                  className="social-link"
                  style={{ transitionDelay: `${index * 0.05}s` }}
                >
                  <Icon />
                  <span className="social-tooltip">{social.label}</span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="bottom-content">
            <p className="copyright">
              © {new Date().getFullYear()} HIJRAREALTYGROUP. All Rights Reserved.
            </p>
            <div className="legal-links">
              <a href="#">Privacy Policy</a>
              <span className="separator">|</span>
              <a href="#">Terms of Service</a>
              <span className="separator">|</span>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button onClick={scrollToTop} className="scroll-top" aria-label="Scroll to top">
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
}