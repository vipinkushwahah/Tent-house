import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__about">
          <h2 className="footer__title">
            <span className="underline">Locate</span> Us
          </h2>
          <p className="footer__text">
            <strong>Address:- </strong>
            Maa_Bhawani_Tent_House, bhagalpur road, Nawalpur chauraha, Salempur,
            Deoria, Uttar Pradesh (274509)
          </p>
        </div>
        <div className="footer__contact">
          <h2 className="footer__title">
            <span className="underline">Contact</span> Us
          </h2>
          <p className="footer__text">
            <strong>Email:</strong> maabhawanitenthouse5@gmail.com
            <br />
            <strong>Phone:</strong> +778-392-5991
            <br />
            <strong>
              <Link
                to="/quotationform"
                // onClick={() => window.open("quotationform", "_blank")}
                style={{
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                QuotationForm
              </Link>
            </strong>
          </p>
        </div>
        <div>
          <h2 className="footer__title">
            <span className="underline">Follow</span> us
          </h2>
          <div className="social-links">
            <a href="https://www.instagram.com/vipinkushwaha39/" target="blank">
              <div className="social-link">
                <i className="ri-instagram-line"></i>
              </div>
            </a>
            <a href="https://in.linkedin.com/in/vipinkushwahah" target="blank">
              <div className="social-link">
                <i className="ri-linkedin-fill"></i>
              </div>
            </a>
            <a href="https://github.com/vipinkushwahah/" target="blank">
              <div className="social-link">
                <i className="ri-github-fill"></i>
              </div>
            </a>
            <div className="social-link">
              <i className="ri-whatsapp-fill"></i>
              <span className="tooltip">7420-8683-46</span>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        © 2024 My Tent_House Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
