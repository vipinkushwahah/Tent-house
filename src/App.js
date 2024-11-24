import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutPage from './components/about-Page/about';
import ServicesPage from './components/service-page/service';
import ContactPage from './components/contect-page/contect';
import HeaderMain from './components/header/Header-main';
import MainBody from './components/main-body/main';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Router>
      <HeaderMain /> {/* Display the header component */}
      <div>
        <Routes>
          {/* Define the routes for each page */}
          <Route path="/home" element={<MainBody />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* You can add a default route here as well */}
          <Route path="/" element={<HeaderMain />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
