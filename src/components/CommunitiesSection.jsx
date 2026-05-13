import React, { useRef, useEffect, useState } from "react";
import "./CommunitiesSection.css";
import downtown from "../assets/downtown.jpg";
import marina from "../assets/marina.jpg";
import palm from "../assets/palm.jpg";
import businessBay from "../assets/businessbay.jpg";
import jbr from "../assets/jbr.jpg";
import dubaiHills from "../assets/dubai.jpg";
import city from "../assets/city.jpg";

const communities = [
  {
    id: 1,
    title: "Downtown Dubai",
    image: downtown,
    properties: 145,
    tag: "Icon District",
    description:
      "Luxury residences surrounding the iconic Burj Khalifa skyline with unmatched views.",
  },
  {
    id: 2,
    title: "Business Bay",
    image: businessBay,
    properties: 178,
    tag: "Waterfront",
    description:
      "Modern waterfront living with premium high-rise apartments and canal views.",
  },
  {
    id: 3,
    title: "Dubai Marina",
    image: marina,
    properties: 230,
    tag: "Marina Life",
    description: "Waterfront lifestyle with world-class entertainment.",
  },
  {
    id: 4,
    title: "Palm Jumeirah",
    image: palm,
    properties: 90,
    tag: "Ultra Luxury",
    description: "Exclusive beachfront villas and ultra luxury residences.",
  },
  {
    id: 5,
    title: "JBR Beach",
    image: jbr,
    properties: 120,
    tag: "Beachfront",
    description: "Vibrant beachfront community with premium towers.",
  },
  {
    id: 6,
    title: "Dubai Hills",
    image: dubaiHills,
    properties: 160,
    tag: "Green Living",
    description: "Green luxury community with championship golf residences.",
  },
  {
    id: 7,
    title: "City Walk",
    image: city,
    properties: 110,
    tag: "Urban Chic",
    description: "Contemporary urban lifestyle with luxury retail and cafés.",
  },
];

const CommunityCard = ({ item, index }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`community-card card-${index + 1} ${visible ? "is-visible" : ""}`}
      style={{ "--delay": `${index * 80}ms` }}
    >
      <img src={item.image} alt={item.title} className="card-img" />
      <div className="card-overlay" />

      <div className="card-top-row">
        <span className="card-tag">{item.tag}</span>
        <span className="card-index">0{item.id}</span>
      </div>

      <div className="card-body">
        <p className="card-props">
          <span className="props-dot" />
          {item.properties} Properties
        </p>
        <h3 className="card-title">{item.title}</h3>
        <p className="card-desc">{item.description}</p>
        <button className="card-btn" aria-label={`Explore ${item.title}`}>
          <span>Explore</span>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M2 7h10M7 2l5 5-5 5"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

const CommunitiesSection = () => {
  return (
    <section id="communities" className="communities-section">
      <div className="communities-wrap">

        {/* ── HEADER ── */}
        <header className="communities-header">
          <div className="header-eyebrow">
            <span className="eyebrow-line" />
            <span className="eyebrow-text">Explore UAE</span>
            <span className="eyebrow-line" />
          </div>
          <h2 className="header-title">
            Discover Premium<br />
            <em>Communities</em>
          </h2>
          <p className="header-sub">
            Dubai's most prestigious destinations offering exceptional
            lifestyles, investment opportunities, and world-class living.
          </p>
        </header>

        {/* ── GRID ── */}
        <div className="communities-grid">
          {communities.map((item, i) => (
            <CommunityCard key={item.id} item={item} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default CommunitiesSection;  