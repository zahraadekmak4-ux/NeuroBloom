// 1. Import your local images from the assets folder here:
import burnout from "../assets/burnout.png";
import sadness from "../assets/sadness.jpg";
import worry from "../assets/worry.webp";
import anger from "../assets/anger.jpg";
import numbness from "../assets/numbness.webp";
import overthinking from "../assets/overthinking.jpg";
import selfesteem from "../assets/selfesteem.jpg";
import moodswings from "../assets/moodswings.webp";

import "./StormyMinds.css";

function StormyMinds() {
  const storms = [
    {
      title: "Feeling Constantly Tired",
      subtitle: "Burnout & Chronic Stress",
      desc: "When daily life feels like too much work. Your mind is exhausted, even simple tasks feel like climbing a mountain, and you have zero energy left.",
      image: burnout // <-- Using your imported local variable!
    },
    {
      title: "Deep Sadness",
      subtitle: "Depression & Isolation",
      desc: "A heavy, quiet feeling that makes everything look dark. You feel like staying away from family and friends, and you lose interest in the things you used to love.",
      image: sadness
    },
    {
      title: "Constant Worry & Panic",
      subtitle: "Anxiety & Racing Thoughts",
      desc: "When your heart beats fast even while sitting down. Your mind gets stuck in 'what-if' loops, overthinking past conversations and worrying about the future.",
      image: worry
    },
    {
      title: "Getting Angry Easily",
      subtitle: "Irritability & Hidden Stress",
      desc: "Feeling like you are always on edge. Tiny things upset you quickly because you are holding onto a lot of hidden emotional pressure inside.",
      image: anger
    },
    {
      title: "Feeling Completely Numb",
      subtitle: "Emotional Shutdown",
      desc: "When your mind shuts off your emotions to protect you. You don't feel sad or angry; you just feel empty, hollow, and disconnected from the world.",
      image: numbness
    },
    {
      title: "Overthinking at Night",
      subtitle: "Insomnia & Sleep Struggles",
      desc: "Lying wide awake in bed while the whole world is asleep. Your brain won't shut off because it keeps reminding you of old mistakes, making it impossible to rest.",
      image: overthinking
    },
    {
      title: "Disliking What You See in the Mirror",
      subtitle: "Low Self-Esteem",
      desc: "An internal critical voice that makes you feel like you aren't good enough. It focuses entirely on your flaws, making it hard to feel confident around others.",
      image: selfesteem
    },
    {
      title: "Sudden Mood Changes",
      subtitle: "Emotional Swings",
      desc: "Experiencing extreme shifts in your mood. Moving quickly from feeling super motivated and excited to suddenly crashing into absolute emotional exhaustion.",
      image: moodswings
    }
  ];

  return (
    <div className="stormy-container">
      <div className="stormy-header">
        <h1>Stormy Minds</h1>
        <p className="stormy-intro">
          Our minds are like the weather—sometimes, heavy storms set in. 
          Understanding exactly what you are feeling is the first brave step to finding clear skies.
        </p>
      </div>

      <div className="storms-grid-layout">
        {storms.map((storm, index) => (
          <div key={index} className="creative-storm-card">
            <div className="storm-img-container">
              <img src={storm.image} alt={storm.title} className="professional-storm-photo" />
              <span className="storm-idx-tag">Problem 0{index + 1}</span>
            </div>
            <div className="storm-text-container">
              <h3>{storm.subtitle}</h3>
              <h2>{storm.title}</h2>
              <p>{storm.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StormyMinds;