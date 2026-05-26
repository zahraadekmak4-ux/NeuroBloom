import React, { useState, useEffect } from "react";
import { FaEye, FaLungs, FaExchangeAlt } from "react-icons/fa";
import "./DigitalExercises.css";

function DigitalExercises() {
  const [activePractice, setActivePractice] = useState("breathing");

  // --- 1. BOX BREATHING STATES ---
  const [breathPhase, setBreathPhase] = useState("Inhale"); // Inhale, Hold, Exhale, Rest
  const [breathCounter, setBreathCounter] = useState(4);
  const [isBreathingActive, setIsBreathingActive] = useState(false);

  useEffect(() => {
    let timer;
    if (isBreathingActive) {
      timer = setInterval(() => {
        setBreathCounter((prev) => {
          if (prev === 1) {
            // Cycle to the next step in box breathing
            setBreathPhase((currentPhase) => {
              if (currentPhase === "Inhale") return "Hold";
              if (currentPhase === "Hold") return "Exhale";
              if (currentPhase === "Exhale") return "Hold Empty";
              return "Inhale";
            });
            return 4; // Reset to 4 seconds per phase
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isBreathingActive]);

  // --- 2. CBT REFRAMER STATES ---
  const [cbtStep, setCbtStep] = useState(1);
  const [thoughtInput, setThoughtInput] = useState("");
  const [evidenceInput, setEvidenceInput] = useState("");
  const [reframedThought, setReframedThought] = useState("");

  // --- 3. GROUNDING STATES ---
  const [groundingCheck, setGroundingCheck] = useState({
    see: ["", "", "", "", ""],
    touch: ["", "", "", ""],
    hear: ["", "", ""],
    smell: ["", ""],
    taste: [""]
  });

  const handleGroundingInput = (category, index, value) => {
    setGroundingCheck(prev => {
      const updatedArray = [...prev[category]];
      updatedArray[index] = value;
      return { ...prev, [category]: updatedArray };
    });
  };

  return (
    <div className="exercises-container">
      
      <div className="exercises-header">
        <h1>Digital Interactive Practices</h1>
        <p>
          Don't just read about coping mechanisms—practice them. Use these real-time digital tools to anchor your focus and calm your mind.
        </p>
      </div>

      {/* Navigation to switch between actual practices */}
      <div className="practice-tabs">
        <button className={activePractice === "breathing" ? "p-tab active" : "p-tab"} onClick={() => setActivePractice("breathing")}>
          <FaLungs /> Box Breathing Pacer
        </button>
        <button className={activePractice === "cbt" ? "p-tab active" : "p-tab"} onClick={() => setActivePractice("cbt")}>
          <FaExchangeAlt /> CBT Thought Reframer
        </button>
        <button className={activePractice === "grounding" ? "p-tab active" : "p-tab"} onClick={() => setActivePractice("grounding")}>
          <FaEye /> 5-4-3-2-1 Grounding Method
        </button>
      </div>

      {/* --- PRACTICE PLAYGROUND AREA --- */}
      <div className="practice-workspace">
        
        {/* INTERACTIVE PRACTICE 1: BOX BREATHING */}
        {activePractice === "breathing" && (
          <div className="practice-card visual-center">
            <h2>Box Breathing Pacer</h2>
            <p className="practice-sub">Slow down your heart rate and re-oxygenate your system.</p>
            
            <div className={`breath-circle ${isBreathingActive ? breathPhase.toLowerCase().replace(" ", "-") : ""}`}>
              <div className="breath-circle-inner">
                <span className="phase-text">{isBreathingActive ? breathPhase : "Ready"}</span>
                {isBreathingActive && <span className="counter-text">{breathCounter}s</span>}
              </div>
            </div>

            <div className="controls">
              <button className="primary-action-btn" onClick={() => {
                setIsBreathingActive(!isBreathingActive);
                if(!isBreathingActive) { setBreathPhase("Inhale"); setBreathCounter(4); }
              }}>
                {isBreathingActive ? "Pause Pacer" : "Start Practice"}
              </button>
            </div>
            
            <div className="breathing-instructions">
              <span className={breathPhase === "Inhale" && isBreathingActive ? "inst active" : "inst"}>1. Inhale (4s)</span>
              <span className={breathPhase === "Hold" && isBreathingActive ? "inst active" : "inst"}>2. Hold (4s)</span>
              <span className={breathPhase === "Exhale" && isBreathingActive ? "inst active" : "inst"}>3. Exhale (4s)</span>
              <span className={breathPhase === "Hold Empty" && isBreathingActive ? "inst active" : "inst"}>4. Rest (4s)</span>
            </div>
          </div>
        )}

        {/* INTERACTIVE PRACTICE 2: CBT THOUGHT REFRAMER */}
        {activePractice === "cbt" && (
          <div className="practice-card">
            <h2>CBT Thought Reframer Worksheet</h2>
            <p className="practice-sub">Challenge anxious assumptions and ground your outlook in factual logic.</p>
            
            <div className="cbt-wizard-progress">
              <span className={cbtStep >= 1 ? "step-dot active" : "step-dot"}>1</span>
              <span className={cbtStep >= 2 ? "step-dot active" : "step-dot"}>2</span>
              <span className={cbtStep >= 3 ? "step-dot active" : "step-dot"}>3</span>
            </div>

            {cbtStep === 1 && (
              <div className="wizard-step animate-fade">
                <label>Step 1: What is the negative or anxious automatic thought?</label>
                <textarea 
                  placeholder="Example: 'I'm going to fail my presentation tomorrow and everyone will think I'm completely incompetent.'"
                  value={thoughtInput}
                  onChange={(e) => setThoughtInput(e.target.value)}
                />
                <button className="wizard-btn" disabled={!thoughtInput} onClick={() => setCbtStep(2)}>Next Step</button>
              </div>
            )}

            {cbtStep === 2 && (
              <div className="wizard-step animate-fade">
                <label>Step 2: Strip away feelings. What is the objective *evidence* that supports or challenges this thought?</label>
                <textarea 
                  placeholder="Example: 'I have practiced three times and my notes are ready. I felt nervous before past presentations but they turned out fine.'"
                  value={evidenceInput}
                  onChange={(e) => setEvidenceInput(e.target.value)}
                />
                <div className="btn-row">
                  <button className="secondary-btn" onClick={() => setCbtStep(1)}>Back</button>
                  <button className="wizard-btn" disabled={!evidenceInput} onClick={() => setCbtStep(3)}>Next Step</button>
                </div>
              </div>
            )}

            {cbtStep === 3 && (
              <div className="wizard-step animate-fade">
                <label>Step 3: Based on facts alone, write down a balanced, realistic replacement thought.</label>
                <textarea 
                  placeholder="Example: 'It's natural to feel anxious, but I am well-prepared. Even if I stumble slightly, it doesn't mean I am bad at my job.'"
                  value={reframedThought}
                  onChange={(e) => setReframedThought(e.target.value)}
                />
                
                <div className="btn-row">
                  <button className="secondary-btn" onClick={() => setCbtStep(2)}>Back</button>
                  <button className="wizard-btn final" onClick={() => {
                    alert("Thought Reframed Successfully! Keep holding onto your balanced perspective.");
                    setCbtStep(1); setThoughtInput(""); setEvidenceInput(""); setReframedThought("");
                  }}>Complete Reframing</button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* INTERACTIVE PRACTICE 3: 5-4-3-2-1 GROUNDING */}
        {activePractice === "grounding" && (
          <div className="practice-card">
            <h2>5-4-3-2-1 Sensory Grounding</h2>
            <p className="practice-sub">Interact with your direct surroundings to pull your consciousness out of a panic spiral.</p>
            
            <div className="grounding-scroll-box">
              <h3>👀 Name 5 things you can see right now:</h3>
              <div className="input-row">
                {groundingCheck.see.map((val, idx) => (
                  <input key={idx} type="text" placeholder={`Object ${idx+1}`} value={val} onChange={(e) => handleGroundingInput("see", idx, e.target.value)} />
                ))}
              </div>

              <h3>✋ Name 4 things you can physically touch:</h3>
              <div className="input-row">
                {groundingCheck.touch.map((val, idx) => (
                  <input key={idx} type="text" placeholder={`Texture ${idx+1}`} value={val} onChange={(e) => handleGroundingInput("touch", idx, e.target.value)} />
                ))}
              </div>

              <h3>👂 Name 3 distinct sounds around you:</h3>
              <div className="input-row">
                {groundingCheck.hear.map((val, idx) => (
                  <input key={idx} type="text" placeholder={`Sound ${idx+1}`} value={val} onChange={(e) => handleGroundingInput("hear", idx, e.target.value)} />
                ))}
              </div>

              <h3>👃 Name 2 environmental smells:</h3>
              <div className="input-row">
                {groundingCheck.smell.map((val, idx) => (
                  <input key={idx} type="text" placeholder={`Scent ${idx+1}`} value={val} onChange={(e) => handleGroundingInput("smell", idx, e.target.value)} />
                ))}
              </div>

              <h3>👅 Name 1 thing you can taste (or your mouth's state):</h3>
              <div className="input-row">
                {groundingCheck.taste.map((val, idx) => (
                  <input key={idx} type="text" placeholder="Taste element" value={val} onChange={(e) => handleGroundingInput("taste", idx, e.target.value)} />
                ))}
              </div>
            </div>
            
            <button className="primary-action-btn space-top" onClick={() => {
              alert("You are safely here in the present moment. Take a long breath.");
              setGroundingCheck({ see: ["","","","",""], touch: ["","","",""], hear: ["","",""], smell: ["",""], taste: [""] });
            }}>I Am Safely Present</button>
          </div>
        )}

      </div>
    </div>
  );
}

export default DigitalExercises;