import React from 'react';
import './App.css';

const Portfolio = () => {
  const role = "Web Developer";
  
  const skills = [
    "ReactJS",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Responsive Design",
    "Git",
    "UI/UX Design",
  ];

  const projects = [
    {
      title: "E-commerce Website",
      description: "Developed a fully functional e-commerce website using React and integrated it with a backend API.",
      technologies: ["React", "Redux", "Node.js", "MongoDB"],
    },
    {
      title: "Task Management App",
      description: "Built a task management application to help users organize their tasks and track progress.",
      technologies: ["React", "Firebase", "Material-UI"],
    },
    {
      title: "Portfolio Website",
      description: "Designed and implemented my personal portfolio website using React for showcasing projects.",
      technologies: ["React", "CSS", "GitHub Pages"],
    },
  ];

  const hobby = "In my free time, I enjoy hiking and capturing the beauty of nature through photography.";

  return (
    <div className="portfolio">
      <header>
        <h1>John Doe</h1>
        <p>{role}</p>
      </header>

      <section className="skills">
        <h2>Skills</h2>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <ul>
          {projects.map((project, index) => (
            <li key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p>Technologies used: {project.technologies.join(', ')}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="hobby">
        <h2>Hobby</h2>
        <p>{hobby}</p>
      </section>
      
      <footer>
        <p>Contact: john@example.com</p>
        <div className="social-links">
          <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
