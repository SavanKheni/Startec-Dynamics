import React from "react";
import AboutHero from "../components/AboutUs/AboutHero";
import AboutPageSection from "../components/AboutUs/AboutPageSection";
import Expertise from "../components/AboutUs/Expertise";
import Team from "../components/AboutUs/Team";

const AboutUS = () => {
  return (
    <div>
      <AboutHero />
      <AboutPageSection />
      <Expertise />
      <Team />
    </div>
  );
};

export default AboutUS;
