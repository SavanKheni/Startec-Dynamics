import React from "react";
import ContactHero from "../components/ContactUs/ContactHero";
import ContactFeatured from "../components/ContactUs/ContactFeatured";
import ContactForm from "../components/ContactUs/ContactForm";

const ContactUs = () => {
  return (
    <div>
      <ContactHero />
      <ContactFeatured />
      <ContactForm />
    </div>
  );
};

export default ContactUs;
