import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap'
import { useParams, useState, useEffect } from 'react-router-dom'
import Rating from '../components/Rating'
import products from '../products'
function ProductScreen() {
    const params = useParams();
    const product = products.find((p) => p._id == params.id)
    
  return (
    <div>
        <Link to='/' className='btn btn-light my-3'>Go Back</Link>
        <Row>
            <Col md={6}>
                <Image src={product.image} alt={product.name} fluid />
            </Col>
            <Col md={3}>
                <ListGroup variant="flush">
                <ListGroup.Item>
                    <h3>{product.name}</h3>
                    </ListGroup.Item>
                <ListGroup.Item>
                    <Rating value={product.rating} text={`${product.numReviews}`} color={'f8e825'} />
                </ListGroup.Item>
                <ListGroup.Item>
                    Price ${product.price}
                </ListGroup.Item>
                <ListGroup.Item>
                    Description: {product.description}
                </ListGroup.Item>
                </ListGroup>
            </Col>
            <Col md={3}>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                    <Row>
                        <Col>Price: </Col>
                        <Col>
                        <strong>${product.price}</strong>
                        </Col>
                    </Row>
                    </ListGroup.Item>

                    <ListGroup.Item>
                    <Row>
                        <Col>Status: </Col>
                        <Col>
                        {product.countInStock} {product.countInStock ? 'in stock' : ', out of stock'}
                        </Col>
                    </Row>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <Button className="btn-block" type='button'>Add to Cart</Button>
                    </ListGroup.Item>
                </ListGroup>
            </Col>
        </Row>
    </div>
  )
}

export default ProductScreen