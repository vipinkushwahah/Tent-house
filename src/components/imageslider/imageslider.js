import { useState, useEffect } from 'react';
import React from "react";
import 'remixicon/fonts/remixicon.css';
import './imageslider.css';
import logo from '../assates/logo.jpeg'

const images = [
  'https://3.imimg.com/data3/HJ/EP/MY-13823372/wp-content-themes-tenthouse-and-catering-images-tent_house.jpg',
  'https://static.wixstatic.com/media/00daf2_f895706199f5400e8f8c69ae0616257a~mv2.jpg/v1/fill/w_640,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/00daf2_f895706199f5400e8f8c69ae0616257a~mv2.jpg',
  'https://content.jdmagicbox.com/v2/comp/hyderabad/q5/040pxx40.xx40.110727085053.b7q5/catalogue/shaik-tabrez-tent-house-and-catering-services-malakpet-hyderabad-tent-house-tc5fap2btc.jpg',
  'https://cdn0.weddingwire.in/vendor/7717/3_2/960/jpg/tent-house-kk-tenthouse-wedding-decor-3_15_357717-160759264410234.jpeg',
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setIsZoomed(false);
      setTimeout(() => setIsZoomed(true), 50);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div>
        <div className="container__wreaper">
          <div className="circle-container">
            {/* Rotating Circle */}
            <svg className="rotating-circle" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="lightorange"
                strokeWidth="3"
                strokeDasharray="25, 15, 10, 20" /* Custom dash pattern */
                strokeLinecap="round"
              />
            </svg>

            {/* Static Image */}
            <div className="circle-image">
              <img
                src={logo}
                alt="Circle Center"
              />
            </div>
          </div>
          <div className="container__wreaper-main-heading">
            <div className="intro-title">
              Maa_Bhawani-viipin <span className="highlight-text">Tent_House</span>
            </div>
            <div className="intro-greeting">Hello, I'm</div>
            <div className="intro-name">Sanny Chaurasiya</div>
            <div className="intro-description">
              Welcome to Maa Bhawani Tent House, where we turn your special occasions into cherished memories.
              With a commitment to excellence and attention to detail, we provide exceptional tenting solutions
              for weddings, parties, and corporate events. Our professional team ensures seamless execution, offering
              elegant setups, decorations, and a stress-free experience.
              <span className="highlight-text">Unforgettable Gatherings Under One Roof</span> – let us make your events extraordinary!
            </div>
            <div className="action-section">
              {/* <div className="download-cv-button">
                        <a href="?" download="Vipin_CV.pdf">
                            <button>
                                DOWNLOAD CV <i className="ri-download-2-line"></i>
                            </button>
                        </a>    
                        </div> */}
              <div className="social-links">
                <a href="https://www.instagram.com/vipinkushwaha39/" target="blank">
                  <div className="social-link"><i className="ri-instagram-line"></i></div>
                </a>
                <a href="https://in.linkedin.com/in/vipinkushwahah" target="blank">
                  <div className="social-link"><i className="ri-linkedin-fill"></i></div>
                </a>
                <a href="https://github.com/vipinkushwahah/" target="blank">
                  <div className="social-link"><i className="ri-github-fill"></i></div>
                </a>
                <div className="social-link">
                  <i className="ri-whatsapp-fill"></i>
                  <span className="tooltip">7420-8683-46</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
      <div className="slider-container">
        {images.map((src, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
            style={{
              transform: `translateX(${(index - currentIndex) * 100}%)`,
            }}
          >
            <div className={`slide-content ${isZoomed ? 'zoomed' : ''}`}>
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="slider-image"
              />
            </div>
          </div>
        ))}
        <div className="navigation">
          {images.map((_, index) => (
            <button
              key={index}
              className={`nav-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      <div className='headinghome-page'>
        What We Do
      </div>
      <div className='headinghome-page-text'>
        Shridhar Tent House is a trusted 36-year old Tent House Dealer and Tent House Supplier in Bangalore.
        Shridhar Tent House supplies chairs, canopies, aluminium tents, shamianas, shamiyana tents, AC tents,
        German tents, Aluminium Hanger tents, pagoda tents, exhibition stalls, Octanorm exhibition stalls,
        super structures, mega hangers, wooden stages, pandals, and waterproof sheds for rent for functions,
        exhibitions, events, conventions, and convention centers in and around Bangalore, Karnataka.
      </div>
      <div className='headinghome-page-subtext'>
        Tent House Supplier services provided by Shridhar Tent House in Bangalore.
      </div>
      <div className="about__spacers">
        <div className="about__spacer">
          <ul className="dot-list">
            <li className="dot-list-item">
              Tent House for rent / for hire
            </li>
            <li className="dot-list-item">
              Tent House Dealer
            </li>
            <li className="dot-list-item">
              Chairs for rent / for hire
            </li>
            <li className="dot-list-item">
              Canopies for rent / for hire
            </li>
            <li className="dot-list-item">
              Tent House Supplier
            </li>
            <li className="dot-list-item">
              Aluminium Tents for rent / for hire
            </li>
            <li className="dot-list-item">
              Aluminium Hanger Tents for rent / for hire
            </li>
          </ul>
        </div>
        <div className="about__spacer">
          <ul className="dot-list">
            <li className="dot-list-item">
              Shamiyana Tent for rent / for hire
            </li>
            <li className="dot-list-item">
              German Tents for rent / for hire
            </li>
            <li className="dot-list-item">
              Shamianas for rent / for hire
            </li>
            <li className="dot-list-item">
              Pagoda Tents for rent / for hire
            </li>
            <li className="dot-list-item">
              Exhibition Stalls Tents for rental / for hire
            </li>
            <li className="dot-list-item">
              Pandals for rent / for hire
            </li>
          </ul>
        </div>
        <div className="about__spacer">
          <ul className="dot-list">
            <li className="dot-list-item">
              Super Structures for rent / for hire
            </li>
            <li className="dot-list-item">
              Mega Hangers for rent / for hire
            </li>
            <li className="dot-list-item">
              AC Tents for rent / for hire
            </li>
            <li className="dot-list-item">
              Wooden Stages for rent / for hire
            </li>
            <li className="dot-list-item">
              Furtniture for rent / for hire / for hire
            </li>
            <li className="dot-list-item">
              Waterproof Sheds for rent / for hire
            </li>
            <li className="dot-list-item">
              Octanorm Exhibition Stalls for rent / for hire
            </li>
          </ul>
        </div>
      </div>
      <div class="stats">
        <div class="stats__item">
          <div className='iiiiiiiiii'>
            <i class="ri-home-4-fill"></i>
          </div>
          <div class="stats__value">
            <span>1</span>
          </div>
          <div class="stats__description">
            Exhibitions 
            Completed
          </div>
        </div>
        <div class="stats__item">
          <div className='iiiiiiiiii'>
            <i class="ri-building-fill"></i>
          </div>
          <div class="stats__value">
            <span>26</span>
          </div>
          <div class="stats__description">
            Marriage 
            Arranged
          </div>
        </div>
        <div class="stats__item">
          <div className='iiiiiiiiii'>
            <i class="ri-home-4-fill"></i>
          </div>
          <div class="stats__value">
            <span>4</span>
          </div>
          <div class="stats__description">
            Events 
            Completed
          </div>
        </div>
        <div class="stats__item">
          <div className='iiiiiiiiii'>
            <i class="ri-chat-smile-ai-fill"></i>
          </div>
          <div class="stats__value">
            <span>4</span>
          </div>
          <div class="stats__description">
            Happy 
            Customers
          </div>
        </div>
      </div>
    </div>
  );
}
