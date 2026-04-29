import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Capabilities from "./components/Capabilities";
import ProductShowcase from "./components/ProductShowcase";
import Services from "./components/Services";
import Footer from "./components/Footer";
import AboutSection from "./components/AboutSection";
import VisionSection from "./components/VisionSection";
import Work from "./components/Work";
import Service from "./components/Service";
import GetInTouch from "./components/GetInTouch";
import Partners from "./components/Partners";

function App() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

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
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <VisionSection />
        <Work />
        <Service />
        <GetInTouch />
        <Partners />
        {/* <Capabilities />
        <ProductShowcase />   
        <Services /> */}
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
  );
}

export default App;
