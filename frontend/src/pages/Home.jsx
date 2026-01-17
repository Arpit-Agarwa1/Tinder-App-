import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-text">
          <h1>
            Find Your <span>Perfect Match</span>
          </h1>
          <p>
            Real people. Real connections. Start meaningful conversations today.
          </p>
          <button className="cta-btn">Start Matching</button>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
            alt="dating"
          />
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <div className="feature-card">
          ❤️ <h3>Smart Matches</h3>
          <p>We match you with people who truly fit your vibe.</p>
        </div>

        <div className="feature-card">
          🔒 <h3>Safe & Secure</h3>
          <p>Your data and privacy are always protected.</p>
        </div>

        <div className="feature-card">
          💬 <h3>Instant Chat</h3>
          <p>Start conversations instantly with mutual matches.</p>
        </div>
      </section>
    </div>
  );
}
