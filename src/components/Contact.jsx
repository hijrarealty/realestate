import "./Contact.css";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

export default function Contact() {
  return (
    <section id="contact" className="contact-wrapper">
      <div className="contact-container">

        {/* Left Info */}
        <div className="contact-info">
          <h4>CONTACT INFO</h4>

          <div className="info-item">
            <MdEmail className="icon" />
            <div className="info-text">
              <p>info@yourofficepartners.com</p>
            </div>
          </div>

          <div className="info-item">
            <MdPhone className="icon" />
            <div className="info-text">
              <p>+971 58 984 2522</p>
            </div>
          </div>

          <div className="info-item">
            <MdLocationOn className="icon" />
            <div className="info-text">
              <p>Fujairah Creative City - Media Free Zone</p>
              <span>Fujairah - Twin Towers
P .O.Box 4422 Fujairah</span>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="contact-form">
          <h2>
            Let’s work <span>together.</span>
          </h2>

          <form
            action="https://formspree.io/f/xeelpyeo"
            method="POST"
          >
            <input
              type="text"
              name="name"
              placeholder="Name *"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email *"
              required
            />

            <input
              type="text"
              name="subject"
              placeholder="Your Subject *"
              required
            />

            <textarea
              name="message"
              placeholder="Type your message here"
              rows="5"
              required
            ></textarea>

            <button type="submit">
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}  