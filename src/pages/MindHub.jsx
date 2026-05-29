import React from "react";

// --- STORM IMPORTS ---
import burnout from "../assets/burnout.png";
import sadness from "../assets/sadness.jpg";
import worry from "../assets/worry.webp";
import anger from "../assets/anger.jpg";
import numbness from "../assets/numbness.webp";

// --- HEALING IMPORTS ---
import breathing from "../assets/breathing.webp";
import grounding from "../assets/grounding.png";
import journaling from "../assets/journaling.jpg";
import movement from "../assets/movement.png";
import digitaldetox from "../assets/digitaldetox.jpg";

import "./MindHub.css"; 

function MindHub() {
  const mindData = [
    {
      id: "01",
      storm: {
        title: "Feeling Constantly Tired",
        subtitle: "Burnout & Chronic Stress",
        desc: "When daily life feels like too much work. Your mind is exhausted, even simple tasks feel like climbing a mountain.",
        image: burnout
      },
      healing: {
        title: "Take a Deep Breath",
        subtitle: "Calm Your Nervous System",
        desc: "Inhale slowly for 4 seconds, hold it for 4, and exhale for 4. Doing this a few times immediately relaxes your brain.",
        image: breathing
      }
    },
    {
      id: "02",
      storm: {
        title: "Deep Sadness",
        subtitle: "Depression & Isolation",
        desc: "A heavy, quiet feeling that makes everything look dark. You feel like staying away from family and friends.",
        image: sadness
      },
      healing: {
        title: "Look Around the Room",
        subtitle: "The 5-4-3-2-1 Grounding Method",
        desc: "Name 5 things you can see, 4 you can touch, 3 hear, 2 smell, and 1 taste. This snaps your mind out of a worry loop.",
        image: grounding
      }
    },
    {
      id: "03",
      storm: {
        title: "Constant Worry & Panic",
        subtitle: "Anxiety & Racing Thoughts",
        desc: "When your heart beats fast even while sitting down. Your mind gets stuck in 'what-if' loops and overthinking.",
        image: worry
      },
      healing: {
        title: "Write Down Your Thoughts",
        subtitle: "Brain-Dump Journaling",
        desc: "Grab a piece of paper and write down everything you are feeling without filtering it. Getting them out makes them smaller.",
        image: journaling
      }
    },
    {
      id: "04",
      storm: {
        title: "Getting Angry Easily",
        subtitle: "Irritability & Hidden Stress",
        desc: "Feeling like you are always on edge. Tiny things upset you quickly because you are holding onto hidden emotional pressure.",
        image: anger
      },
      healing: {
        title: "Stretch Your Body",
        subtitle: "Release Trapped Tension",
        desc: "Stand up, drop your shoulders, and stretch your arms up high. Stress physically locks up; gentle movement lets it out.",
        image: movement
      }
    },
    {
      id: "05",
      storm: {
        title: "Feeling Completely Numb",
        subtitle: "Emotional Shutdown",
        desc: "When your mind shuts off your emotions to protect you. You don't feel sad or angry; you just feel empty and disconnected.",
        image: numbness
      },
      healing: {
        title: "Put Down Your Phone",
        subtitle: "A Quick Digital Detox",
        desc: "Turn off your screens for just 15 minutes. Constantly checking social media overloads an already tired, stressed mind.",
        image: digitaldetox
      }
    }
  ];

  return (
    <div className="hub-container">
      <div className="hub-header">
        <h1>Stormy Minds & Healing Pathways</h1>
        <p className="hub-intro">
          Identify what you are experiencing on the left, and explore a gentle practice to guide you back to calm on the right.
        </p>
      </div>

      <div className="hub-pairs-list">
        {mindData.map((item) => (
          <div key={item.id} className="hub-row-card">
            
            {/* LEFT: STORMY MIND */}
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

            {/* CONNECTING ARROW */}
            <div className="hub-connector">
              <div className="connector-arrow">➔</div>
            </div>

            {/* RIGHT: HEALING PATHWAY */}
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