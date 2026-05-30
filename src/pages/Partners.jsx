import React from "react";
import PartnersHero from "../components/Partners/PartnersHero";
import PartnerBox from "../components/Partners/PartnerBox";
import PageHero from "../components/PageHero";

const Partners = () => {
  return (
    <div>
      <PageHero
        title="Our Global Partners"
        description="Our trusted partners help us deliver innovation, quality, and reliable solutions across every project. Together, we build stronger connections, smarter systems, and lasting success."
      />
      <PartnerBox />
    </div>
  );
};

export default Partners;
