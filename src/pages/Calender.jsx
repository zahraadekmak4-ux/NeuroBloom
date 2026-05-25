import React, { useState } from 'react';
import './Calender.css'; // Make sure this path points correctly to your CSS file

export default function Calender() {
  // 15 days of mental health challenges
  const activities = [
    { day: 1, task: "Take a 10-minute morning walk without your phone." },
    { day: 2, task: " Write down 3 specific things you are grateful for today." },
    { day: 3, task: " Disconnect from all screens 30 minutes before bed." },
    { day: 4, task: " Hydrate well: Drink at least 8 glasses of water today." },
    { day: 5, task: " Practice the 4-7-8 breathing exercise for 3 rounds." },
    { day: 6, task: " Reach out, call, or text a close friend just to check in." },
    { day: 7, task: " Listen to your favorite music album with zero distractions." },
    { day: 8, task: " Set a healthy boundary: Say 'No' to something draining." },
    { day: 9, task: " Clear your space: Declutter your desk or a small corner." },
    { day: 10, task: " Mindfulness: Sit in complete silence for 5 minutes." },
    { day: 11, task: " Mindful eating: Eat a fully nutritious meal slowly." },
    { day: 12, task: " Sleep priority: Wind down early for a solid 8 hours tonight." },
    { day: 13, task: " Sun exposure: Spend 15 minutes getting natural sunlight." },
    { day: 14, task: " Creativity: Spend time drawing, writing, or cooking something new." },
    { day: 15, task: " Self-love: Write down or state one genuine compliment to yourself." }
  ];

  // State to track completed days and currently selected day
  const [completedDays, setCompletedDays] = useState([]);
  const [selectedDay, setSelectedDay] = useState(activities[0]);

  const toggleDayCompletion = (dayId) => {
    if (completedDays.includes(dayId)) {
      setCompletedDays(completedDays.filter(d => d !== dayId));
    } else {
      setCompletedDays([...completedDays, dayId]);
    }
  };

  // Progress Calculation
  const progress = Math.round((completedDays.length / activities.length) * 100);

  return (
    <div className="calendar-page-container">
      <header className="calendar-header">
        <h1>Your Daily Well-being Calendar</h1>
        <p>Small daily actions build long-term mental resilience. Step by step.</p>
      </header>

      {/* Progress Bar Tracking */}
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        <span className="progress-text">
          {progress}% Completed ({completedDays.length}/{activities.length} Days)
        </span>
      </div>

      {/* Main Workspace Layout */}
      <div className="grid-container">
        
        {/* Left Side: Days Grid Grid */}
        <div className="calendar-grid">
          {activities.map((act) => {
            const isCompleted = completedDays.includes(act.day);
            const isSelected = selectedDay.day === act.day;

            return (
              <button
                key={act.day}
                onClick={() => setSelectedDay(act)}
                className={`day-card ${isCompleted ? 'completed' : ''} ${isSelected ? 'selected' : ''}`}
              >
                <span className="day-label">Day</span>
                <span className="day-number">{act.day}</span>
                {isCompleted && <span className="checkmark">✓</span>}
              </button>
            );
          })}
        </div>

        {/* Right Side: Active Focus Task Card */}
        <div className="detail-card">
          <div>
            <span className="badge">Day {selectedDay.day} Task Focus</span>
            <p className="task-text">{selectedDay.task}</p>
          </div>

          <button
            onClick={() => toggleDayCompletion(selectedDay.day)}
            className={`action-btn ${completedDays.includes(selectedDay.day) ? 'btn-uncomplete' : 'btn-complete'}`}
          >
            {completedDays.includes(selectedDay.day) ? 'Mark as Uncomplete' : 'Mark as Completed! '}
          </button>
        </div>

      </div>
    </div>
  );
}