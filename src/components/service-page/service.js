// ServicesPage.js
import { useState, useEffect } from 'react';
import React from "react";
import './service.css';
import tentthree from '../assates/tenttree.jpg'

const images = [
  'https://3.imimg.com/data3/HJ/EP/MY-13823372/wp-content-themes-tenthouse-and-catering-images-tent_house.jpg',
  tentthree,
  tentthree,
  'https://cdn0.weddingwire.in/vendor/7717/3_2/960/jpg/tent-house-kk-tenthouse-wedding-decor-3_15_357717-160759264410234.jpeg',
];

const ServicesPage = () => {
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
  const services = [
    {
      id: 1,
      name: "Kathas",
      description: "We Specialize In Spiritual Getherings and Katha Events.",
      image: tentthree
    },
    {
      id: 2,
      name: "Election Rally",
      description: "Our team handles Election Rally projects with a focus on efficiency and quality.",
      image: tentthree
    },
    {
      id: 3,
      name: "Exhibitions",
      description: "Our team handles Exhibitions projects with a focus on efficiency and quality.",
      image: tentthree
    },
    {
      id: 4,
      name: "Conferences",
      description: "Our team handles Conferences projects with a focus on efficiency and quality.",
      image: tentthree
    },
    {
      id: 5,
      name: "Events",
      description: "Our team handles Events projects with a focus on efficiency and quality.",
      image: tentthree
    },
    {
      id: 6,
      name: "Convention Center",
      description: "Our team handles Convention Center projects with a focus on efficiency and quality.",
      image: tentthree
    }
  ];
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

  return (
    <div className="services-page">
      <div>
        <img
          className="main_image"
          src={tentthree}
          alt="main"
        />
      </div>
      <section className="services__section">
        <h1 className="services__title">Our Services</h1>
        <div className="services__titletext">
          Maa Bhawani Tent House was started in 2012 and has been in the business for more than 10 years
          in Uttar-Pradesh. The company provides shamiyanas, German tents, aluminium hanger tents, pagoda tents, AC tents,
          canopies, wooden stages, super structures, mega hangers, exhibition stalls, Octanorm stalls for rent in Uttar-Pradesh for
          weddings, conventions, functions, tradeshows, conventions in and around Uttar-Pradesh.
          Tent House Supplier services provided by Maa Bhawani Tent House in Uttar-Pradesh.
          We provide the following Tent House supplier services for Functions, Exhibitions, Tradeshows, Conferences,
          Events, Conventions, Convention Centers, Weddings, Engagement Functions, Felicitation Functions, Political Functions, Industrial Events, Corporate Functions, and more.
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
        <div className="services__list">
          {Array.from({ length: 6 }).map((_, index) => (
            <div className="service__card" key={index}>
              <img
                src={services[index % services.length].image}
                alt={services[index % services.length].name}
                className="service__image"
              />
              <h2 className="service__name">{services[index % services.length].name}</h2>
              <p className="service__description">{services[index % services.length].description}</p>
            </div>
          ))}
        </div>
      </section>
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
      <div className='text_subhaeding'>
        Contact us for all your Tent House supplier services requirements.
        We have more than 50+ products that we can supply through tent house services
        for rent / for hire in Uttar-Pradesh and India.
      </div>
    </div>
  );
};

export default ServicesPage;
