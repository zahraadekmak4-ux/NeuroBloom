import React, { useState } from "react";

// --- STORM IMPORTS ---
import burnout from "../assets/burnout.png";
import sadness from "../assets/sadness.jpg";
import worry from "../assets/worry.webp";
import anger from "../assets/anger.jpg";
import numbness from "../assets/numbness.webp";
import overthinking from "../assets/overthinking.jpg";
import selfesteem from "../assets/selfesteem.jpg";
import moodswings from "../assets/moodswings.webp";

// --- HEALING IMPORTS ---
import breathing from "../assets/breathing.webp";
import grounding from "../assets/grounding.png";
import journaling from "../assets/journaling.jpg";
import movement from "../assets/movement.png";
import digitaldetox from "../assets/digitaldetox.jpg";
import selfcompassion from "../assets/selfcompassion.webp";
import water from "../assets/water.jpg";
import routine from "../assets/routine.webp";

// Unified CSS File (Create this file or merge your old ones)
import "./MindHub.css"; 

function MindHub() {
  // We combine both sets of data into a single array of pairs!
  const mindData = [
    {
      id: "01",
      storm: {
        title: "Feeling Constantly Tired",
        subtitle: "Burnout & Chronic Stress",
        desc: "When daily life feels like too much work. Your mind is exhausted, even simple tasks feel like climbing a mountain, and you have zero energy left.",
        image: burnout
      },
      healing: {
        title: "Take a Deep Breath",
        subtitle: "Calm Your Nervous System",
        desc: "Inhale slowly for 4 seconds, hold it for 4, and exhale for 4. Doing this a few times immediately tells your brain that you are safe and can relax.",
        image: breathing
      }
    },
    {
      id: "02",
      storm: {
        title: "Deep Sadness",
        subtitle: "Depression & Isolation",
        desc: "A heavy, quiet feeling that makes everything look dark. You feel like staying away from family and friends, and you lose interest in the things you used to love.",
        image: sadness
      },
      healing: {
        title: "Look Around the Room",
        subtitle: "The 5-4-3-2-1 Grounding Method",
        desc: "Name 5 things you can see, 4 things you can touch, 3 things you hear, 2 things you smell, and 1 thing you taste. This snaps your mind out of a worry loop.",
        image: grounding
      }
    },
    {
      id: "03",
      storm: {
        title: "Constant Worry & Panic",
        subtitle: "Anxiety & Racing Thoughts",
        desc: "When your heart beats fast even while sitting down. Your mind gets stuck in 'what-if' loops, overthinking past conversations and worrying about the future.",
        image: worry
      },
      healing: {
        title: "Write Down Your Thoughts",
        subtitle: "Brain-Dump Journaling",
        desc: "Grab a piece of paper and write down everything you are feeling without filtering it. Getting the thoughts out of your head makes them feel much smaller.",
        image: journaling
      }
    },
    {
      id: "04",
      storm: {
        title: "Getting Angry Easily",
        subtitle: "Irritability & Hidden Stress",
        desc: "Feeling like you are always on edge. Tiny things upset you quickly because you are holding onto a lot of hidden emotional pressure inside.",
        image: anger
      },
      healing: {
        title: "Stretch Your Body",
        subtitle: "Release Trapped Tension",
        desc: "Stand up, drop your shoulders, and stretch your arms up high. Stress physically locks up in your muscles; gentle movement lets that heavy energy out.",
        image: movement
      }
    },
    {
      id: "05",
      storm: {
        title: "Feeling Completely Numb",
        subtitle: "Emotional Shutdown",
        desc: "When your mind shuts off your emotions to protect you. You don't feel sad or angry; you just feel empty, hollow, and disconnected from the world.",
        image: numbness
      },
      healing: {
        title: "Put Down Your Phone",
        subtitle: "A Quick Digital Detox",
        desc: "Turn off your screens for just 15 minutes. Constantly checking social media or reading the news overloads an already tired, stressed mind.",
        image: digitaldetox
      }
    },
    {
      id: "06",
      storm: {
        title: "Overthinking at Night",
        subtitle: "Insomnia & Sleep Struggles",
        desc: "Lying wide awake in bed while the whole world is asleep. Your brain won't shut off because it keeps reminding you of old mistakes, making it impossible to rest.",
        image: overthinking
      },
      healing: {
        title: "Be Kind to Yourself",
        subtitle: "Self-Compassion Break",
        desc: "Talk to yourself the exact same way you would comfort your best friend. Remind yourself that it is completely okay to feel overwhelmed sometimes.",
        image: selfcompassion
      }
    },
    {
      id: "07",
      storm: {
        title: "Disliking What You See in the Mirror",
        subtitle: "Low Self-Esteem",
        desc: "An internal critical voice that makes you feel like you aren't good enough. It focuses entirely on your flaws, making it hard to feel confident around others.",
        image: selfesteem
      },
      healing: {
        title: "Drink a Glass of Water",
        subtitle: "Reset via Hydration",
        desc: "Sip a cold glass of water slowly or step outside for fresh air. Small physical adjustments give your brain an immediate reset button.",
        image: water
      }
    },
    {
      id: "08",
      storm: {
        title: "Sudden Mood Changes",
        subtitle: "Emotional Swings",
        desc: "Experiencing extreme shifts in your mood. Moving quickly from feeling super motivated and excited to suddenly crashing into absolute emotional exhaustion.",
        image: moodswings
      },
      healing: {
        title: "Do Just One Small Thing",
        subtitle: "Build Low-Pressure Routine",
        desc: "Pick one tiny task—like making your bed, washing a single dish, or clearing your desk. Completing it brings back a comforting sense of control.",
        image: routine
      }
    }
  ];

  return (
    <div className="hub-container">
      {/* Dynamic Header */}
      <div className="hub-header">
        <h1>Stormy Minds & Healing Pathways</h1>
        <p className="hub-intro">
          Our minds are like the weather—sometimes heavy storms set in. 
          Identify what you are experiencing on the left, and explore a gentle practice to guide you back to calm on the right.
        </p>
      </div>

      {/* Main Grid mapping both sides together */}
      <div className="hub-pairs-list">
        {mindData.map((item) => (
          <div key={item.id} className="hub-row-card">
            
            {/* LEFT: STORMY MIND COLUMN */}
            <div className="hub-column storm-side">
              <div className="hub-img-wrapper">
                <img src={item.storm.image} alt={item.storm.title} />
                <span className="hub-tag storm-tag">Storm {item.id}</span>
              </div>
              <div className="hub-text-content">
                <h3>{item.storm.subtitle}</h3>
                <h2>{item.storm.title}</h2>
                <p>{item.storm.desc}</p>
              </div>
            </div>

            {/* THE BRIDGE / CONNECTOR ARROW */}
            <div className="hub-connector">
              <div className="connector-line"></div>
              <div className="connector-arrow">➔</div>
            </div>

            {/* RIGHT: HEALING PATHWAYS COLUMN */}
            <div className="hub-column healing-side">
              <div className="hub-img-wrapper">
                <img src={item.healing.image} alt={item.healing.title} />
                <span className="hub-tag healing-tag">Pathway {item.id}</span>
              </div>
              <div className="hub-text-content">
                <h3>{item.healing.subtitle}</h3>
                <h2>{item.healing.title}</h2>
                <p>{item.healing.desc}</p>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default MindHub;