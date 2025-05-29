// src/pages/projects/Netflix.js
import React from 'react';
import './ProjectDetail.css';

const Netflix = () => {
  return (
    <div className="project-detail">
      <h2>Netflix Clone</h2>
      <p>This project is a fully responsive Netflix clone built using React.js, Firebase Authentication, and the TMDB API. Users can log in, browse movies, and stream trailers.</p>
      <ul>
        <li><strong>Frontend:</strong> React.js, CSS</li>
        <li><strong>Backend:</strong> Firebase (Auth + Hosting)</li>
        <li><strong>API:</strong> TMDB for movies and trailers</li>
        <li><strong>Features:</strong> Login, Browse, Watch Trailer, Responsive UI</li>
      </ul>
    </div>
  );
};

export default Netflix;
