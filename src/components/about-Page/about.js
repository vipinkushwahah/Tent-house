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
          Our Firm Known as <strong>SHRIDHAR Tent House</strong> was started in the year 1984 by three partners to provide shamiyanas
          & furniture on hire for weddings, conventions, functions, etc., in the early stages. Later, it expanded to provide
          a wide range of products like German Tent, Pagoda Tents, Air Conditioner on Hire, AC Tents, Super Structure/Mega hangers,
          Exhibition Octanorm Stalls, Platforms, etc., on hire for huge Exhibitions, conferences, tradeshows, conventions, etc.
        </div>
        <div className="about__services">
          We are a highly renowned service provider offering services for Exhibitions, Weddings, Conventions,
          Conferences, Launches, etc. Providing beautiful and well-decorated Pre-fabricated Waterproof Sheds,
          Platforms, Octanorm Stalls for Exhibitions. <strong>Shridhar Tent House</strong> has successfully attained market credibility
          and won the heart of clients. A judicious effort of our team of qualified and experienced professionals assists
          us in offering unmatched quality services at industry-leading prices to ensure maximum satisfaction to the
          customers. Our wonderful services are unique and liked by clients within and also outside Karnataka.
        </div>
        <div className="about__quality">
          While offering these services, our professionals analyze the budget and requirements of
          clients in order to meet their expectations. Spread over a vast plot area, our sophisticated
          warehouse is regularly checked to maintain quality standards and remain ahead of time. We
          have earned a large number of prominent clients in and around Bangalore, who have inspired us
          and appreciated our highly attractive Exhibition Stalls, Platforms, Waterproof Sheds, Furniture, and Pandals.
        </div>
        <div className="about__coverage">
          Tent House Supplier services for Exhibitions, Functions, Weddings, Events, Conferences, Tradeshows, Conventions,
          and Convention Centers in Bangalore, Karnataka.
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
                Exhibition Stalls for rent / for hire
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
      </section>

    </div>
  );
};

export default AboutPage;
