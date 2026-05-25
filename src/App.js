import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import StormyMinds from "./pages/StormyMinds";
import HealingPathways from "./pages/HealingPathways";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Calendar from "./pages/Calendar";
import PageLayout from "./components/PageLayout"; // Import the wrapper

import "./App.css";

// Separate component inside BrowserRouter to safely access useLocation()
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageLayout><Home /></PageLayout>} />
        <Route path="/about" element={<PageLayout><About /></PageLayout>} />
        <Route path="/stormyminds" element={<PageLayout><StormyMinds /></PageLayout>} />
        <Route path="/healingpathways" element={<PageLayout><HealingPathways /></PageLayout>} />
        <Route path="/services" element={<PageLayout><Services /></PageLayout>} />
        <Route path="/contact" element={<PageLayout><Contact /></PageLayout>} />
        <Route path="/calendar" element={<PageLayout><Calendar /></PageLayout>} />
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