// ServicesPage.js
import React from "react";
import './service.css';

const ServicesPage = () => {
  return (
    <div className="services-page">
      <section className="services__section">
        <h1 className="services__title">Our Services</h1>
        <div className="services__list">
          <div className="service__card">
            <img src="https://www.sanaglobalprojects.com/wp-content/uploads/2022/01/gettyimages-812099500-612x612-1-1200x720.webp" alt="Service 1" className="service__image" />
            <h2 className="service__name">Residential Construction</h2>
            <p className="service__description">
              We specialize in residential projects, including custom homes and renovations.
            </p>
          </div>
          <div className="service__card">
            <img src="https://5.imimg.com/data5/HM/LW/MY-32304676/building-design-500x500.jpg" alt="Service 2" className="service__image" />
            <h2 className="service__name">Commercial Construction</h2>
            <p className="service__description">
              Our team handles commercial construction projects with a focus on efficiency and quality.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
