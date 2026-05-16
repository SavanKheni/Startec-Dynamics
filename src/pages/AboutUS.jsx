import React from "react";
import AboutHero from "../components/AboutUs/AboutHero";
import AboutPageSection from "../components/AboutUs/AboutPageSection";
import Expertise from "../components/AboutUs/Expertise";
import AboutVision from "../components/AboutUs/AboutVision";
import AboutAccodian from "../components/AboutUs/AboutAccodian";

const AboutUS = () => {
  return (
    <div>
      <AboutHero />
      <AboutPageSection />
      <AboutVision />
      <AboutAccodian />
      <Expertise />
      {/* <Team /> */}
    </div>
  );
};

export default AboutUS;
