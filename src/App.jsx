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
import { RecalculateContext } from "./hooks/RecalculateContext";

function App() {
  const location = useLocation();
  const lenisRef = useRef(null);

  // ✅ Scroll-to-top visibility state
  const [showScrollTop, setShowScrollTop] = useState(false);

  const { scalerRef, wrapperHeight, recalculate } = usePageScaler({
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

  // ✅ Show/hide scroll-to-top button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Reset scroll on route change
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
    // Hide button on route change
    setShowScrollTop(false);
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

  // ✅ Smooth scroll to top using Lenis
  const handleScrollToTop = () => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, {
        duration: 1.8,
        easing: (t) => 1 - Math.pow(1 - t, 4),
      });
    }
  };

  return (
    <RecalculateContext.Provider value={recalculate}>
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
              <Route
                path="/project-details/si-connect"
                element={<SIConnect />}
              />
              <Route
                path="/project-details/si-intelligent"
                element={<SIIntelligent />}
              />
              <Route path="/team" element={<Team />} />
            </Routes>
          </main>

          <Footer />

          {/* ✅ Scroll to Top Button */}

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
      <button
        onClick={handleScrollToTop}
        aria-label="Scroll to top"
        style={{
          position: "fixed",
          bottom: "40px",
          right: "40px",
          width: "48px",
          height: "48px",
          borderRadius: "50%",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          background: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 9999,
          opacity: showScrollTop ? 1 : 0,
          transform: showScrollTop ? "translateY(0)" : "translateY(16px)",
          pointerEvents: showScrollTop ? "auto" : "none",
          transition: "opacity 0.4s ease, transform 0.4s ease",
          boxShadow: "0 4px 24px rgba(29, 82, 255, 0.15)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "rgba(29, 82, 255, 0.2)";
          e.currentTarget.style.borderColor = "rgba(29, 82, 255, 0.5)";
          e.currentTarget.style.boxShadow =
            "0 4px 32px rgba(29, 82, 255, 0.35)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
          e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.15)";
          e.currentTarget.style.boxShadow =
            "0 4px 24px rgba(29, 82, 255, 0.15)";
        }}
      >
        {/* Arrow up SVG */}
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 14.5V3.5M9 3.5L4 8.5M9 3.5L14 8.5"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </RecalculateContext.Provider>
  );
}

export default App;
