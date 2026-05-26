import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Page Components
import Home from "./pages/Home";
import About from "./pages/About";
import MindHub from "./pages/MindHub"; // <-- 1. Imported our combined Problem/Solution Hub
import DailyCalendar from "./pages/DailyCalendar"; 
import DigitalExercises from "./pages/DigitalExercises"; // <-- 2. Imported the new exercises platform
import Services from "./pages/Services";
import Contact from "./pages/Contact";

import PageLayout from "./components/PageLayout"; 
import "./App.css";

// Separate component inside BrowserRouter to safely access useLocation()
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageLayout><Home /></PageLayout>} />
        <Route path="/about" element={<PageLayout><About /></PageLayout>} />
        
        {/* 🔄 MERGED ROUTE: Replaced separate pages with our single Mind Hub page */}
        <Route path="/mindhub" element={<PageLayout><MindHub /></PageLayout>} />
        
        {/* 📅 CALENDAR ROUTE */}
        <Route path="/calendar" element={<PageLayout><DailyCalendar /></PageLayout>} />
        
        {/* 🏋️‍♂️ NEW EXERCISES ROUTE: Safely nested inside your page layout wrapper */}
        <Route path="/exercises" element={<PageLayout><DigitalExercises /></PageLayout>} />
        
        <Route path="/services" element={<PageLayout><Services /></PageLayout>} />
        <Route path="/contact" element={<PageLayout><Contact /></PageLayout>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AnimatedRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;