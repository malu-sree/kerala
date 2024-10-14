

import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import '../home.css';
import { FaPhoneAlt } from 'react-icons/fa';

function HomePage() {
  return (
    <Container className="text-center mt-5">
      <h1>Welcome to Our Website</h1>
      <p>We are excited to have you here! Explore our content and services.</p>
      <p>
        Our website provides all the latest insights on what you need.
        You can learn more about us, our work, and the solutions we offer.
      </p>
      
  
      <Link to="/contact">
        <Button variant="primary">
        <FaPhoneAlt style={{ marginRight: '5px' }} />
            Contact Us</Button>
      </Link>
    </Container>
  );
}

export default HomePage;
