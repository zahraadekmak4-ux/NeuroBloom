import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About NeuroBloom</h1>
        <p className="about-subtitle">Why we built this space for you.</p>
      </div>

      <div className="about-content">
        <div className="about-section">
          <h2>Our Vision</h2>
          <p>
            Mental health isn't always clear skies. Just like nature, our minds experience 
            seasons—some calm, and some stormy. "NeuroBloom" was created to be a safe, 
            anonymous, and comforting digital space where anyone can step in, catch their breath, 
            and understand what they are going through without judgment.
          </p>
        </div>

        {/* This second about-section automatically captures the animated container styles from CSS */}
        <div className="about-section">
          <h2>How It Works</h2>
          <p>
            We structured this platform into simple, intentional sectors to support you:
          </p>
          <ul className="about-features">
            <li>
              <strong>1. Mind Hub:</strong> Our core sanctuary where deep emotional struggles are directly paired with actionable, real-time coping strategies.
            </li>
            <li>
              <strong>2. Digital Exercises:</strong> Access to interactive grounding systems and a rhythmic breathing circle tool engineered to instantly calm your nervous system.
            </li>
            <li>
              <strong>3. Support Networks:</strong> Find verified, trusted professional helplines when you need open human support.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;