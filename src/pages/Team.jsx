import React from "react";
import TeamHero from "../components/Team/TeamHero";
import TeamCards from "../components/Team/TeamCards";
import TeamPageSection from "../components/Team/TeamPageSection";
import PageHero from "../components/PageHero";

const Team = () => {
  return (
    <div>
      <PageHero
        title="Our Team"
        description="At Startec Dynamics Inc., our team brings together expertise in intelligent mobility, vehicle technology, software systems, electric platforms, industrial design, and connected mobility solutions."
      />
      <TeamPageSection />
      <TeamCards />
    </div>
  );
};

export default Team;
