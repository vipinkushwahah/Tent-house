import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutPage from './components/about-Page/about';
import ServicesPage from './components/service-page/service';
import ContactPage from './components/contect-page/contect';
import HeaderMain from './components/header/Header-main';
import MainBody from './components/main-body/main';
import Footer from './components/footer/Footer';
import ImageGallery from './components/gellery/gellery';
import WhatWeDo from './components/whatwedo/whatwedo';
import QuotationForm from './components/QuotationForm/QuotationForm';

function App() {
  return (
    <Router>
      <HeaderMain /> {/* Display the header component */}
      <div>
        <Routes>
          {/* Define the routes for each page */}
          <Route path="/" element={<MainBody />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/whatwedo" element={<WhatWeDo />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/quotationform" element={<QuotationForm />} />
          <Route path="/gellery" element={<ImageGallery />} />
          {/* You can add a default route here as well */}
          {/* <Route path="/" element={<HeaderMain />} /> */}
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
