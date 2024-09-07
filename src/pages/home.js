import React from "react";
import "../style/homepage.css";
import profileImage from "../images/profilepic.jpg"

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Software Engineer, Web Developer, Mentor</h1>
            <p>
              Hey! My name is Robert Dumitru and I have experience building full-stack applications, working with modern frameworks, and solving complex problems. My passion is to develop efficient, scalable, and user-friendly solutions.
            </p>
            <a href="#contact" className="cta-button">Get in Touch</a>
          </div>
          <div className="hero-image">
            <img src={profileImage} alt="Your Name" />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience-section">
        <h2>Experience</h2>
        <div className="experience-cards">
          <div className="experience-card">
            <h3>Full Stack Engineer (Contract)</h3>
            <p>Developed user interfaces and back-end logic to manage company information and 1000+ daily requests. Used Node.js, Express.js, MongoDB, AWS services, and CI/CD pipelines.</p>
          </div>
          <div className="experience-card">
            <h3>Implementation Engineer</h3>
            <p>Created custom internal plugins, developed microservices, and integrated with multiple REST APIs using Node.js, React, PHP, and AWS CloudFormation.</p>
          </div>
          <div className="experience-card">
            <h3>Senior Full Stack Developer</h3>
            <p>Built APIs and front-end systems for automating smart homes using sensors and relays, with a tech stack of React, Redux, Node.js, and Postgres.</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section">
        <h2>Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Project Name 1</h3>
            <p>Designed and built a scalable web application for XYZ. Integrated secure payment gateways, cloud hosting, and API management.</p>
          </div>
          <div className="project-card">
            <h3>Project Name 2</h3>
            <p>Developed a custom API system for dynamic data handling, scaling to serve millions of requests monthly.</p>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="technologies-section">
        <h2>Technologies</h2>
        <ul className="tech-list">
          <li>React</li>
          <li>Node.js</li>
          <li>MongoDB</li>
          <li>AWS</li>
          <li>Postgres</li>
          <li>CI/CD Pipelines</li>
          <li>Jest</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h2>Contact</h2>
        <p>If you're looking to collaborate on a project or just want to chat, feel free to reach out!</p>
        <a href="mailto:your-email@example.com" className="contact-button">Send a Message</a>
      </section>
    </div>
  );
};

export default Home;