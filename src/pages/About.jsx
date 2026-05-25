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

        <div className="about-section">
          <h2>How It Works</h2>
          <p>
            We structured this platform into simple, intentional steps to support you:
          </p>
          <ul className="about-features">
            <li><strong>Stormy Minds:</strong> Learn to identify and understand common emotional struggles like chronic stress, deep anxiety, and isolation.</li>
            <li><strong>Healing Pathways:</strong> Access instant interactive coping tools, like our rhythmic breathing circle, to ground your nervous system.</li>
            <li><strong>Support Networks:</strong> Find verified, trusted professional helplines when you need human support.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;