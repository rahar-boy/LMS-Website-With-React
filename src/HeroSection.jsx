import React from "react";
import "./HeroSection.css";
import { FaHardHat, FaGraduationCap } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="hero-section" id="about-us">
      <div className="hero-text">
        <div className="hero-content">
            <h1>Premium <span style={{color: '#ff3b2f'}}>Learning</span> <br />Exprement</h1>
            <div className="hero-info">
            <div className="hero-info-item">
                <FaHardHat className="hero-icon" />
                <div>
                <h5>Hard Work</h5>
                <p>Success comes with dedication and effort.</p>
                </div>
            </div>
            <div className="hero-info-item">
                <FaGraduationCap className="hero-icon" />
                <div>
                <h5>Learn and Grow</h5>
                <p>Continuously expand your skills and knowledge.</p>
                </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
