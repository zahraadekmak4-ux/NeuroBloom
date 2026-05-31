import { FiCloudLightning, FiHeart, FiShield } from "react-icons/fi"; 
import { IoArrowForwardOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import mind from "../assets/mind.webp";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Upper Main Hero Section */}
      <section className="hero-main-section">
        <div className="hero-content-left">
          <span className="hero-pill-badge">
            <FiShield className="badge-icon-svg" /> Your Safe Digital Sanctuary
          </span>
          <h1>Calm Mind.<br />Bright Future.</h1>
          <p className="hero-description">
            NeuroBloom is an intentional, compassionate space designed to help you decode 
            your internal emotional weather, practice grounding techniques, and maintain 
            healthy mental balance.
          </p>
          <div className="hero-button-group">
            {/* Navigates directly Mind Hub */}
            <button className="btn-primary-explore" onClick={() => navigate("/mindhub")}>
              Explore Mind Hub <IoArrowForwardOutline className="btn-arrow" />
            </button>
          </div>
        </div>

        <div className="hero-graphic-right">
          <div className="image-border-glow">
            <img src={mind} alt="NeuroBloom Mind Canvas Graphic" className="hero-canvas-img" />
          </div>
        </div>
      </section>

      
      <section className="pillars-grid-section">
        {/* Pillar 1: Points to Mind Hub */}
        <div className="pillar-card" onClick={() => navigate("/mindhub")}>
          <div className="pillar-icon-wrapper storm-icon-bg">
            <FiCloudLightning className="pillar-icon-svg" />
          </div>
          <h3>1. Mind Hub</h3>
          <p>Identify emotional struggles like burnout, overthinking, and isolation, and match them instantly with healing solutions.</p>
        </div>

        {/* Pillar 2: Points to  Digital Exercises page */}
        <div className="pillar-card" onClick={() => navigate("/exercises")}>
          <div className="pillar-icon-wrapper healing-icon-bg">
            <FiHeart className="pillar-icon-svg" />
          </div>
          <h3>2. Digital Exercises</h3>
          <p>Access somatic practices, grounding systems, and an interactive breathing circle tool to calm your nervous system.</p>
        </div>

        {/* Pillar 3: Points to  Contact section */}
        <div className="pillar-card" onClick={() => navigate("/contact")}>
          <div className="pillar-icon-wrapper professional-icon-bg">
            <FiShield className="pillar-icon-svg" />
          </div>
          <h3>3. Support & Contact</h3>
          <p>Connect directly with developers, explore safe resources, and find professional help centers when you need an open space.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;