import React, { useEffect, useRef, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
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
import Press from "./pages/Press";
import PressDetails from "./pages/PressDetails";

function App() {
  const location = useLocation();
  const lenisRef = useRef(null);

  const { scalerRef, wrapperHeight } = usePageScaler({
    minWidth: 1100,
    designWidth: 1920,
  });

  // ✅ responsive screen fix
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1100);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1100);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Disable scroll restoration
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  // ✅ Lenis setup
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
    });

    lenisRef.current = lenis;

    let rafId;

    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  // ✅ Reset scroll
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
  }, [location.pathname]);

  // ✅ Reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 },
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <div>
      <BgStar />

      <div
        className="app"
        ref={isSmallScreen ? null : scalerRef}
        style={{
          height: wrapperHeight === "auto" ? "auto" : `${wrapperHeight}px`,
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
            <Route path="/press" element={<Press />} />
            <Route path="/press/:id" element={<PressDetails />} />
            <Route
              path="/project-details/fleet-management"
              element={<FleetManagement />}
            />
            <Route path="/project-details/si-connect" element={<SIConnect />} />
            <Route
              path="/project-details/si-intelligent"
              element={<SIIntelligent />}
            />
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
  );
}

export default App;
