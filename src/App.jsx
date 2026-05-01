import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ShootingStar from "./components/ShootingStart";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import { BgStar } from "./components/BgStar";

function App() {
  useEffect(() => {
    const observerOptions = { threshold: 0.1 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <Router>
      <div className="app">
        <Navbar />
        <ShootingStar />
        <BgStar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>

        <Footer />

        <style jsx global>{`
          .reveal {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .reveal.active {
            opacity: 1;
            transform: translateY(0);
          }
        `}</style>
      </div>
    </Router>
  );
}

export default App;
