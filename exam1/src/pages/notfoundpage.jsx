

import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
//import './NotFoundPage.css'; 
function NotFoundPage() {
  return (
    <Container className="text-center mt-5 not-found-container">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/">
        <Button variant="primary">
          <FaHome style={{ marginRight: '5px' }} />
          Go to Home
        </Button>
      </Link>
    </Container>
  );
}

export default NotFoundPage;
