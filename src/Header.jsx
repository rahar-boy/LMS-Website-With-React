import React from 'react';
import './Header.css'; // Import your custom CSS file for styling

const Header = () => {
  // Function to handle smooth scrolling
  const scrollToHome = () => {
    const homeSection = document.getElementById('home');
    homeSection.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToAboutus = () => {
    const aboutSection = document.getElementById('about-us');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToCourse = () => {
    const courseSection = document.getElementById('courses');
    courseSection.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToOursrvice = () => {
    const serviceSection = document.getElementById('card');
    serviceSection.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <header className="header">
      <div className="logo">
        <p>Bookstore</p>
      </div>
      <div className="left">
        <nav>
          <ul>
            <li><a href="#home" onClick={scrollToHome}>Home</a></li> {/* Smooth scroll to home */}
            <li><a href="#about" onClick={scrollToAboutus}>About Us</a></li>
            <li><a href="#courses" onClick={scrollToCourse}>Courses</a></li>
            <li><a href="#services" onClick={scrollToOursrvice}>Our Service</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <button className="signup-btn">Sign in</button>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
