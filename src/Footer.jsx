import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-section">
        <h3>Bookstore</h3>
        <p>Your one-stop solution for books of all genres and categories.</p>
      </div>
      <div className="footer-section">
        <h3>Company</h3>
        <ul>
          <li>About Us</li>
          <li>How It Works</li>
          <li>Popular course</li>
          <li>service </li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Course</h3>
        <ul>
          <li>Categories</li>
          <li>Offline Course</li>
          <li>Vedio course</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Support</h3>
        <ul>
          <li>FAQ</li>
          <li>Help Center</li>
          <li>Career</li>
          <li>Privice</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Contact Info</h3>
        <ul>
          <li>Mobile: +880173303108x</li>
          <li>Email: s88552@bookstore.com</li>
          <li>Addriess: Dhaka,Bangladash</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
