import "./Footer.css";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope
} from "react-icons/fa";

import footerLogo from "../assets/footer-logo.png";

export default function Footer() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="footer" className="footer">
      {/* Newsletter */}
      <div className="newsletter">
        <div className="newsletter-text">
          <h3>Subscribe to Our Newsletter</h3>
          <p>Get the latest property updates and exclusive offers straight to your inbox</p>
        </div>

        <form onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Enter your email address" required />
          <button type="submit">Subscribe Now</button>
        </form>
      </div>

      {/* Footer Content */}
      <div className="footer-content">
        {/* Brand */}
        <div className="footer-col brand">
          <img src={footerLogo} alt="HIJRAREALTYGROUP" className="footer-logo" />
          <p>
            We are creators of transformative spaces that inspire,
            innovate, and endure. Your trusted partner in luxury real estate.
          </p>

          <div className="socials">
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li onClick={() => scrollToSection("hero")}>Home</li>
            <li onClick={() => scrollToSection("properties")}>Properties</li>
            <li onClick={() => scrollToSection("communities")}>Communities</li>
            <li onClick={() => scrollToSection("about")}>About Us</li>
            <li onClick={() => scrollToSection("why-choose")}>Why Choose Us</li>
            <li onClick={() => scrollToSection("footer")}>Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4>Contact Information</h4>

          <div className="contact-item">
            <FaMapMarkerAlt />
            <span>Fujairah Creative City - Media Free Zone Fujairah - Twin Towers P.O.Box 4422 Fujairah</span>
          </div>

          <div className="contact-item">
            <FaPhoneAlt />
            <span>+971 58 984 2522</span>
          </div>

          <div className="contact-item">
            <FaEnvelope />
            <span>info@yourofficepartners.com</span>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© 2026 HIJRAREALTYGROUP. All Rights Reserved.</p>
      </div>
    </footer>
  );
}