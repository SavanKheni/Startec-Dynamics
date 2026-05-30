import React from "react";
import AboutHero from "../components/AboutUs/AboutHero";
import AboutPageSection from "../components/AboutUs/AboutPageSection";
import Expertise from "../components/AboutUs/Expertise";
import AboutVision from "../components/AboutUs/AboutVision";
import AboutAccodian from "../components/AboutUs/AboutAccodian";
import PageHero from "../components/PageHero";

const AboutUS = () => {
  return (
    <div>
      <PageHero
        title="About Startec Dynamics"
        description="Startec Dynamics is a forward-thinking technology company dedicated to transforming the future of mobility through intelligent innovation."
      />
      <AboutPageSection />
      <AboutVision />
      <AboutAccodian />
      <Expertise />
      {/* <Team /> */}
    </div>
  );
};

export default AboutUS;
