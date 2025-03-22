import React from "react";
import {
  FaChevronDown,
  FaCode,
  FaDatabase,
  FaCloud,
  FaShieldAlt,
  FaChartLine, // Icon for Data Analysis
} from "react-icons/fa";

const Skills = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("projects");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("Projects section not found!");
    }
  };

  return (
    <section id="skills" className="skills">
      <div className="skills-content">
        <h2 className="skills-heading">
          Skills & <span className="highlight">Tech Stack</span>
        </h2>

        <div className="skills-grid">
          {/* Frontend Development */}
          <div className="skill-card">
            <FaCode className="skill-icon" />
            <h3>Frontend Development</h3>
            <ul className="skill-list">
              <li className="skill-item">React.js</li>
              <li className="skill-item">Next.js</li>
              <li className="skill-item">JavaScript (ES6+)</li>
              <li className="skill-item">TypeScript</li>
              <li className="skill-item">Tailwind CSS</li>
              <li className="skill-item">Sass</li>
              <li className="skill-item">Redux</li>
            </ul>
          </div>

          {/* Backend Development */}
          <div className="skill-card">
            <FaDatabase className="skill-icon" />
            <h3>Backend Development</h3>
            <ul className="skill-list">
              <li className="skill-item">Node.js</li>
              <li className="skill-item">Express.js</li>
              <li className="skill-item">Django</li>
              <li className="skill-item">Flask</li>
              <li className="skill-item">Spring Boot</li>
              <li className="skill-item">GraphQL</li>
              <li className="skill-item">REST APIs</li>
            </ul>
          </div>

          {/* Cloud & DevOps */}
          <div className="skill-card">
            <FaCloud className="skill-icon" />
            <h3>Cloud & DevOps</h3>
            <ul className="skill-list">
              <li className="skill-item">AWS (S3, Lambda, EC2)</li>
              <li className="skill-item">Firebase</li>
              <li className="skill-item">Supabase</li>
              <li className="skill-item">Docker</li>
              <li className="skill-item">Kubernetes</li>
              <li className="skill-item">GitHub Actions</li>
            </ul>
          </div>

          {/* Security & Testing */}
          <div className="skill-card">
            <FaShieldAlt className="skill-icon" />
            <h3>Security & Testing</h3>
            <ul className="skill-list">
              <li className="skill-item">Burp Suite</li>
              <li className="skill-item">OWASP ZAP</li>
              <li className="skill-item">Metasploit</li>
              <li className="skill-item">Selenium</li>
              <li className="skill-item">Jest</li>
              <li className="skill-item">Cypress</li>
            </ul>
          </div>

          {/* Data Analysis & Machine Learning */}
          <div className="skill-card">
            <FaChartLine className="skill-icon" />
            <h3>Data Analysis & Machine Learning</h3>
            <ul className="skill-list">
              <li className="skill-item">Python (Pandas, NumPy, Matplotlib, Seaborn)</li>
              <li className="skill-item">SQL (PostgreSQL, MySQL, SQLite)</li>
              <li className="skill-item">R (ggplot2, dplyr, Shiny)</li>
              <li className="skill-item">Scikit-Learn</li>
              <li className="skill-item">TensorFlow & PyTorch</li>
              <li className="skill-item">Tableau & Power BI</li>
              <li className="skill-item">Time Series Analysis</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Scroll Down Icon */}
      <div className="scroll-down" onClick={scrollToNextSection}>
        <FaChevronDown className="scroll-icon" />
      </div>
    </section>
  );
};

export default Skills;
