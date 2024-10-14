// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Headernav from './components/headernav';
import HomePage from './pages/homepage'
import AboutPage from './pages/aboutpage'
import ContactPage from './pages/contact';

function App() {
  return (
    <Router>
      <div>
        <Headernav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
