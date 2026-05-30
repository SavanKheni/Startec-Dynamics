import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ShootingStar from "./components/ShootingStart";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import { BgStar } from "./components/BgStar";
import Serviceas from "./pages/Serviceas";
import AboutUS from "./pages/AboutUS";
import ContactUs from "./pages/ContactUs";
import Partners from "./pages/Partners";
import Team from "./pages/Team";
import { usePageScaler } from "./hooks/Usepagescaler";
import Lenis from "@studio-freight/lenis";
import FleetManagement from "./pages/FleetManagement";
import SIConnect from "./pages/SIConnect";
import SIIntelligent from "./pages/SIIntelligent";

function App() {
  const { scalerRef, wrapperHeight } = usePageScaler({
    minWidth: 1100,
    maxWidth: 1920,
    designWidth: 1920,
  });
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
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
    });

    let rafId;

    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.stop(); // stop scrolling
    };
  }, []);
  const isSmallScreen = window.innerWidth < 1100;
  return (
    <Router>
      <div>
        {/* <ShootingStar /> */}
        <BgStar />

        <div
          className="app"
          ref={isSmallScreen ? null : scalerRef}
          style={{
            height: wrapperHeight === "auto" ? "auto" : `${wrapperHeight}px`,
            transform: isSmallScreen ? "none" : undefined,
          }}
        >
          <Navbar />

          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/serviceas" element={<Serviceas />} />
              <Route path="/about-us" element={<AboutUS />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/partners" element={<Partners />} />
              <Route
                path="/project-details/fleet-management"
                element={<FleetManagement />}
              />

              <Route
                path="/project-details/si-connect"
                element={<SIConnect />}
              />
              <Route
                path="/project-details/si-intelligent"
                element={<SIIntelligent />}
              />
              {/* <Route path="/project-details" element={<ProjectDetails />} /> */}
              <Route path="/team" element={<Team />} />
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
      </div>
    </Router>
  );
}

export default App;
