import React from "react";
import { useState, useEffect } from 'react';
import "./ImageGallery.css";
import QRCodeComponent from "../qr/qr";
import tentthree from '../assates/tenttree.jpg'
import ten from '../assates/tentfour.jpg'
import tens from '../assates/tenthouseegth.mp4'
import tenn from '../assates/tenthousefour.jpg'
import tennn from '../assates/tenthousesix.jpg'
import tennnn from '../assates/tenthousetwo.jpg'
import useScrollFadeIn from "../hook";

const images = [
  tenn,
  tentthree,
  ten,
  tennn,
  tentthree,
  tennnn,
];

const videos = [
  tens, // Replace with your video URLs
  tens,
  tens,
];

const ImageGallery = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  useScrollFadeIn(); // Apply fade-in effect on scroll
  
  // Handle slide change (next video)
  const nextSlide = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const data = [
    ['German Tents for rent', 'Pagoda Tents for rent', 'Air Conditioners of various tonnes for rent / for hire'],
    ['Aluminium Tents for rent', 'Exhibition Stalls for rent', 'Waterproof Plywood Platforms for rent / for hire'],
    ['Metal barricading for rent / for hire', 'Chairs for rent', 'Transparent German Hangers for rent / for hire'],
    ['Shamianas for rent', 'Shamiyana Tent for rent', 'Golden Queue Stands with Red Ribbons for rent / for hire'],
    ['Tent House for rent', 'Aluminium Hanger Tents for rent', 'Single Seater Leather Sofas for rent / for hire'],
    ['Tent House Dealer', 'Canopies for rent', 'Plastic Chairs with covers for rent / for hire'],
    ['Octanorm Exhibition Stalls for rent', 'Super Structures for rent', 'Plastic Chairs without covers for rent / for hire'],
    ['Mega Hangers for rent', 'AC Tents for rent', 'Round Tables with cloth covering for rent / for hire'],
  ];

  const removeRepetition = (data) => {
    const seen = new Set();
    return data.map((row) =>
      row.filter((item) => {
        if (seen.has(item)) return false;
        seen.add(item);
        return true;
      })
    );
  };

  const cleanedData = removeRepetition(data);

  // Handle video click to enlarge and play
  const handleVideoClick = () => {
    setIsVideoPlaying(true);
  };

  // Handle video end to reset
  const handleVideoEnd = () => {
    setIsVideoPlaying(false);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Auto slide every 5 seconds
    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="paddimg">
      <div>
        <img
          className="main_image"
          src={tentthree}
          alt="main"
        />
      </div>
      <div className="App">
        Image Gallery
      </div>
      <div className="gallery-container">
        {images.map((src, index) => (
          <div className="gallery-item" key={index}>
            <img src={src} alt={`Gallery ${index + 1}`} className="gallery-image" />
            <div className="gallery-overlay">
              <div className="overlay-text">Image {index + 1}</div>
            </div>
          </div>
        ))}
      </div>
      {/* Video Gallery */}
      <div className="App">
        Video Gallery
      </div>
      <div className="video-gallery">
        {videos.map((videoSrc, index) => (
          <div className="video-card" key={index}>
            <video
              width="100%"
              height="auto"
              controls
              autoPlay={isVideoPlaying && index === currentVideoIndex}
              onClick={handleVideoClick}
              onEnded={handleVideoEnd}
              className="video"
              aria-label={`Video ${index + 1}`}
            >
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* <button onClick={nextSlide} className="next-button">Next Video</button> */}
            <div className="place-of-event">Kathas events </div>
          </div>
        ))}
      </div>
      <div className='text_subhaeding'>
        We provide tent house services for the following products in and around Uttar-Pradesh and across India.
      </div>
      <table className='tabale-head'>
        <tbody>
          {cleanedData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((item, colIndex) => (
                <td key={colIndex}>{item}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <QRCodeComponent />
      </div>
    </div>
  );
};

export default ImageGallery;
