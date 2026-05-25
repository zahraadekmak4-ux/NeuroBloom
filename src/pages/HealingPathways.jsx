// 1. Import your local images from the assets folder
import breathing from "../assets/breathing.webp";
import grounding from "../assets/grounding.png";
import journaling from "../assets/journaling.jpg";
import movement from "../assets/movement.png";
import digitaldetox from "../assets/digitaldetox.jpg";
import selfcompassion from "../assets/selfcompassion.webp";
import water from "../assets/water.jpg";
import routine from "../assets/routine.webp";

import "./HealingPathways.css";

function HealingPathways() {
  const pathways = [
    {
      title: "Take a Deep Breath",
      subtitle: "Calm Your Nervous System",
      desc: "Inhale slowly for 4 seconds, hold it for 4, and exhale for 4. Doing this a few times immediately tells your brain that you are safe and can relax.",
      image: breathing
    },
    {
      title: "Look Around the Room",
      subtitle: "The 5-4-3-2-1 Grounding Method",
      desc: "Name 5 things you can see, 4 things you can touch, 3 things you hear, 2 things you smell, and 1 thing you taste. This snaps your mind out of a worry loop.",
      image: grounding
    },
    {
      title: "Write Down Your Thoughts",
      subtitle: "Brain-Dump Journaling",
      desc: "Grab a piece of paper and write down everything you are feeling without filtering it. Getting the thoughts out of your head makes them feel much smaller.",
      image: journaling
    },
    {
      title: "Stretch Your Body",
      subtitle: "Release Trapped Tension",
      desc: "Stand up, drop your shoulders, and stretch your arms up high. Stress physically locks up in your muscles; gentle movement lets that heavy energy out.",
      image: movement
    },
    {
      title: "Put Down Your Phone",
      subtitle: "A Quick Digital Detox",
      desc: "Turn off your screens for just 15 minutes. Constantly checking social media or reading the news overloads an already tired, stressed mind.",
      image: digitaldetox
    },
    {
      title: "Be Kind to Yourself",
      subtitle: "Self-Compassion Break",
      desc: "Talk to yourself the exact same way you would comfort your best friend. Remind yourself that it is completely okay to feel overwhelmed sometimes.",
      image: selfcompassion
    },
    {
      title: "Drink a Glass of Water",
      subtitle: "Reset via Hydration",
      desc: "Sip a cold glass of water slowly or step outside for fresh air. Small physical adjustments give your brain an immediate reset button.",
      image: water
    },
    {
      title: "Do Just One Small Thing",
      subtitle: "Build Low-Pressure Routine",
      desc: "Pick one tiny task—like making your bed, washing a single dish, or clearing your desk. Completing it brings back a comforting sense of control.",
      image: routine
    }
  ];

  return (
    <div className="healing-container">
      <div className="healing-header">
        <h1>Healing Pathways</h1>
        <p className="healing-intro">
          You don't have to fix everything all at once. When the internal weather gets rough, 
          try choosing just one gentle practice below to bring yourself back to calm.
        </p>
      </div>

      <div className="healing-grid-layout">
        {pathways.map((path, index) => (
          <div key={index} className="creative-healing-card">
            <div className="healing-img-container">
              <img src={path.image} alt={path.title} className="professional-healing-photo" />
              <span className="healing-idx-tag">Solution 0{index + 1}</span>
            </div>
            <div className="healing-text-container">
              <h3>{path.subtitle}</h3>
              <h2>{path.title}</h2>
              <p>{path.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HealingPathways;