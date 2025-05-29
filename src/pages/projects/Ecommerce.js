// src/pages/projects/Ecommerce.js
import React from 'react';
import './ProjectDetail.css';

const Ecommerce = () => {
  return (
    <div className="project-detail">
      <h2>E-commerce Clothing Website</h2>
      <p>
        A full-stack e-commerce clothing platform where users can browse products, add them to a cart, and complete checkout using integrated APIs.
      </p>
      <ul>
        <li><strong>Frontend:</strong> React.js, Tailwind CSS</li>
        <li><strong>Backend:</strong> Node.js, Express.js</li>
        <li><strong>Database:</strong> MongoDB</li>
        <li><strong>Features:</strong> User Authentication, Product Search, Cart, Checkout, Admin Panel</li>
      </ul>
    </div>
  );
};

export default Ecommerce;
