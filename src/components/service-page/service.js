// ServicesPage.js
import { useState, useEffect } from 'react';
import React from "react";
import './service.css';
import tentthree from '../assates/tenttree.jpg'

const images = [
  'https://3.imimg.com/data3/HJ/EP/MY-13823372/wp-content-themes-tenthouse-and-catering-images-tent_house.jpg',
  'https://static.wixstatic.com/media/00daf2_f895706199f5400e8f8c69ae0616257a~mv2.jpg/v1/fill/w_640,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/00daf2_f895706199f5400e8f8c69ae0616257a~mv2.jpg',
  'https://content.jdmagicbox.com/v2/comp/hyderabad/q5/040pxx40.xx40.110727085053.b7q5/catalogue/shaik-tabrez-tent-house-and-catering-services-malakpet-hyderabad-tent-house-tc5fap2btc.jpg',
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
      name: "Residential Construction",
      description: "We specialize in residential projects, including custom homes and renovations.",
      image: "https://www.sanaglobalprojects.com/wp-content/uploads/2022/01/gettyimages-812099500-612x612-1-1200x720.webp"
    },
    {
      id: 2,
      name: "Commercial Construction",
      description: "Our team handles commercial construction projects with a focus on efficiency and quality.",
      image: "https://5.imimg.com/data5/HM/LW/MY-32304676/building-design-500x500.jpg"
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
          Shridhar Tent House was started in 1984 by three partners and has been in the business for more than 36 years
          in Bangalore. The company provides shamiyanas, German tents, aluminium hanger tents, pagoda tents, AC tents,
          canopies, wooden stages, super structures, mega hangers, exhibition stalls, Octanorm stalls for rent in Bangalore for
          weddings, conventions, functions, tradeshows, conventions in and around Bangalore, Karnataka.
          Tent House Supplier services provided by Shridhar Tent House in Bangalore.
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
          {Array.from({ length: 8 }).map((_, index) => (
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
        We have more than 75+ products that we can supply through tent house services
        for rent / for hire in Bangalore and across Karnataka and India.
      </div>
    </div>
  );
};

export default ServicesPage;
