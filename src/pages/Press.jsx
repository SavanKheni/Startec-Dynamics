import React from "react";
import PageHero from "../components/PageHero";
import PressCards from "../components/Press/PressCards";

const Press = () => {
  return (
    <div>
      <PageHero
        title="Press"
        description="We are excited to introduce our latest innovation in smart mobility technology, designed to make everyday transportation safer, more connected, and more efficient."
      />
      <PressCards />
    </div>
  );
};

export default Press;
