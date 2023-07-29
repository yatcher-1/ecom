import React, { Component, Fragment } from 'react'
import { Button, Card, Col, Row, Container  } from 'react-bootstrap';

class FeaturedProducts extends Component {
  render() {
    return (
      <Fragment>
      <Container className='text-center' fluid={true}>
      <div className="section-title text-center mb-55">
      <h2>Featured Product</h2>
      <p className='section-sub-title'>Some Of Our Exclusive Collection</p>
      </div>
      <Row>
        <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
        <Card className='card image-box'>
        <img className='center' src="https://rukminim2.flixcart.com/image/832/832/xif0q/lehenga-choli/l/x/d/free-full-sleeve-lehenga-lehenga-for-women-lehenga-choli-net-original-imaggcwfb3pjh2hf.jpeg?q=70" alt='camera-pic'/>
        <Card.Body>
            <p className='product-name-on-card'>
            Embroidered Semi Stitched Lehenga Choli  (Purple)
            </p>
            <p className='product-price-on-card'>
            Price: 30$
            </p>
        </Card.Body>
        </Card>
        </Col>
        <Col className="p-1" key={2} xl={2} lg={2} md={2} sm={4} xs={6}>
        <Card className='card image-box'>
        <img className='center' src="https://rukminim2.flixcart.com/image/832/832/xif0q/lehenga-choli/w/x/m/free-full-sleeve-lehenga-lehenga-for-women-lehenga-choli-net-original-imagphrhhxx2z4mt.jpeg?q=70" alt='camera-pic'/>
        <Card.Body>
            <p className='product-name-on-card'>
            Embroidered Semi Stitched Lehenga Choli  (Purple)
            </p>
            <p className='product-price-on-card'>
            Price: 30$
            </p>
        </Card.Body>
        </Card>
        </Col>
        <Col className="p-1" key={3} xl={2} lg={2} md={2} sm={4} xs={6}>
        <Card className='card image-box'>
        <img className='center' src="https://rukminim2.flixcart.com/image/832/832/xif0q/lehenga-choli/7/m/u/free-full-sleeve-lehenga-lehenga-for-women-lehenga-choli-net-original-imaggcw5vmf6eb6y.jpeg?q=70" alt='camera-pic'/>
        <Card.Body>
            <p className='product-name-on-card'>
            Embroidered Semi Stitched Lehenga Choli  (Purple)
            </p>
            <p className='product-price-on-card'>
            Price: 30$
            </p>
        </Card.Body>
        </Card>
        </Col>
        <Col className="p-1" key={4} xl={2} lg={2} md={2} sm={4} xs={6}>
        <Card className='card image-box'>
        <img className='center' src="https://rukminim2.flixcart.com/image/832/832/xif0q/lehenga-choli/b/k/f/free-full-sleeve-lehenga-lehenga-for-women-lehenga-choli-net-original-imaggcvr8nhqehzf.jpeg?q=70" alt='camera-pic'/>
        <Card.Body>
            <p className='product-name-on-card'>
            Embroidered Semi Stitched Lehenga Choli  (Purple)
            </p>
            <p className='product-price-on-card'>
            Price: 30$
            </p>
        </Card.Body>
        </Card>
        </Col>
        <Col className="p-1" key={5} xl={2} lg={2} md={2} sm={4} xs={6}>
        <Card className='card image-box'>
        <img className='center' src="https://rukminim2.flixcart.com/image/832/832/xif0q/lehenga-choli/8/y/t/free-full-sleeve-lehenga-lehenga-for-women-lehenga-choli-net-original-imaggcvfxfynyfjg.jpeg?q=70" alt='camera-pic'/>
        <Card.Body>
            <p className='product-name-on-card'>
            Embroidered Semi Stitched Lehenga Choli  (Purple)
            </p>
            <p className='product-price-on-card'>
            Price: 30$
            </p>
        </Card.Body>
        </Card>
        </Col>
        <Col className="p-1" key={6} xl={2} lg={2} md={2} sm={4} xs={6}>
        <Card className='card image-box'>
        <img className='center' src="https://rukminim2.flixcart.com/image/832/832/xif0q/lehenga-choli/3/t/f/free-full-sleeve-lehenga-lehenga-for-women-lehenga-choli-net-original-imagh2yh32qeshz9.jpeg?q=70" alt='camera-pic'/>
        <Card.Body>
            <p className='product-name-on-card'>
            Embroidered Semi Stitched Lehenga Choli  (Purple)
            </p>
            <p className='product-price-on-card'>
            Price: 30$
            </p>
        </Card.Body>
        </Card>
        </Col>
      </Row>
      </Container>
      </Fragment>
    )
  }
}

export default FeaturedProducts
