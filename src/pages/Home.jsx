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
          <h1>Better Mind,<br />Better Life.</h1>
          <p className="hero-description">
            NeuroBloom is an intentional, compassionate space designed to help you decode 
            your internal emotional weather, practice grounding techniques, and connect 
            with certified professionals.
          </p>
          <div className="hero-button-group">
            <button className="btn-primary-explore" onClick={() => navigate("/stormyminds")}>
              Explore Stormy Minds <IoArrowForwardOutline className="btn-arrow" />
            </button>
          </div>
        </div>

        <div className="hero-graphic-right">
          <div className="image-border-glow">
            <img src={mind} alt="NeuroBloom Mind Canvas Graphic" className="hero-canvas-img" />
          </div>
        </div>
      </section>

      {/* Lower Feature Grid: Three Core Architecture Pillars */}
      <section className="pillars-grid-section">
        <div className="pillar-card" onClick={() => navigate("/stormyminds")}>
          <div className="pillar-icon-wrapper storm-icon-bg">
            <FiCloudLightning className="pillar-icon-svg" />
          </div>
          <h3>1. Stormy Minds</h3>
          <p>Identify, break down, and understand complex emotional struggles like burnout, anxiety, and overthinking.</p>
        </div>

        <div className="pillar-card" onClick={() => navigate("/healingpathways")}>
          <div className="pillar-icon-wrapper healing-icon-bg">
            <FiHeart className="pillar-icon-svg" />
          </div>
          <h3>2. Healing Pathways</h3>
          <p>Access somatic practices, grounding tools, and interactive breathing tools to calm your nervous system instantly.</p>
        </div>

        <div className="pillar-card" onClick={() => navigate("/services")}>
          <div className="pillar-icon-wrapper professional-icon-bg">
            <FiShield className="pillar-icon-svg" />
          </div>
          <h3>3. Professional Support</h3>
          <p>Direct, verified hotlines to certified clinics and counselors who are ready to give you dedicated talking space.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;