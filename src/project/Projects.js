import React from 'react';
import { Link } from 'react-router-dom';
import './Project.css';

const projects = [
  {
    title: 'Netflix Clone',
    description: 'A responsive clone of Netflix using React.js, Firebase Auth, and TMDB API.',
    link: '/projects/netflix',
  },
  {
    title: 'E-commerce Website',
    description: 'Full-stack clothing website built with React, Node.js, and MongoDB.',
    link: '/projects/ecommerce',
  },
  {
    title: 'Soomories Chocolate Shop',
    description: 'An online chocolate store built using React.js with a user-friendly interface and cart system.',
    link: '/projects/soomories',
  },
  {
    title: 'Pintola Grocery Shop',
    description: 'A modern grocery shopping website developed in React.js featuring cart and checkout functionality.',
    link: '/projects/pintola',
  },
];

const Project = () => {
  return (
    <section className="project-section">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <Link to={project.link} className="project-link">View Details</Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
