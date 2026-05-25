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

  // --- LOCAL STORAGE HANDLING ---
  
  // Load initial todos from localStorage or fallback to empty array
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("neurobloom_todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // Load initial schedule flow or fallback to defaults
  const [schedule, setSchedule] = useState(() => {
    const savedSchedule = localStorage.getItem("neurobloom_schedule");
    return savedSchedule ? JSON.parse(savedSchedule) : [
      { time: "08:00 AM", task: "Morning Grounding & Water" },
      { time: "12:00 PM", task: "Midday Breathing Break" },
      { time: "06:00 PM", task: "Digital Detox & Walk" },
    ];
  });

  const [newTodo, setNewTodo] = useState("");
  const [timeBlock, setTimeBlock] = useState({ time: "09:00", task: "" });

  // Sync Todos to LocalStorage whenever they change
  useEffect(() => {
    localStorage.setItem("neurobloom_todos", JSON.stringify(todos));
  }, [todos]);

  // Sync Schedule to LocalStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("neurobloom_schedule", JSON.stringify(schedule));
  }, [schedule]);


  // --- CALENDAR ACTIONS ---

  // Handle Date Navigation (Switching days)
  const changeDate = (days) => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + days);
    setCurrentDate(newDate);
  };

  // Add low-pressure intention
  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;
    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
    setNewTodo("");
  };

  // Toggle intention completion state
  const toggleTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  // Delete intention
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Add custom schedule hourly flow block
  const handleAddSchedule = (e) => {
    e.preventDefault();
    if (!timeBlock.task.trim()) return;
    
    // Convert 24h clock input to a gentle, readable 12h format
    const [hours, minutes] = timeBlock.time.split(":");
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;
    const formattedTime = `${formattedHours}:${minutes} ${ampm}`;

    const updatedSchedule = [...schedule, { time: formattedTime, task: timeBlock.task }];
    
    // Sort schedule chronological block items systematically
    updatedSchedule.sort((a, b) => {
      return a.time.localeCompare(b.time);
    });

    setSchedule(updatedSchedule);
    setTimeBlock({ time: "09:00", task: "" });
  };

  // Delete hourly flow block
  const deleteScheduleItem = (indexToDelete) => {
    setSchedule(schedule.filter((_, idx) => idx !== indexToDelete));
  };

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
            {schedule.length === 0 ? (
              <p className="empty-section-text">Your schedule timeline is completely clear.</p>
            ) : (
              schedule.map((item, index) => (
                <div key={index} className="schedule-card">
                  <span className="schedule-time">{item.time}</span>
                  <p className="schedule-task">{item.task}</p>
                  <button onClick={() => deleteScheduleItem(index)} className="item-delete-inline-btn" aria-label="Delete block">
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
            {todos.length === 0 ? (
              <p className="empty-section-text">No high stakes here. Add a small task when you feel fully ready.</p>
            ) : (
              todos.map(todo => (
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