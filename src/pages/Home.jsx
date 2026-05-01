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
      <Hero />
      <AboutSection />
      <VisionSection />
      <Work />
      <Service />
      <GetInTouch />
      <Partners />
    </>
  );
}

export default Home;
