import React from "react";
import { FaChevronDown } from "react-icons/fa";

// Import images (use only one version for each project)
import project1 from "../assets/project-1.webp";
import ecommerce from "../assets/project-0.webp";

// Project data array
const projectData = [
  {
    id: 1,
    name: "Task Manager",
    description: "A web-based task management system to track completed and pending tasks.",
    details: "It involves user authentication, task creation, updates, and completion tracking.",
    techStack: "Django, Python, SQLite, HTML, CSS, JavaScript",
    image: project1, // Use one image file
    alt: "Task Manager",
  },
  {
    id: 2,
    name: "E-commerce Website",
    description: "A fully functional online store with product listings, shopping cart, and checkout.",
    details: "It includes user authentication, order management, and secure payments.",
    techStack: "React, Node.js, Express, MongoDB",
    image: ecommerce, 
    alt: "E-commerce Website",
  },
];

const Projects = () => {
  const scrollToNextSection = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">
        My <span className="highlight">Projects</span>
      </h2>

      <div className="projects-grid">
        {projectData.map((project) => (
          <div className="project-card" key={project.id}>
            {/* Optimize image loading */}
            <img
              srcSet={`
                ${project.image} 600w, 
                ${project.image} 1200w, 
                ${project.image} 1917w
              `}
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
              src={project.image}
              alt={project.alt}
              className="project-image"
              loading="lazy"
              width="600"
              height="400"
            />
            <div className="project-info">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <p>{project.details}</p>
              <p>
                <strong>Tech Stack:</strong> {project.techStack}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="scroll-down" onClick={scrollToNextSection}>
        <FaChevronDown className="scroll-icon" />
      </div>
    </section>
  );
};

export default Projects;
