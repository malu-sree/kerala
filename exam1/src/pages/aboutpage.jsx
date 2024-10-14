// 

import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import s from '../images/img1.jpg'
import { FaReact } from 'react-icons/fa';  
import { FcBookmark } from "react-icons/fc";;

function AboutPage() {
  return (
    <Container className="mt-5">
      <h1 className="text-center">About Us</h1>
      
      
      <Row className="mt-4">
        <Col md={6}>
          <p>
            Welcome to our static website! Our goal is to provide you with insightful information and resources on various topics. Whether you are here to learn, explore, or get inspired, we are committed to bringing you the best content.
          </p>
          <p>
            <FaReact size={30} color="#61dafb" /> This website is built using modern web technologies, like React, to demonstrate fast, responsive, and user-friendly applications.
          </p>
        </Col>
        
       
        <Col md={6} className="text-center">
          <Image
            src={s}
            alt="Placeholder"
            rounded
            fluid
          />
        </Col>
      </Row>

      <Row className="mt-5">
        <Col>
          <p className="text-center">
          <FcBookmark /> We believe in simplicity and elegance. Our mission is to make sure our users have a smooth experience while navigating through the website.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutPage;
