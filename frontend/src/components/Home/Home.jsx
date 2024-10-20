import React from "react";
import "../Home/Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const onCreatePage = () => {
    navigate("/create");
  };

  const onReadPage = () => {
    navigate("/read");
  };

  return (
    <div className="homepage-container">
      <div className="welcome-banner">
        <h1>Welcome to My MERN CRUD Web Project</h1>
        <p>
          This project is a demonstration of my skills in full-stack development
          using the MERN stack (MongoDB, Express.js, React, Node.js).
        </p>
      </div>
      <div className="project-overview-section">
        <h2>Project Overview</h2>
        <p>
          This CRUD (Create, Read, Update, Delete) web application showcases my
          ability to build a complete full-stack project using the MERN stack.
          The purpose of this project is to demonstrate efficient data handling,
          user interaction, and seamless navigation across various features of
          the app.
        </p>
        <p>
          The application includes user-friendly interfaces, secure data
          operations, and responsive design principles to provide a smooth user
          experience. It was built to highlight my expertise in both front-end
          and back-end development.
        </p>
      </div>
      <div className="features-section">
        <h2>Key Features</h2>
        <ul>
          <li>Fully functional CRUD operations</li>
          <li>User-friendly interface</li>
          <li>Authentication and secure data handling</li>
          <li>Built with MongoDB, Express, React, and Node.js</li>
        </ul>
      </div>
      <div className="cta-buttons">
        <button onClick={onCreatePage}>Create User</button>
        <button onClick={onReadPage}>View Users</button>
      </div>
      <div className="technologies-section">
        <h2>Technologies Used</h2>
        <div className="tech-icons">
          <div className="tech-item">
            <img
              src="https://img.icons8.com/color/48/000000/mongodb.png"
              alt="MongoDB"
            />
            <p>MongoDB</p>
          </div>
          <div className="tech-item">
            <img
              src="https://img.icons8.com/color/48/000000/express-js.png"
              alt="Express.js"
            />
            <p>Express.js</p>
          </div>
          <div className="tech-item">
            <img
              src="https://img.icons8.com/color/48/000000/react-native.png"
              alt="React"
            />
            <p>React</p>
          </div>
          <div className="tech-item">
            <img
              src="https://img.icons8.com/color/48/000000/nodejs.png"
              alt="Node.js"
            />
            <p>Node.js</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
