import AboutSection from "../components/AboutSection";
import GetInTouch from "../components/GetInTouch";
import Hero from "../components/Hero";
import Partners from "../components/Partners";
import Service from "../components/Service";
import VisionSection from "../components/VisionSection";
import Work from "../components/Work";

function Home() {
  return (
    <>
      <div className="light-hero-bg">
        <Hero />
        <AboutSection />
      </div>
      <div className="light-home-bg-2">
        <VisionSection />
        <Work />
      </div>
      <div className="light-home-bg-3">
        <Service />
        <GetInTouch />
      </div>
      <Partners />
    </>
  );
}

export default Home;
