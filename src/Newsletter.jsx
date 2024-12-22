import React from "react";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <div className="newsletter-container">
      <h2>Subscribe to our Newsletter</h2>
      <p>Stay updated with the latest news and offers.</p>
      <div className="newsletter-form">
        <input
          type="email"
          placeholder="Enter your email"
          className="newsletter-input"
        />
        <button className="newsletter-button">Subscribe</button>
      </div>
    </div>
  );
};

export default Newsletter;
