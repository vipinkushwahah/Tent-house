import React from "react";
import "./main.css";

const MainBody = () => {
  return (
    <div>
      <main className="main-content">
        <section className="hero">
          <div className="hero__content">
            <h1 className="hero__title">Building Your Dreams</h1>
            <p className="hero__subtitle">
              Delivering excellence in construction with innovation and quality.
            </p>
            <a href="#projects" className="hero__button">
              Explore Projects
            </a>
          </div>
          <div className="hero__image">
             <img
               className="hero__image-Construction"
               src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
               alt="Construction Site"
             />
          </div>
        </section>

        <section className="services" id="services">
          <h2 className="section-title">Our Services</h2>
          <div className="services__list">
            <div className="service">
              <img
                src="https://19948058.fs1.hubspotusercontent-na1.net/hubfs/19948058/An%20image%20depicting%20workers%20constructing%20a%20building.jpg"
                alt="Architecture"
              />
              <h3>Architectural Design</h3>
              <p>Creating innovative and functional spaces for your needs.</p>
            </div>
            <div className="service">
              <img
                src="https://civilideas374921463.wordpress.com/wp-content/uploads/2021/09/3faf92b0ec8e7803f92e24068d04734e.jpg?w=1200"
                alt="Engineering"
              />
              <h3>Structural Engineering</h3>
              <p>Ensuring durability and strength in every project.</p>
            </div>
            <div className="service">
              <img
                src="https://www.constructionplacements.com/wp-content/uploads/2023/10/A-Comprehensive-Guide-to-Civil-Engineering-and-Interior-Design.jpg"
                alt="Interior Design"
              />
              <h3>Interior Design</h3>
              <p>Transforming spaces into modern, aesthetic environments.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MainBody;
