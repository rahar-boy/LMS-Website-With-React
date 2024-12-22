import React from "react";
import Slider from "react-slick";
import "./CarouselCard.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image1 from "./assets/image1.jpg";
import image2 from "./assets/image2.jpg";
import image3 from "./assets/image3.jpg";
import image4 from "./assets/image3.jpg";

const CarosultCard = () => {
  const cards = [
    {
      description: "This is the fourth card description This is the fourth card description This is the fourth card description.",
      image: image1,
      title: "Card 1",
      tit: "fontent desiner",
    },
    {
      description: "This is the fourth card description This is the fourth card description This is the fourth card description.",
      image: image2,
      title: "Card 2",
      tit: "fontent desiner",
    },
    {
      description: "This is the fourth card description This is the fourth card description This is the fourth card description.",
      image: image3,
      title: "Card 3",
      tit: "fontent desiner",
    },
    {
      description: "This is the fourth card description This is the fourth card description This is the fourth card description.",
      image: image4,
      title: "Card 4",
      tit: "fontent desiner",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // 1 card at a time
    slidesToScroll: 1,
  };

  return (
    <div className="carousel-container">
      <h1>rahat</h1>

      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={index} className="carousel-card">
            <p>{card.description}</p>
            <div className="card-bottom">
              <img src={card.image} alt={card.title} />
              <div className="card-bottom-text">
                <h2>{card.title}</h2>
                <p>{card.tit}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarosultCard;
