// AboutPage.js
import React from "react";
import './about.css';
import tentthree from '../assates/tenttree.jpg'

const AboutPage = () => {
  return (
    <div className="about-page">
      <div>
        <img
          className="main_image"
          src={tentthree}
          alt="main"
        />
      </div>
      <section className="about__section">
        <div className="about__title">WHO WE ARE</div>
        <div className="about__description">
          Our Firm Known as <strong>MAA BHAWANI Tent House</strong> was started in the year 2012 to provide shamiyanas
          & furniture on hire for weddings, conventions, functions etc. in the early stages. Later, it expanded to provide
          a wide range of products like German Tent, Pagoda Tents, Air Conditioner on Hire, AC Tents, Super Structure/Mega hangers,
          Exhibition Octanorm Stalls, Platforms, etc. on hire for huge Exhibitions, conferences, tradeshows, conventions, etc.
        </div>
        <div className="about__services">
          We are a highly renowned service provider offering services for Exhibitions, Weddings, Conventions,
          Conferences, Launches, etc. Providing beautiful and well-decorated Pre-fabricated Waterproof Sheds,
          Platforms, Octanorm Stalls for Exhibitions. <strong>MAA BHAWANI Tent House</strong> has successfully attained market credibility
          and won the heart of clients. A judicious effort of our team of qualified and experienced professionals assists
          us in offering unmatched quality services at industry-leading prices to ensure maximum satisfaction to the
          customers. Our wonderful services are unique and liked by clients within and also outside Uttar-Pradesh.
        </div>
        <div className="about__quality">
          While offering these services, our professionals analyze the budget and requirements of
          clients in order to meet their expectations. Spread over a vast plot area, our sophisticated
          warehouse is regularly checked to maintain quality standards and remain ahead of time. We
          have earned a large number of prominent clients in and around Bangalore, who have inspired us
          and appreciated our highly attractive Exhibition Stalls, Platforms, Waterproof Sheds, Furniture, and Pandals.
        </div>
        <div className="about__coverage">
          Tent House Supplier services for Kathas, Rally, Exhibitions, Functions, Events, Conferences, Tradeshows, Conventions,
          and Convention Centers in uttar-Pradesh.
        </div>
        <div className="about__spacers">
          <div className="about__spacer">
            <ul className="dot-list">
              <li className="dot-list-item">
                German Hanger for Rent
              </li>
              <li className="dot-list-item">
                Pagoda for Rent
              </li>
              <li className="dot-list-item">
                Stage for rent
              </li>
              <li className="dot-list-item">
                Safe-House for rent
              </li>
              <li className="dot-list-item">
                Barricading for rent
              </li>
              <li className="dot-list-item">
                Aluminium Tents for rent
              </li>
              <li className="dot-list-item">
                Octanorm Exhibition Stalls for rent
              </li>
            </ul>
          </div>
          <div className="about__spacer">
            <ul className="dot-list">
              <li className="dot-list-item">
                Exhibition Stalls for rent
              </li>
              <li className="dot-list-item">
                Pandals for rent
              </li>
              <li className="dot-list-item">
                Podium for rent
              </li>
              <li className="dot-list-item">
                VIP Sofas for rent
              </li>
              <li className="dot-list-item">
                VIP Chairs for rent
              </li>
              <li className="dot-list-item">
                Waterproof Sheds for rent
              </li>
              <li className="dot-list-item">
                And More
              </li>
            </ul>
          </div>
          <div className="about__spacer">
            <ul className="dot-list">
              <li className="dot-list-item">
                Sound Systems for rent
              </li>
              <li className="dot-list-item">
                Night King Dj Events for rent
              </li>
              <li className="dot-list-item">
                LED wall for rent
              </li>
              <li className="dot-list-item">
                Air Cooler for rent
              </li>
              <li className="dot-list-item">
                AC Tents for rent
              </li>
              <li className="dot-list-item">
                Wooden Stages for rent
              </li>
              <li className="dot-list-item">
                Furtniture for rent
              </li>
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
