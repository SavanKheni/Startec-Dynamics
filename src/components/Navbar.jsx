import React, { useState } from "react";
import logo from "../assets/logo.png";
import GradientButton from "./Gradientbutton";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="navbar">
      <div></div>
      <img alt="" src={logo} className="logo-img" />
      <div className="right-nav">
        <div style={{ position: "relative" }}>
          <div className="icon-button" onClick={() => setMenuOpen(!menuOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="18"
              viewBox="0 0 22 18"
              fill="none"
            >
              <path
                d="M20.125 0C21.0915 0 21.875 0.783502 21.875 1.75C21.875 2.7165 21.0915 3.5 20.125 3.5H2.04169C1.07519 3.5 0.291687 2.7165 0.291687 1.75C0.291687 0.783502 1.07519 0 2.04169 0H20.125Z"
                fill="#F8F8F8"
              />
              <path
                d="M19.25 7C20.2165 7 21 7.7835 21 8.75C21 9.7165 20.2165 10.5 19.25 10.5L11.0833 10.5C10.1168 10.5 9.33331 9.7165 9.33331 8.75C9.33331 7.7835 10.1168 7 11.0833 7L19.25 7Z"
                fill="#F8F8F8"
              />
              <path
                d="M19.25 14C20.2165 14 21 14.7835 21 15.75C21 16.7165 20.2165 17.5 19.25 17.5L1.75 17.5C0.783502 17.5 2.37484e-07 16.7165 1.5299e-07 15.75C6.84959e-08 14.7835 0.783502 14 1.75 14L19.25 14Z"
                fill="#F8F8F8"
              />
              <path
                d="M7.58335 8.75033C7.58335 10.039 6.53868 11.0837 5.25002 11.0837C3.96136 11.0837 2.91669 10.039 2.91669 8.75033C2.91669 7.46166 3.96136 6.41699 5.25002 6.41699C6.53868 6.41699 7.58335 7.46166 7.58335 8.75033Z"
                fill="white"
              />
            </svg>
          </div>
          {menuOpen && (
            <div className="menu-panel">
              <nav>
                <a href="/">Home</a>
                <a href="/projects">Projects</a>
                <a href="/services">Services</a>
                <a href="/about">About Us</a>
                <a href="/contact">Contact</a>
                <a href="/partners">Partners</a>
              </nav>
            </div>
          )}
        </div>
        <GradientButton onClick={() => console.log("clicked")}>
          Lets Talk
        </GradientButton>
      </div>
    </nav>
  );
};

export default Navbar;
