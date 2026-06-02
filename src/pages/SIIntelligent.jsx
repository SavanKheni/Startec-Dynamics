import React from "react";
import "../components/ProjectDetails/project-details.css";
import ProjectScreens from "../components/ProjectDetails/ProjectScreens";
import ProjectFuture from "../components/ProjectDetails/ProjectFuture";
import FeaturedSection from "../components/ProjectDetails/FeaturedSection";
import SIIntelligent1 from "../assets/SIIntelligent-1.png";
import SIIntelligent2 from "../assets/SIIntelligent-2.png";
import SIIntelligent3 from "../assets/SIIntelligent-3.png";
import fleetManagement from "../assets/f-m-logo.png";
import BottomSection from "../components/ProjectDetails/BottomSection";
const SIIntelligent = () => {
  const fleetSlides = [
    {
      imageLabel: "Smart Protection, Always On",
      image: SIIntelligent1,
      title: "Smart Protection, Always On",
      description:
        "SI Intelligent keeps your motorcycle secure with continuous real-time monitoring. It instantly detects unusual activity and alerts you before things escalate. Whether you're parked at home or outside, your vehicle stays under constant watch. The system is built to respond quickly and accurately. You always stay one step ahead of potential threats. Peace of mind comes standard.",
      link: "#",
    },
    {
      imageLabel: "Real-Time Tracking & Alerts",
      image: SIIntelligent1, // swap to analyticsScreen when available
      title: "Real-Time Tracking & Alerts",
      description:
        "Stay connected to your motorcycle no matter where you are. SI Intelligent sends instant alerts for unauthorized movement or suspicious behavior. You can track your vehicle’s live location directly from the app. Every movement is recorded for your reference. The system ensures you’re always informed. Control and awareness are always in your hands.",
      link: "#",
    },
    {
      imageLabel: "Complete Control & Insights",
      image: SIIntelligent1, // swap to maintenanceScreen when available
      title: "Vehicle Maintenance",
      description:
        "Access detailed trip history and event logs anytime you need. Review past alerts and understand activity patterns. SI Intelligent offers full remote monitoring for total control. Designed with user-friendly features, it keeps everything simple and accessible. Stay informed, stay secure, and stay in control. Your motorcycle’s safety is now smarter than ever.",
      link: "#",
    },
  ];

  const fleetCards = [
    {
      title: "Intelligent Vehicle Insights",
      desc: "Get smart, real-time insights into your vehicle’s activity and performance.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M29.3333 16.0003C29.3333 23.3603 23.36 29.3337 16 29.3337C8.63999 29.3337 2.66666 23.3603 2.66666 16.0003C2.66666 8.64033 8.63999 2.66699 16 2.66699C23.36 2.66699 29.3333 8.64033 29.3333 16.0003Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.9467 20.2403L16.8133 17.7737C16.0933 17.347 15.5067 16.3203 15.5067 15.4803V10.0137"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Unified Command Center",
      desc: "Manage everything seamlessly from one powerful and intuitive dashboard.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M8.58663 2.66699H23.4C28.1466 2.66699 29.3333 3.85366 29.3333 8.58699V17.027C29.3333 21.7737 28.1466 22.947 23.4133 22.947H8.58663C3.85329 22.9603 2.66663 21.7737 2.66663 17.0403V8.58699C2.66663 3.85366 3.85329 2.66699 8.58663 2.66699Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 22.96V29.3333"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.66663 17.333H29.3333"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 29.333H22"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Smart Driver Intelligence",
      desc: "Monitor driver behavior and improve safety with intelligent tracking.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="43"
          height="29"
          viewBox="0 0 43 29"
          fill="none"
        >
          <path
            d="M22.7167 0C21.1268 0 19.8167 1.31012 19.8167 2.9C19.8167 4.48988 21.1268 5.8 22.7167 5.8H25.1333V17.8833H19.0161C18.5747 17.0765 18.0308 16.3358 17.4 15.6781V9.51563C17.4 8.05755 16.7936 6.92643 15.9953 6.25313C15.197 5.57982 14.2843 5.31667 13.5031 5.31667H6.76667C5.17679 5.31667 3.86667 6.62679 3.86667 8.21667C3.86667 9.80654 5.17679 11.1167 6.76667 11.1167H9.66667V12.5818C4.29272 12.8319 0 17.2823 0 22.7167C2.55817e-05 22.973 0.101879 23.2189 0.283158 23.4002C0.464438 23.5815 0.710299 23.6833 0.966667 23.6833H3.92708C4.38944 26.6949 7.01521 29 10.15 29C13.2848 29 15.9106 26.6949 16.3729 23.6833H27.0667C27.1948 23.6851 27.3219 23.6615 27.4408 23.6137C27.5597 23.5659 27.6679 23.495 27.7591 23.4051C27.8503 23.3151 27.9227 23.208 27.9722 23.0898C28.0216 22.9716 28.0471 22.8448 28.0471 22.7167C28.0471 22.5886 28.0216 22.4617 27.9722 22.3436C27.9227 22.2254 27.8503 22.1182 27.7591 22.0283C27.6679 21.9383 27.5597 21.8674 27.4408 21.8196C27.3219 21.7719 27.1948 21.7482 27.0667 21.75H20.2094C20.1457 21.083 20.0188 20.4401 19.8318 19.8167H26.1C26.3564 19.8166 26.6022 19.7148 26.7835 19.5335C26.9648 19.3522 27.0666 19.1064 27.0667 18.85V4.83333C27.0666 4.57697 26.9648 4.3311 26.7835 4.14983C26.6022 3.96855 26.3564 3.86669 26.1 3.86667H22.7167C22.1644 3.86667 21.75 3.45225 21.75 2.9C21.75 2.34775 22.1644 1.93333 22.7167 1.93333H27.8521C28.3467 1.93333 28.5409 2.04939 28.6979 2.23542C28.8549 2.42144 29 2.78457 29 3.38333V9.18333C28.9998 9.34115 29.0382 9.49662 29.112 9.63616C29.1857 9.7757 29.2924 9.89508 29.4229 9.98386C30.8626 10.9436 32.391 12.0053 33.501 13.1708C34.4975 14.2171 35.1318 15.3077 35.2531 16.5089C32.2648 16.99 29.9667 19.5973 29.9667 22.7167C29.9667 26.1755 32.7913 29 36.25 29C39.7087 29 42.5333 26.1755 42.5333 22.7167C42.5333 19.5771 40.203 16.9654 37.1865 16.5089C37.0588 14.6736 36.1072 13.104 34.8906 11.8266C33.9416 10.8301 32.8445 9.99212 31.749 9.22865C32.3306 9.50838 32.9802 9.66667 33.6672 9.66667H36.25C36.5064 9.66664 36.7522 9.56479 36.9335 9.38351C37.1148 9.20223 37.2166 8.95637 37.2167 8.7V2.9C37.2166 2.64363 37.1148 2.39777 36.9335 2.21649C36.7522 2.03521 36.5064 1.93336 36.25 1.93333H33.6672C32.6217 1.93333 31.6493 2.30788 30.9031 2.9151C30.8393 2.19078 30.6284 1.5152 30.1781 0.981771C29.6317 0.334331 28.7663 0 27.8521 0H22.7167ZM33.6672 3.86667H35.2833V7.73333H33.6672C32.349 7.73333 31.4167 6.83016 31.4167 5.8C31.4167 4.76984 32.349 3.86667 33.6672 3.86667ZM6.76667 7.25H13.5031C13.8135 7.25 14.3627 7.38583 14.7568 7.71823C15.1509 8.05063 15.4667 8.54567 15.4667 9.51563V14.1073C14.3159 13.3828 13.0026 12.893 11.6 12.6875V10.15C11.6 9.89363 11.4981 9.64777 11.3168 9.46649C11.1356 9.28521 10.8897 9.18336 10.6333 9.18333H6.76667C6.21441 9.18333 5.8 8.76892 5.8 8.21667C5.8 7.66441 6.21441 7.25 6.76667 7.25ZM10.15 14.5C14.3696 14.5 17.7962 17.6639 18.276 21.75H2.02396C2.50466 17.6638 5.93128 14.5 10.15 14.5ZM36.25 18.3667C38.6639 18.3667 40.6 20.3028 40.6 22.7167C40.6 25.1306 38.6639 27.0667 36.25 27.0667C33.8361 27.0667 31.9 25.1306 31.9 22.7167C31.9 20.3028 33.8361 18.3667 36.25 18.3667ZM36.25 21.2667C35.4492 21.2667 34.8 21.9159 34.8 22.7167C34.8 23.5175 35.4492 24.1667 36.25 24.1667C37.0508 24.1667 37.7 23.5175 37.7 22.7167C37.7 21.9159 37.0508 21.2667 36.25 21.2667ZM5.90573 23.6833H14.3943C13.9553 25.6242 12.23 27.0667 10.15 27.0667C8.07004 27.0667 6.34465 25.6242 5.90573 23.6833Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      title: "Predictive Alerts System",
      desc: "Receive proactive alerts to prevent risks before they happen.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M16.0267 3.87988C11.6133 3.87988 8.02666 7.46655 8.02666 11.8799V15.7332C8.02666 16.5465 7.67999 17.7865 7.26666 18.4799L5.73333 21.0265C4.78666 22.5999 5.44 24.3465 7.17333 24.9332C12.92 26.8532 19.12 26.8532 24.8667 24.9332C26.48 24.3999 27.1867 22.4932 26.3067 21.0265L24.7733 18.4799C24.3733 17.7865 24.0267 16.5465 24.0267 15.7332V11.8799C24.0267 7.47988 20.4267 3.87988 16.0267 3.87988Z"
            stroke="white"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M18.4934 4.26691C18.0801 4.14691 17.6534 4.05358 17.2134 4.00025C15.9334 3.84025 14.7067 3.93358 13.5601 4.26691C13.9467 3.28025 14.9067 2.58691 16.0267 2.58691C17.1467 2.58691 18.1067 3.28025 18.4934 4.26691Z"
            stroke="white"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.0266 25.4131C20.0266 27.6131 18.2266 29.4131 16.0266 29.4131C14.9333 29.4131 13.9199 28.9598 13.1999 28.2398C12.4799 27.5198 12.0266 26.5064 12.0266 25.4131"
            stroke="white"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
        </svg>
      ),
    },
  ];
  const data = [
    {
      title: "Fleet Management",
      subtitle: "Vehicle Tracking  |  Driver Management  |  Dashboard App",
      path: "/project-details/fleet-management",
    },
    {
      title: "SI Connect",
      subtitle: "Smart Tracker | Mobile App | Smarter Riders",
      path: "/project-details/si-connect",
    },
  ];
  return (
    <div className="project-details-main">
      <FeaturedSection
        subtitle="Smart System  |   Intelligent vehicles   |  Advanced Sensing"
        title=" SI Intelligent"
        description="SI Intelligent is a smart system designed to enhance vehicle safety and control by using real-time monitoring, intelligent alerts, and advanced tracking features, helping you stay connected to your motorcycle and respond instantly to any unusual activity."
      />
      <ProjectScreens slides={fleetSlides} buttonLabel="Explore The Project" />
      <ProjectFuture
        cards={fleetCards}
        bottomText="SI Intelligent delivers advanced vehicle monitoring with real-time insights and smart analytics.
Stay informed with intelligent alerts and continuous activity tracking.
Enhance safety through predictive detection and quick response features.
Understand vehicle performance, usage patterns, and behavior with ease.
All powered through a seamless and intuitive digital experience."
        bottomImage={fleetManagement}
        bottomImageAlt="Fleet Management"
      />
      <BottomSection cards={data} />
    </div>
  );
};

export default SIIntelligent;
