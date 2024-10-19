// Footer.js
import React from "react";
import "./Footer.css"; // Import CSS for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; 2024 Shivanshu Dubey</p>
        <p>
          Email:{" "}
          <a href="mailto:shivanshudubey549@gmail.com">
            shivanshudubey549@gmail.com
          </a>
        </p>
        <p>Website created on: 17-10-2024</p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/shivanshu-dubey-3b1354295/" className="social-link">
            LinkedIn
          </a>
          <a href="https://github.com/shivd236" className="social-link">
            GitHub
          </a>
          <a href="https://shivd236.github.io/Shivanshuporfolio/" className="social-link">
            Portfolio
            
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
