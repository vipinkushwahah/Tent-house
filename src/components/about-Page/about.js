// AboutPage.js
import React from "react";
import './about.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <section className="about__section">
        <div className="about__image">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOK6QbR8KpbTKI9Nf8Py2Piq81b9KoMEZ7lQ&s" alt="Construction Team" className="about__image-img" />
        </div>
        <div className="about__content">
          <h1 className="about__title">About Us</h1>
          <p className="about__text">
            We are a team of experienced professionals, dedicated to delivering
            quality construction projects on time and within budget. Our approach
            combines innovation with expertise to provide the best results for our clients.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
