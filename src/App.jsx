import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from 'react';
import Header from './Header';
import HomePageContent from "./HomePageContent";
import "./HomePage.css";


import FeatureCard from './FeatureCard'; // Reusable Component
import { FaLaptop, FaUserTie, FaCertificate } from 'react-icons/fa';


import CourseCard from './CourseCard';
import image1 from './assets/image1.jpg';
import image2 from './assets/course.jpg';
import image3 from './assets/course2.jpg';


import HeroSection from "./HeroSection";

import CarouselCard from "./CarouselCard";

import Card from "./Card";

import Newsletter from "./Newsletter";
import Footer from "./Footer";


function App() {
      const features = [
        { icon: <FaLaptop />, title: 'computer skills', description: 'Learn and master computer skills.' },
        { icon: <FaUserTie />, title: 'Career Guidance', description: 'Get advice for your dream career.' },
        { icon: <FaCertificate />, title: 'Certifications', description: 'Earn certifications to boost your resume.' },
    ];

    const courses = [
      {
        image: image1,
        title: 'UI/UX Design for Beginners',
        description: 'Learn the basics of UI/UX Design',
        stats: { hours: '22h 30min', courses: '34 Courses', downloads: '250 Sales' },
        price: '98',
        buttonText: 'Join Course',
      },
      {
        image: image2,
        title: 'Web Development Mastery',
        description: 'Master full-stack web development',
        price: '199',
        stats: { hours: '50h 45min', courses: '50 Courses', downloads: '500 Sales' },
        buttonText: 'Join Course',
      },
      {
        image: image3,
        title: 'Data Science for Beginners',
        description: ' data science and machine learning',
        stats: { hours: '40h 20min', courses: '45 Courses', downloads: '400 Sales' },
        price: '149',
        buttonText: 'Join Course',
      },
    ];

    
  return (
    <>
      <Header />
      <div className="homepage">
        <HomePageContent />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center'}}>
            {features.map((feature, index) => (
                <FeatureCard
                    key={index}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                />
            ))}
      </div>
      <div className="app">
        <h1 style={{color: 'black'}}>Our Tracks</h1>
        <div className="course-card-container">
        
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              image={course.image}
              title={course.title}
              description={course.description}
              stats={course.stats}
              price={course.price}
              buttonText={course.buttonText}
            />
          ))}
        </div>
      </div>
      <div> 
        <HeroSection />
      </div>
      <div>
        <CarouselCard />
      </div>
      <div>
        <Card />
      </div>
      <div>
        <Newsletter />
      </div>
      <div>
        <Footer />
      </div>

     
    </>
  )
}

export default App;
