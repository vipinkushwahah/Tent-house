import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import "./contect.css";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        lastname: "",
        phone: "",
        email: "",
        message: "",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // EmailJS Integration
        emailjs
            .send(
                "service_6s5sicb", // Replace with your EmailJS service ID
                "template_7v1kd9h", // Replace with your EmailJS template ID
                formData,
                "RGfk7TIqeb7n_aoEj" // Replace with your EmailJS user ID
            )
            .then(
                (result) => {
                    console.log("Message sent:", result.text);
                    setIsSubmitted(true);
                },
                (error) => {
                    console.error("Error sending message:", error);
                }
            );
    };

    return (
      <div>
        <div className="contact-container">
            {isSubmitted ? (
                <div className="contact-thankyou">
                    Thank you for your message! I'll get back to you soon.
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="contact-title">Let's work together</div>
                    <div className="contact-title-paragraph">
                        As a Software Engineer, I build efficient, scalable applications using technologies like JavaScript and React.
                        I'm passionate about problem-solving and continuously improving software to meet user needs.
                    </div>
                    <div className="contact-title-paragraph-form">
                        <div className="form-group">
                            <label htmlFor="name" className="form-label">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="form-input"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name" className="form-label">Lastname:</label>
                            <input
                                type="text"
                                id="lastname"
                                name="lastname"
                                placeholder="Lastname"
                                value={formData.lastname}
                                onChange={handleChange}
                                required
                                className="form-input"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name" className="form-label">Phone:</label>
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                placeholder="Phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="form-input"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" className="form-label">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="form-input"
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="message" className="form-label">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="form-textarea"
                        ></textarea>
                    </div>

                    <button type="submit" className="form-button">
                        Send Message
                    </button>
                </form>
            )}
            <div class="contact-info-container">
                <div class="contact-info-item">
                    <div class="contact-info-icon">
                        <i class="ri-phone-fill"></i>
                    </div>
                    <div class="contact-info-details">
                        <div class="contact-info-title">Phone</div>
                        <div class="contact-info-value">(+91) 7420 8683 46</div>
                    </div>
                </div>

                <div class="contact-info-item">
                    <div class="contact-info-icon">
                        <i class="ri-mail-fill"></i>
                    </div>
                    <div class="contact-info-details">
                        <div class="contact-info-title">Email</div>
                        <div class="contact-info-value">vipinkuswahah@gmail.com</div>
                    </div>
                </div>

                <div class="contact-info-item">
                    <div class="contact-info-icon">
                        <i class="ri-map-pin-fill"></i>
                    </div>
                    <div class="contact-info-details">
                        <div class="contact-info-title">Address</div>
                        <div class="contact-info-value">Lucknow Uttar Pradesh</div>
                    </div>
                </div>
            </div>
        </div>
         <div className="contact-map">
         <iframe
           title="Google Maps Location"
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.0925541875913!2d80.934309!3d26.846693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd7e8a1d10cb%3A0x3f96df9e6908910b!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1696052435343!5m2!1sen!2sin"
           width="100%"
           height="350"
           style={{ border: 0 }}
           allowFullScreen=""
           loading="lazy"
           referrerPolicy="no-referrer-when-downgrade"
         ></iframe>
       </div>
       </div>
    );
};

export default Contact;
