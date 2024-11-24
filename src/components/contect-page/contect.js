// ContactPage.js
import React, { useState } from "react";
import './contect.css';

const ContactPage = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('Thank you for contacting us!');
  };

  return (
    <div className="contact-page">
      <section className="contact__section">
        <h1 className="contact__title">Contact Us</h1>
        <form onSubmit={handleSubmit} className="contact__form">
          <input type="text" className="contact__input" placeholder="Your Name" required />
          <input type="email" className="contact__input" placeholder="Your Email" required />
          <textarea className="contact__textarea" placeholder="Your Message" required></textarea>
          <button type="submit" className="contact__button">Send Message</button>
        </form>
        {message && <p className="contact__response">{message}</p>}
      </section>
    </div>
  );
};

export default ContactPage;
