import React, { useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import PropertiesSection from "./components/PropertiesSection";
import WhyChooseUs from "./components/WhyChooseUs";
import CommunitiesSection from "./components/CommunitiesSection";
import PremiumExperience from "./components/PremiumExperience";
import DreamHomeCTA from "./components/DreamHomeCTA";
import AboutUAE from "./components/AboutUAE";
import VideoHero from "./components/VideoHero";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Partners from "./components/Partners";

const App = () => {
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
      <Contact />
      <Footer />
    </>
  );
};

export default App;
