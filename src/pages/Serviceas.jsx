import React from "react";
import ServiceHero from "../components/Services/ServiceHero";
import ServiceBox from "../components/Services/ServiceBox";
import NewsLatter from "../components/Projects/NewsLatter";
import PageHero from "../components/PageHero";

const Serviceas = () => {
  return (
    <div>
      <PageHero
        title="Powering Ideas Through Smart Technology"
        description="We deliver cutting-edge technology solutions that turn ideas into scalable, high-performance systems. From development to deployment, we drive efficiency, innovation, and reliability at every step."
      />
      <ServiceBox />
      <NewsLatter />
    </div>
  );
};

export default Serviceas;
