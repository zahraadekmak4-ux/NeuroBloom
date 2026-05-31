import React, { useState, useEffect } from "react";
import { 
  IoChevronBackOutline, 
  IoChevronForwardOutline, 
  IoCheckmarkCircleOutline, 
  IoTrashOutline, 
  IoAddOutline,
  IoCalendarOutline
} from "react-icons/io5";
import "./DailyCalendar.css";

function DailyCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  // Format date as an absolute key string to bind data safely to specific dates
  const dateKey = currentDate.toISOString().split("T")[0];

  // --- LOCAL STORAGE HANDLING ---
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("neurobloom_todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [schedule, setSchedule] = useState(() => {
    const savedSchedule = localStorage.getItem("neurobloom_schedule");
    return savedSchedule ? JSON.parse(savedSchedule) : [
      { rawTime: "08:00", time: "08:00 AM", task: "Morning Grounding & Water" },
      { rawTime: "12:00", time: "12:00 PM", task: "Midday Breathing Break" },
      { rawTime: "18:00", time: "06:00 PM", task: "Digital Detox & Walk" },
    ];
  });

  const [newTodo, setNewTodo] = useState("");
  const [timeBlock, setTimeBlock] = useState({ time: "09:00", task: "" });

  // Sync states to local storage securely
  useEffect(() => {
    localStorage.setItem("neurobloom_todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    localStorage.setItem("neurobloom_schedule", JSON.stringify(schedule));
  }, [schedule]);

  // --- CALENDAR ACTIONS ---
  const changeDate = (days) => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + days);
    setCurrentDate(newDate);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;
    // append the dateKey so tasks don't spill over randomly into other calendar days
    setTodos([...todos, { id: Date.now(), date: dateKey, text: newTodo, completed: false }]);
    setNewTodo(""); // Keep this, delete the raw newTodo = ""; line
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleAddSchedule = (e) => {
    e.preventDefault();
    if (!timeBlock.task.trim()) return;
    
    // Convert 24h clock input to a gentle, readable 12h format display string
    const [hoursStr, minutes] = timeBlock.time.split(":");
    const hours = parseInt(hoursStr, 10);
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;
    // Pads single digits for neat visual layout rows
    const formattedTime = `${formattedHours.toString().padStart(2, '0')}:${minutes} ${ampm}`;

    const newBlock = {
      date: dateKey,
      rawTime: timeBlock.time, // Saved as raw "18:30" string
      time: formattedTime,     // Saved as "06:30 PM" string
      task: timeBlock.task
    };

    const updatedSchedule = [...schedule, newBlock];
    
    // FIX: Chronological sorting using raw 24-hour strings ("08:00" vs "18:30")
    updatedSchedule.sort((a, b) =>
  (a.rawTime || "").localeCompare(b.rawTime || "")
);

    setSchedule(updatedSchedule);
    setTimeBlock({ time: "09:00", task: "" });
  };

  const deleteScheduleItem = (idToKill) => {
    setSchedule(schedule.filter(item => item.date !== dateKey ? true : schedule.indexOf(item) !== idToKill));
  };

  // Filter global state collections down to only item nodes mapped to our active viewing date
  const filteredTodos = todos.filter(todo => todo.date === dateKey || !todo.date);
  const filteredSchedule = schedule.filter(item => item.date === dateKey || !item.date);

  return (
    <div className="calendar-page-container">
      
      {/* Page Header Layout Context */}
      <div className="calendar-page-header">
        <span className="calendar-pretitle">
          <IoCalendarOutline /> Personalized Routine Tracker
        </span>
        <h1>Daily Blueprint</h1>
        <p className="calendar-intro-text">
          Map out your day or reflect on your timeline at your own comfort level. No tight constraints, 
          just intentional building blocks to keep your mind anchored.
        </p>
      </div>

      {/* Main Dynamic Date Navigator */}
      <div className="calendar-navigation">
        <button onClick={() => changeDate(-1)} className="nav-btn" aria-label="Previous Day">
          <IoChevronBackOutline />
        </button>
        <h2>
          {currentDate.toLocaleDateString("en-US", { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' })}
        </h2>
        <button onClick={() => changeDate(1)} className="nav-btn" aria-label="Next Day">
          <IoChevronForwardOutline />
        </button>
      </div>

      {/* Main Split Interface Area */}
      <div className="calendar-layout-grid">
        
        {/* Left Hand Column Side: Today's Chronological Flow Setup */}
        <div className="schedule-section">
          <h2>Today's Flow</h2>
          <p className="section-subtext">Structure hours safely to maintain sensory balance and focus layout rhythm.</p>
          
          <div className="schedule-list">
            {filteredSchedule.length === 0 ? (
              <p className="empty-section-text">Your schedule timeline is completely clear for this date.</p>
            ) : (
              filteredSchedule.map((item, index) => (
                <div key={index} className="schedule-card">
                  <span className="schedule-time">{item.time}</span>
                  <p className="schedule-task">{item.task}</p>
                  <button 
                    onClick={() => {
                      // Find direct index position inside raw unbounded global reference state array
                      const trueIdx = schedule.findIndex(s => s === item);
                      deleteScheduleItem(trueIdx);
                    }} 
                    className="item-delete-inline-btn" 
                    aria-label="Delete block"
                  >
                    <IoTrashOutline />
                  </button>
                </div>
              ))
            )}
          </div>

          <form onSubmit={handleAddSchedule} className="schedule-form">
            <input 
              type="time" 
              value={timeBlock.time} 
              onChange={(e) => setTimeBlock({ ...timeBlock, time: e.target.value })} 
              className="calendar-input time-input"
              required
            />
            <input 
              type="text" 
              placeholder="Block out a low-pressure anchor task..." 
              value={timeBlock.task} 
              onChange={(e) => setTimeBlock({ ...timeBlock, task: e.target.value })} 
              className="calendar-input text-input"
              required
            />
            <button type="submit" className="calendar-add-submit-btn" aria-label="Add flow item">
              <IoAddOutline />
            </button>
          </form>
        </div>

        {/* Right Hand Column Side: Low-Pressure Daily Task Intentions List */}
        <div className="todo-section">
          <h2>One Small Thing Focus</h2>
          <p className="section-subtext">Isolate macro thoughts. Just pick micro-routines you can confidently control right now.</p>

          <form onSubmit={handleAddTodo} className="todo-form">
            <input 
              type="text" 
              placeholder="Add an intention (e.g., drink water, step outside)..." 
              value={newTodo} 
              onChange={(e) => setNewTodo(e.target.value)}
              className="calendar-input"
              required
            />
            <button type="submit" className="calendar-add-submit-btn" aria-label="Add micro intention">
              <IoAddOutline />
            </button>
          </form>

          <div className="todo-list">
            {filteredTodos.length === 0 ? (
              <p className="empty-section-text">No high stakes here. Add a small task when you feel fully ready.</p>
            ) : (
              filteredTodos.map(todo => (
                <div key={todo.id} className={`todo-item ${todo.completed ? "completed" : ""}`}>
                  <button onClick={() => toggleTodo(todo.id)} className="todo-check-circle-btn" aria-label="Toggle Complete status">
                    <IoCheckmarkCircleOutline />
                  </button>
                  <span className="todo-text">{todo.text}</span>
                  <button onClick={() => deleteTodo(todo.id)} className="item-delete-inline-btn" aria-label="Delete item">
                    <IoTrashOutline />
                  </button>
                </div>
              ))
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

export default DailyCalendar;