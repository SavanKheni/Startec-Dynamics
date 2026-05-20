import React, { useState } from "react";
import logo from "../assets/logo.png";
import GradientButton from "./Gradientbutton";
import { useLocation, useNavigate } from "react-router-dom";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLight, setIsLight] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const showBackArrow = location.pathname === "/project-details";
  const toggleTheme = () => {
    const newTheme = !isLight;
    setIsLight(newTheme);

    if (newTheme) {
      document.body.classList.add("light-web");
    } else {
      document.body.classList.remove("light-web");
    }
  };
  return (
    <nav className="navbar">
      <div>
        {showBackArrow && (
          <div className="back-arrow" onClick={() => navigate("/projects")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="46"
              height="46"
              viewBox="0 0 46 46"
              fill="none"
            >
              <path
                d="M23 42.1663C33.5855 42.1663 42.1667 33.5851 42.1667 22.9997C42.1667 12.4142 33.5855 3.83301 23 3.83301C12.4146 3.83301 3.83334 12.4142 3.83334 22.9997C3.83334 33.5851 12.4146 42.1663 23 42.1663Z"
                stroke="#AAB4E4"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M29.7083 23H18.2083"
                stroke="#AAB4E4"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M22.0417 17.25L16.2917 23L22.0417 28.75"
                stroke="#AAB4E4"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        )}
      </div>

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
                <a href="/serviceas">Services</a>
                <a href="/about-us">About Us</a>
                <a href="/team">Team</a>
                <a href="/contact-us">Contact</a>
                <a href="/partners">Partners</a>
              </nav>
            </div>
          )}
        </div>
        <div className="icon-button dark-light-toggle" onClick={toggleTheme}>
          {isLight ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="27"
              viewBox="0 0 26 27"
              fill="none"
            >
              <path
                d="M1.53169 13.6623C1.95169 19.6707 7.05002 24.559 13.1517 24.8273C17.4567 25.014 21.3067 23.0073 23.6167 19.8456C24.5734 18.5506 24.06 17.6873 22.4617 17.979C21.68 18.119 20.875 18.1773 20.035 18.1423C14.33 17.909 9.66335 13.1373 9.64002 7.50232C9.62835 5.98565 9.94335 4.55065 10.515 3.24398C11.145 1.79732 10.3867 1.10898 8.92835 1.72732C4.30835 3.67565 1.14669 8.33065 1.53169 13.6623Z"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="27"
              viewBox="0 0 26 27"
              fill="#fff"
            >
              <path d="M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5,5-2.24,5-5-2.24-5-5-5Zm0,7c-1.1,0-2-.9-2-2s.9-2,2-2,2,.9,2,2-.9,2-2,2Zm4.95-6.95c-.59-.59-.59-1.54,0-2.12l1.41-1.41c.59-.59,1.54-.59,2.12,0,.59,.59,.59,1.54,0,2.12l-1.41,1.41c-.29,.29-.68,.44-1.06,.44s-.77-.15-1.06-.44ZM7.05,16.95c.59,.59,.59,1.54,0,2.12l-1.41,1.41c-.29,.29-.68,.44-1.06,.44s-.77-.15-1.06-.44c-.59-.59-.59-1.54,0-2.12l1.41-1.41c.59-.59,1.54-.59,2.12,0ZM3.51,5.64c-.59-.59-.59-1.54,0-2.12,.59-.59,1.54-.59,2.12,0l1.41,1.41c.59,.59,.59,1.54,0,2.12-.29,.29-.68,.44-1.06,.44s-.77-.15-1.06-.44l-1.41-1.41Zm16.97,12.73c.59,.59,.59,1.54,0,2.12-.29,.29-.68,.44-1.06,.44s-.77-.15-1.06-.44l-1.41-1.41c-.59-.59-.59-1.54,0-2.12,.59-.59,1.54-.59,2.12,0l1.41,1.41Zm3.51-6.36c0,.83-.67,1.5-1.5,1.5h-2c-.83,0-1.5-.67-1.5-1.5s.67-1.5,1.5-1.5h2c.83,0,1.5,.67,1.5,1.5ZM3.5,13.5H1.5c-.83,0-1.5-.67-1.5-1.5s.67-1.5,1.5-1.5H3.5c.83,0,1.5,.67,1.5,1.5s-.67,1.5-1.5,1.5ZM10.5,3.5V1.5c0-.83,.67-1.5,1.5-1.5s1.5,.67,1.5,1.5V3.5c0,.83-.67,1.5-1.5,1.5s-1.5-.67-1.5-1.5Zm3,17v2c0,.83-.67,1.5-1.5,1.5s-1.5-.67-1.5-1.5v-2c0-.83,.67-1.5,1.5-1.5s1.5,.67,1.5,1.5Z" />
            </svg>
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
