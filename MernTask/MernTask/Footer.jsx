// src/MernTask/Footer.jsx
import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer className="bg-dark text-light pt-4 mt-5">
      <Container>
        <Row>
          {/* Brand Info */}
          <Col md={4} className="mb-3">
            <h5>MyntraShop</h5>
            <p>Your one-stop fashion destination. Explore top trends at the best prices.</p>
          </Col>

          {/* Pages */}
          <Col md={2} className="mb-3">
            <h6>Pages</h6>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-light text-decoration-none">Home</a></li>
              <li><a href="#products" className="text-light text-decoration-none">Products</a></li>
              <li><a href="#about" className="text-light text-decoration-none">About</a></li>
              <li><a href="#contact" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </Col>

          {/* Useful Links */}
          <Col md={2} className="mb-3">
            <h6>Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Order Status</a></li>
              <li><a href="#" className="text-light text-decoration-none">Shipping</a></li>
              <li><a href="#" className="text-light text-decoration-none">Returns</a></li>
              <li><a href="#" className="text-light text-decoration-none">FAQs</a></li>
            </ul>
          </Col>

          {/* Subscribe */}
          <Col md={4} className="mb-3">
            <h6>Subscribe to Newsletter</h6>
            <Form className="d-flex">
              <Form.Control
                type="email"
                placeholder="Enter your email"
                className="me-2"
              />
              <Button variant="outline-light">Subscribe</Button>
            </Form>
          </Col>
        </Row>

        <hr className="border-light" />
        <p className="text-center mb-0 pb-3">© {new Date().getFullYear()} MyntraShop. All rights reserved.</p>
      </Container>
    </footer>
  );
}
