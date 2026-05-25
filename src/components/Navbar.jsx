import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBrain, FaRegCalendarAlt } from "react-icons/fa"; // We'll put this to use right now!
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5"; 
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

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
          <NavLink to="/" end className={({ isActive }) => isActive ? "nav-item active-link" : "nav-item"} onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "nav-item active-link" : "nav-item"} onClick={closeMenu}>
            About
          </NavLink>
          <NavLink to="/stormyminds" className={({ isActive }) => isActive ? "nav-item active-link" : "nav-item"} onClick={closeMenu}>
            Stormy Minds
          </NavLink>
          <NavLink to="/healingpathways" className={({ isActive }) => isActive ? "nav-item active-link" : "nav-item"} onClick={closeMenu}>
            Healing Pathways
          </NavLink>
          
          {/* 🗓️ UPDATED: Added the icon inline to resolve the unused variable warning */}
          <NavLink to="/calendar" className={({ isActive }) => isActive ? "nav-item active-link" : "nav-item"} onClick={closeMenu}>
            <FaRegCalendarAlt style={{ marginRight: '6px', transform: 'translateY(1px)' }} /> Daily Calendar
          </NavLink>

          <NavLink to="/services" className={({ isActive }) => isActive ? "nav-item active-link" : "nav-item"} onClick={closeMenu}>
            Services
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-item active-link" : "nav-item"} onClick={closeMenu}>
            Contact
          </NavLink>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;