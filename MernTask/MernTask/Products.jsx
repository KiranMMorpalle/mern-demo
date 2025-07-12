// src/MernTask/ProductCategories.jsx
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const productData = [
  {
    title: 'Sports Shoes',
    discount: 'UNDER ₹2799 ₹899',
    image: '/shoes.jpg', // Make sure this image is in public/images/
  },
  {
    title: 'Ethnic Wear',
    discount: '50–80% OFF',
    image: '/makeup1.jpg',
  },
  {
    title: 'Casual Wear',
    discount: '40–80% OFF',
    image: '/shirts1.jpg',
  },
  {
    title: "Men's Activewear",
    discount: '30–70% OFF',
    image: '/watch1.jpg',
  },
  {
    title: "Women's Activewear",
    discount: '30–70% OFF',
    image: '/makeup1.jpg',
  },
  {
    title: 'Western Wear',
    discount: '40–80% OFF',
    image: '/watch1.jpg',
  },
  {
    title: 'Sportswear',
    discount: '30–80% OFF',
    image: '/shoes.jpg',
  },
  {
    title: 'Loungewear',
    discount: '30–60% OFF',
    image: '/shirts1.jpg',
  },
  {
    title: 'Innerwear',
    discount: 'UP TO 70% OFF',
    image: '/shirts1.jpg',
  },
  {
    title: 'Lingerie',
    discount: 'UP TO 70% OFF',
    image: '/shoes.jpg',
  },
  {
    title: 'Watches',
    discount: 'UP TO 80% OFF',
    image: '/watch1.jpg',
  },
  
  {
    title: 'Beauty & Makeup',
    discount: 'UP TO 60% OFF',
    image: '/makeup1.jpg',
  },
];

const Products = () => {
  return (
    <Container className="my-5">
      <Row>
        {productData.map((item, index) => (
          <Col key={index} xs={6} md={3} className="mb-4">
            <Card className="h-100 shadow-sm border-0">
              <Card.Img
                variant="top"
                src={item.image}
                style={{ height: '180px', objectFit: 'cover' }}
                alt={item.title}
              />
              <Card.Body className="text-center">
                <Card.Title style={{ fontSize: '1rem', fontWeight: 'bold' }}>
                  {item.title}
                </Card.Title>
                <Card.Text className="text-danger" style={{ fontSize: '0.9rem' }}>
                  {item.discount}
                </Card.Text>
                <Button variant="outline-danger" size="sm">
                  Shop Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
