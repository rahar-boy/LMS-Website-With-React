import React from 'react';
import { FaClock, FaVideo, FaDownload } from 'react-icons/fa';
import './CourseCard.css'; // Optional, for styling

const CourseCard = ({ image, title, description, stats, price, buttonText }) => {
  return (
    
    <div className="course-card" id='courses'>
      <img src={image} alt={title} className="course-card-img" />
      <div className="course-card-content">
        <div className="course-card-left">
            <p className="course-card-description">{description}</p>
            <h3 className="course-card-title">{title}</h3>
            <span className="course-card-price">${price}</span>
        </div>
        <hr />
        <div className="course-card-stats">
          <div className="course-card-stat-item">
            <FaClock /> <span>{stats.hours}</span>
          </div>
          <div className="course-card-stat-item">
            <FaVideo /> <span>{stats.courses}</span>
          </div>
          <div className="course-card-stat-item">
            <FaDownload /> <span>{stats.downloads}</span>
          </div>
        </div>
        <div className="course-card-footer">
          <button className="course-card-btn">{buttonText}</button>
        </div>
      </div>
    </div>
    
  );
};

export default CourseCard;
