// src/MernTask/AccordionExample.jsx
import React from 'react';
import { Accordion, Container } from 'react-bootstrap';

const AccordionExample = () => {
  return (
    <Container className="my-5">
      <h4 className="mb-4 text-center">🛍️ Frequently Asked Questions</h4>
      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>How can I track my order?</Accordion.Header>
          <Accordion.Body>
            After placing your order, you will receive an email with the tracking number. You can use this number on our Order Tracking page to see the delivery status.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>What is the return policy?</Accordion.Header>
          <Accordion.Body>
            We offer a 7-day easy return policy. If you're not satisfied, return the product in original packaging within 7 days for a full refund or exchange.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Do you offer free shipping?</Accordion.Header>
          <Accordion.Body>
            Yes, we offer free shipping on all orders above ₹999. For orders below this amount, a minimal delivery fee of ₹49 is charged.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default AccordionExample;
