// src/App.jsx
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Headernav from './components/headernav'; // Ensure the path is correct
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer';

const HomePage = lazy(() => import('./pages/homepage'));
const AboutPage = lazy(() => import('./pages/aboutpage'));
const ContactPage = lazy(() => import('./pages/contact'));
const NotFoundPage = lazy(() => import('./pages/notfoundpage'));

function App() {
  return (
    <Router>
      <Headernav />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} /> {/* 404 page */}
        </Routes>
      </Suspense>
      {/* <Footer/> */}
    </Router>
  );
}

export default App;
