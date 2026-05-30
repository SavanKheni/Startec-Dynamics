import React from "react";
import ContactHero from "../components/ContactUs/ContactHero";
import ContactFeatured from "../components/ContactUs/ContactFeatured";
import ContactForm from "../components/ContactUs/ContactForm";
import PageHero from "../components/PageHero";

const ContactUs = () => {
  return (
    <div>
      <PageHero
        title="Get In Touch"
        description="We're here to help you move forward. Whether you have a question, need support, or want to discuss a project, our team is ready to assist you."
      />
      <ContactFeatured />
      <ContactForm />
    </div>
  );
};

export default ContactUs;
