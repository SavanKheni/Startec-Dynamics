import React from "react";
import TeamHero from "../components/Team/TeamHero";
import TeamCards from "../components/Team/TeamCards";
import TeamPageSection from "../components/Team/TeamPageSection";

const Team = () => {
  return (
    <div>
      <TeamHero />
      <TeamPageSection />
      <TeamCards />
    </div>
  );
};

export default Team;
