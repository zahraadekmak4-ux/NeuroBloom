import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
// Imported clean icons for every single page route
import { 
  FaBrain, 
  FaHome, 
  FaInfoCircle, 
  FaCloudSun, 
  FaRegCalendarAlt, 
  FaRegCheckCircle, 
  FaConciergeBell, 
  FaEnvelope 
} from "react-icons/fa"; 
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5"; 
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  // Reusable inline style to keep all layout text perfectly aligned with its icon
  const iconStyle = { marginRight: '8px', transform: 'translateY(1px)' };

  return (
    <nav className="main-navbar">
      <div className="navbar-container">
        
        {/* Brand Logo */}
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <FaBrain className="nav-brain-icon" /> <span>NeuroBloom</span>
        </Link>

        {/* Hamburger Menu Trigger for Mobile Devices */}
        <button 
          className="mobile-menu-toggle" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <IoCloseOutline /> : <IoMenuOutline />}
        </button>

        {/* Navigation Links Group */}
        <div className={`navbar-links ${isOpen ? "mobile-open" : ""}`}>
          
          {/* Home */}
          <NavLink to="/" end className={({ isActive }) => isActive ? "nav-item active-link" : "nav-item"} onClick={closeMenu}>
            <FaHome style={iconStyle} /> Home
          </NavLink>

          {/* About */}
          <NavLink to="/about" className={({ isActive }) => isActive ? "nav-item active-link" : "nav-item"} onClick={closeMenu}>
            <FaInfoCircle style={iconStyle} /> About
          </NavLink>
          
          {/* Mind Hub (Stormy Minds + Healing Pathways) */}
          <NavLink to="/mindhub" className={({ isActive }) => isActive ? "nav-item active-link" : "nav-item"} onClick={closeMenu}>
            <FaCloudSun style={iconStyle} /> Mind Hub
          </NavLink>
          
          {/* Daily Calendar */}
          <NavLink to="/calendar" className={({ isActive }) => isActive ? "nav-item active-link" : "nav-item"} onClick={closeMenu}>
            <FaRegCalendarAlt style={iconStyle} /> Daily Calendar
          </NavLink>

          {/* Digital Exercises */}
          <NavLink to="/exercises" className={({ isActive }) => isActive ? "nav-item active-link" : "nav-item"} onClick={closeMenu}>
            <FaRegCheckCircle style={iconStyle} /> Digital Exercises
          </NavLink>

          {/* Services */}
          <NavLink to="/services" className={({ isActive }) => isActive ? "nav-item active-link" : "nav-item"} onClick={closeMenu}>
            <FaConciergeBell style={iconStyle} /> Services
          </NavLink>

          {/* Contact */}
          <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-item active-link" : "nav-item"} onClick={closeMenu}>
            <FaEnvelope style={iconStyle} /> Contact
          </NavLink>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;