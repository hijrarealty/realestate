import React, { useState } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

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
HOME PAGE
========================= */

const HomePage = () => {
  const [filters, setFilters] = useState(null);

  return (
    <>
      <Header />

      <HeroSection onSearch={setFilters} />

      <PropertiesSection filters={filters} />

      <WhyChooseUs />

      <CommunitiesSection />

      <PremiumExperience />

      <DreamHomeCTA />

      <AboutUAE />

      <VideoHero />

      <Partners />

      <Footer />
      
    </>
  );
};

/* =========================
APP
========================= */

const App = () => {
  return (
    <BrowserRouter>

      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={<HomePage />}
        />

        {/* CONTACT */}
        <Route
          path="/contact"
          element={<ContactPage />}
        />

      </Routes>

    </BrowserRouter>
  );
};

export default App;