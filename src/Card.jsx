import React from "react";
import "./Card.css";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import myImage from './assets/image2.jpg';
import myImage2 from './assets/card2.jpg';
import myImage3 from './assets/card3.jpg'

const Card = () => {
  return (
    <div className="all-continer-card" id="card">
        <div className="all-continer-text">
        <h1>Our Tracks</h1>
        <p>Away from one's objective, train of thought, or a sequence of events,</p>
        </div>
        <div className="all-continer">
        <div className="card-container">
            {/* Upper Section */}
            <div className="card-top">
                <img
                src={myImage}
                alt="Card Image"
                className="card-image"
                />
                <h2 className="card-title">M. K. M. Rahat</h2>
                <p className="card-description">A passionate software engineer.</p>
            </div>

            {/* Lower Section */}
            <div className="card-bottom">
                <p className="card-role">Engineering Physics</p>
                <div className="card-icons">
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                    <FaFacebook className="icon" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                    <FaLinkedin className="icon" />
                </a>
                </div>
            </div>
       
        </div>
        <div className="card-container">
            {/* Upper Section */}
            <div className="card-top">
                <img
                src={myImage2}
                alt="Card Image"
                className="card-image"
                />
                <h2 className="card-title">Roni Islam </h2>
                <p className="card-description">A passionate software engineer.</p>
            </div>

                {/* Lower Section */}
            <div className="card-bottom">
                <p className="card-role">Engineering Physics</p>
                <div className="card-icons">
                    <a href="https://facebook.com" target="_blank" rel="noreferrer">
                        <FaFacebook className="icon" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                        <FaLinkedin className="icon" />
                    </a>
                </div>
            </div>
       
        </div>
        <div className="card-container">
            {/* Upper Section */}
            <div className="card-top">
                <img
                src={myImage3}
                alt="Card Image"
                className="card-image"
                />
                <h2 className="card-title">John Doe</h2>
                <p className="card-description">A passionate software engineer.</p>
            </div>

                {/* Lower Section */}
            <div className="card-bottom">
                <p className="card-role">Engineering  Physics</p>
                <div className="card-icons">
                    <a href="https://facebook.com" target="_blank" rel="noreferrer">
                        <FaFacebook className="icon" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                        <FaLinkedin className="icon" />
                    </a>
                </div>
            </div>
       
        </div>
    </div>
    </div>
  );
};

export default Card;
