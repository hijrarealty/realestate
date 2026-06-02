import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* COMMON */
import Header from "./components/Header";
import Footer from "./components/Footer";

/* HOME COMPONENTS */
import HeroSection from "./components/HeroSection";
import PropertiesSection from "./components/PropertiesSection";
import WhyChooseUs from "./components/WhyChooseUs";
import CommunitiesSection from "./components/CommunitiesSection";
import PremiumExperience from "./components/PremiumExperience";
import DreamHomeCTA from "./components/DreamHomeCTA";
import AboutUAE from "./components/AboutUAE";
import VideoHero from "./components/VideoHero";
import Partners from "./components/Partners";

/* PAGES */
import ContactPage from "./pages/ContactPage";

/* =========================
   ✅ SEO HOOK
========================= */
const useSEO = ({ title, description, canonical }) => {
  useEffect(() => {
    // Update title
    if (title) document.title = title;

    // Update meta description
    const setMeta = (name, value) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", value);
    };

    // Update canonical
    const setCanonical = (href) => {
      let el = document.querySelector("link[rel='canonical']");
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", "canonical");
        document.head.appendChild(el);
      }
      el.setAttribute("href", href);
    };

    if (description) setMeta("description", description);
    if (canonical) setCanonical(canonical);
  }, [title, description, canonical]);
};

/* =========================
   ✅ HOME PAGE
========================= */
const HomePage = () => {
  const [filters, setFilters] = useState(null);

  // ✅ SEO for Home Page  (THIS is what Google actually displays — overrides index.html)
  useSEO({
    title: "HIJRA REALTY GROUP — Buy & Sell Luxury Properties in Dubai, UAE",
    description:
      "Find premium residential & commercial properties in Dubai, UAE. Hijra Realty Group offers verified listings, expert agents, and end-to-end legal support. Call +971 58 984 2522.",
    canonical: "https://www.hijrarealtygroup.com/",
  });

  return (
    <>
      <Header />

      {/* ✅ H1 — Hidden visually but readable by Google */}
      <h1
        style={{
          position: "absolute",
          width: "1px",
          height: "1px",
          padding: "0",
          margin: "-1px",
          overflow: "hidden",
          clip: "rect(0,0,0,0)",
          border: "0",
        }}
      >
        Luxury Properties for Sale in Dubai, UAE — Hijra Realty Group
      </h1>

      {/* ✅ Internal Navigation Links */}
      <nav
        aria-label="Quick links"
        style={{
          position: "absolute",
          width: "1px",
          height: "1px",
          overflow: "hidden",
          clip: "rect(0,0,0,0)",
        }}
      >
        <a href="/">Home</a>
        <a href="/properties">Properties</a>
        <a href="/communities">Communities</a>
        <a href="/about">About Us</a>
        <a href="/contact">Contact</a>
      </nav>

      {/* ✅ Page Sections wrapped in semantic HTML */}
      <main id="main-content">

        <section aria-label="Hero">
          <HeroSection onSearch={setFilters} />
        </section>

        <section aria-labelledby="properties-heading">
          <h2
            id="properties-heading"
            style={{
              position: "absolute",
              width: "1px",
              height: "1px",
              overflow: "hidden",
              clip: "rect(0,0,0,0)",
            }}
          >
            Featured Properties in Dubai, UAE
          </h2>
          <PropertiesSection filters={filters} />
        </section>

        <section aria-labelledby="why-heading">
          <h2
            id="why-heading"
            style={{
              position: "absolute",
              width: "1px",
              height: "1px",
              overflow: "hidden",
              clip: "rect(0,0,0,0)",
            }}
          >
            Why Choose Hijra Realty Group
          </h2>
          <WhyChooseUs />
        </section>

        <section aria-labelledby="communities-heading">
          <h2
            id="communities-heading"
            style={{
              position: "absolute",
              width: "1px",
              height: "1px",
              overflow: "hidden",
              clip: "rect(0,0,0,0)",
            }}
          >
            Top Communities in Dubai
          </h2>
          <CommunitiesSection />
        </section>

        <section aria-label="Premium Experience">
          <PremiumExperience />
        </section>

        <section aria-label="Dream Home CTA">
          <DreamHomeCTA />
        </section>

        <section aria-labelledby="uae-heading">
          <h2
            id="uae-heading"
            style={{
              position: "absolute",
              width: "1px",
              height: "1px",
              overflow: "hidden",
              clip: "rect(0,0,0,0)",
            }}
          >
            About Real Estate in UAE
          </h2>
          <AboutUAE />
        </section>

        <section aria-label="Video">
          <VideoHero />
        </section>

        <section aria-labelledby="partners-heading">
          <h2
            id="partners-heading"
            style={{
              position: "absolute",
              width: "1px",
              height: "1px",
              overflow: "hidden",
              clip: "rect(0,0,0,0)",
            }}
          >
            Our Trusted Partners
          </h2>
          <Partners />
        </section>

      </main>

      {/*
        ✅ Schema.org Microdata — now INSIDE HomePage so it actually renders.
        ⚠️ Address/geo kept as the real FUJAIRAH office. If you have truly moved to
        Dubai, update these to your real Dubai address + coordinates.
      */}
      <div
        itemScope
        itemType="https://schema.org/RealEstateAgent"
        style={{ display: "none" }}
      >
        <span itemProp="name">Hijra Realty Group</span>
        <span itemProp="telephone">+971589842522</span>
        <span itemProp="email">info@hijrarealtygroup.com</span>
        <span itemProp="url">https://www.hijrarealtygroup.com</span>
        <div
          itemProp="address"
          itemScope
          itemType="https://schema.org/PostalAddress"
        >
          <span itemProp="streetAddress">
            Fujairah Creative City - Media Free Zone, Twin Towers
          </span>
          <span itemProp="addressLocality">Fujairah</span>
          <span itemProp="addressRegion">Fujairah</span>
          <span itemProp="postalCode">4422</span>
          <span itemProp="addressCountry">AE</span>
        </div>
        <div
          itemProp="geo"
          itemScope
          itemType="https://schema.org/GeoCoordinates"
        >
          <span itemProp="latitude">25.1288</span>
          <span itemProp="longitude">56.3265</span>
        </div>
        <span itemProp="openingHours">Mo-Sa 09:00-18:00</span>
      </div>

      <Footer />
    </>
  );
};

/* =========================
   ✅ CONTACT PAGE
========================= */
const ContactPageWrapper = () => {

  // ✅ SEO for Contact Page
  // ⚠️ Title says Dubai for brand consistency, but the office described below is the
  //    real Fujairah address. Keep these aligned with whatever your true location is.
  useSEO({
    title: "Contact HIJRA REALTY GROUP — Dubai, UAE | +971 58 984 2522",
    description:
      "Contact Hijra Realty Group at Fujairah Creative City, Twin Towers. Call +971 58 984 2522 or email info@hijrarealtygroup.com for property inquiries.",
    canonical: "https://www.hijrarealtygroup.com/contact",
  });

  return <ContactPage />;
};

/* =========================
   ✅ APP
========================= */
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* HOME */}
        <Route path="/" element={<HomePage />} />

        {/* CONTACT */}
        <Route path="/contact" element={<ContactPageWrapper />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;