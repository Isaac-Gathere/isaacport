import React from "react";
import { ReactTyped } from "react-typed";
import { FaChevronDown } from "react-icons/fa";

import profileWebP from "../assets/profile.webp";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("Contact section not found!");
    }
  };

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("About section not found!");
    }
  };

  return (
    <section className="hero">
      <div className="hero-content">
        
        <div className="image-content">
          <img 
            src={profileWebP} 
            alt="Profile" 
            className="profile-pic" 
            loading="lazy" 
            width="250" 
            height="250" 
          />
        </div>

        <div className="text-content">
          <h1>
            <span className="highlight">G</span>athere
            <span className="highlight"> I</span>saac
          </h1>

          <ReactTyped
            className="typed-text"
            strings={["Software Engineer", "Web Developer", "React Enthusiast"]}
            typeSpeed={50}
            backSpeed={30}
            loop
          />

          <p className="tagline">"Turning Ideas into Scalable Solutions"</p>

          <button className="contact-btn" onClick={scrollToContact}>
            Contact Me
          </button>
        </div>
      </div>

      <div className="scroll-down" onClick={scrollToNextSection}>
        <FaChevronDown className="scroll-icon" />
      </div>
    </section>
  );
};

export default Hero;
