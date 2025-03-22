import React from "react";
import { FaChevronDown, FaLaptopCode } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="about">
      {/* Icon & Heading */}
      <header className="about-header">
        <FaLaptopCode className="laptop-icon" />
        <h2 className="about-heading">
          About <span className="highlight">Me</span>
        </h2>
      </header>

      {/* About Content */}
      <article className="about-card">
        <p>
          Hey there! I'm a passionate{" "}
          <span className="highlight">Software Engineer & Web Developer</span>.
          My journey started with a curiosity for problem-solving and has
          evolved into building scalable and efficient applications.
        </p>

        {/* Skills & Interests */}
<section className="about-details">
  {[
    {
      title: "💻 What I Do",
      items: [
        ["React & JavaScript", "Creating interactive UIs"],
        ["Full-Stack Development", "End-to-end solutions"],
        ["AI & Data Science", "Experimenting with AI models"]
      ]
    },
    {
      title: "🌟 Outside of Coding",
      items: [
        ["Exploring new technology trends"],
        ["Working on creative side projects"]
      ]
    }
  ].map((section, index) => (
    <div key={index}>
      <h3 className="section-title">{section.title}</h3>
      <ul className="about-list">
        {section.items.map(([highlight, desc], idx) => (
          <li key={idx}>
            {highlight.includes("✅") || highlight.includes("🔍") ? (
              highlight
            ) : (
              <>
                ✅ <span className="highlight">{highlight}</span> {desc && `– ${desc}`}
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  ))}
</section>

      </article>

      {/* Scroll Button */}
      <div
        className="scroll-down"
        onClick={() =>
          document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <FaChevronDown className="scroll-icon" />
      </div>
    </section>
  );
};

export default About;
