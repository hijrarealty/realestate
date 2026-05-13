import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { 
  MdEmail, 
  MdPhone, 
  MdLocationOn, 
  MdAccessTime,
  MdSend,
  MdCheckCircle,
  MdErrorOutline
} from "react-icons/md";
import { FaRegBuilding, FaRegSmile, FaAward } from "react-icons/fa";
import "./ContactPage.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(formData.phone)) 
      newErrors.phone = "Phone number is invalid";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ fullName: "", email: "", phone: "", message: "" });
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  const contactCards = [
    {
      icon: MdEmail,
      title: "Email Address",
      details: ["info@yourofficepartners.com"],
      color: "#C8A96B"
    },
    {
      icon: MdPhone,
      title: "Phone Number",
      details: ["+971 58 984 2522"],
      color: "#8B5E3C"
    },
    {
      icon: MdLocationOn,
      title: "Office Locations",
      details: ["Fujairah Creative City - Media Free Zone Fujairah - Twin Towers  P.O.Box 4422 Fujairah"],
      color: "#A8742A"
    },
    {
      icon: MdAccessTime,
      title: "Working Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday - Sunday: Closed"],
      color: "#053718"
    }
  ];

  return (
    <>
      <Header />
      
      <section className="contact-page">
        {/* Decorative Background Elements */}
        <div className="contact-bg-shape-1"></div>
        <div className="contact-bg-shape-2"></div>
        <div className="contact-bg-shape-3"></div>

        {/* Hero Section */}
        <div className="contact-hero">
          <div className="hero-container">
            {/* <span className="hero-badge">
              <FaRegSmile />
              Get in Touch
            </span> */}
            <h1 className="hero-title">
              Let's Build Your
              <span className="title-highlight"> Luxury Future</span>
            </h1>
            <p className="hero-description">
              Connect with our expert real estate consultants for premium properties,
              investments, and exclusive opportunities tailored just for you.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="contact-main">
          <div className="contact-container">
            {/* Left Side - Contact Cards */}
            <div className="contact-left">
              <div className="cards-grid">
                {contactCards.map((card, index) => {
                  const Icon = card.icon;
                  return (
                    <div 
                      key={index} 
                      className="contact-card"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="card-icon-wrapper">
                        <Icon style={{ color: card.color }} />
                      </div>
                      <div className="card-content">
                        <h3>{card.title}</h3>
                        {card.details.map((detail, idx) => (
                          <p key={idx}>{detail}</p>
                        ))}
                      </div>
                      <div className="card-hover-line"></div>
                    </div>
                  );
                })}
              </div>

             
            </div>

            {/* Right Side - Contact Form */}
            <div className="contact-right">
              <div className="form-wrapper">
                <div className="form-header">
                  <h3>Send an <span>Inquiry</span></h3>
                  <p>Fill out the form below and we'll get back to you within 24 hours</p>
                </div>

                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="input-group">
                      <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name *"
                        value={formData.fullName}
                        onChange={handleChange}
                        className={errors.fullName ? "error" : ""}
                      />
                      {errors.fullName && (
                        <span className="error-message">
                          <MdErrorOutline />
                          {errors.fullName}
                        </span>
                      )}
                    </div>

                    <div className="input-group">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address *"
                        value={formData.email}
                        onChange={handleChange}
                        className={errors.email ? "error" : ""}
                      />
                      {errors.email && (
                        <span className="error-message">
                          <MdErrorOutline />
                          {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="input-group">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number *"
                      value={formData.phone}
                      onChange={handleChange}
                      className={errors.phone ? "error" : ""}
                    />
                    {errors.phone && (
                      <span className="error-message">
                        <MdErrorOutline />
                        {errors.phone}
                      </span>
                    )}
                  </div>

                  <div className="input-group">
                    <textarea
                      name="message"
                      placeholder="Tell us about your requirements... *"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      className={errors.message ? "error" : ""}
                    ></textarea>
                    {errors.message && (
                      <span className="error-message">
                        <MdErrorOutline />
                        {errors.message}
                      </span>
                    )}
                  </div>

                  <button 
                    type="submit" 
                    className="submit-button"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="btn-loading">
                        <span className="spinner"></span>
                        Sending...
                      </span>
                    ) : submitStatus === "success" ? (
                      <span className="btn-success">
                        <MdCheckCircle />
                        Sent Successfully!
                      </span>
                    ) : (
                      <span className="btn-default">
                        Send Inquiry
                        <MdSend />
                      </span>
                    )}
                  </button>
                </form>

                <div className="form-footer">
                  <p>We respect your privacy. Your information is secure with us.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="map-section">
          <div className="map-container">
            <div className="map-header">
              <h2>Find Us <span>Here</span></h2>
              <p>Visit our headquarters or any of our regional offices</p>
            </div>
            <div className="map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.8891538814026!2d56.352543!3d25.128809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef4f5a5b5b5b5b5%3A0x5b5b5b5b5b5b5b5b!2sFujairah%20Creative%20City!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location Map"
              ></iframe>
              <div className="map-overlay">
                <div className="map-location-card">
                  <MdLocationOn />
                  <div>
                    <strong>Head Office</strong>
                    <p>Fujairah Creative City, UAE</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ContactPage;