import React, { Component, Fragment } from 'react'
import { Card, Container, Row } from 'react-bootstrap'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

class NewArrival extends Component {

  constructor(props){
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next(){
    this.slider.slickNext();
  }
  previous(){
    this.slider.slickPrev();
  }

  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      arrow: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <Fragment>
        <Container className='text-center' fluid={true}>
        <div className="section-title text-center mb-55">
        <h2>

          <a className='btn btn-sm ml-2 site-btn' onClick={this.previous}><i className='fa fa-angle-left'></i></a>
          &nbsp; New Arrival &nbsp;
          <a className='btn btn-sm ml-2 site-btn' onClick={this.next}><i className='fa fa-angle-right'></i></a>

        </h2>
        <p className='section-sub-title'>Some Of Our Exclusive Collection</p>
        </div>
          
        <Row>
        <Slider ref={c=>(this.slider=c)} {...settings}>
          <div>
          <Card className='card image-box w-100'>
          <img className='center w-75' src="https://rukminim2.flixcart.com/image/832/832/xif0q/lehenga-choli/l/x/d/free-full-sleeve-lehenga-lehenga-for-women-lehenga-choli-net-original-imaggcwfb3pjh2hf.jpeg?q=70" alt='camera-pic'/>
          <Card.Body>
            <p className='product-name-on-card'>
            Embroidered Semi Stitched Lehenga Choli  (Purple)
            </p>
          </Card.Body>
          </Card>
          </div>
          <div>
            <Card className='card image-box w-100'>
          <img className='center w-75' src="https://rukminim2.flixcart.com/image/832/832/xif0q/lehenga-choli/l/x/d/free-full-sleeve-lehenga-lehenga-for-women-lehenga-choli-net-original-imaggcwfb3pjh2hf.jpeg?q=70" alt='camera-pic'/>
          <Card.Body>
            <p className='product-name-on-card'>
            Embroidered Semi Stitched Lehenga Choli  (Purple)
            </p>
          </Card.Body>
          </Card>
          </div>
          <div>
            <Card className='card image-box w-100'>
          <img className='center w-75' src="https://rukminim2.flixcart.com/image/832/832/xif0q/lehenga-choli/l/x/d/free-full-sleeve-lehenga-lehenga-for-women-lehenga-choli-net-original-imaggcwfb3pjh2hf.jpeg?q=70" alt='camera-pic'/>
          <Card.Body>
            <p className='product-name-on-card'>
            Embroidered Semi Stitched Lehenga Choli  (Purple)
            </p>
          </Card.Body>
          </Card>
          </div>
          <div>
            <Card className='card image-box w-100'>
          <img className='center w-75' src="https://rukminim2.flixcart.com/image/832/832/xif0q/lehenga-choli/l/x/d/free-full-sleeve-lehenga-lehenga-for-women-lehenga-choli-net-original-imaggcwfb3pjh2hf.jpeg?q=70" alt='camera-pic'/>
          <Card.Body>
            <p className='product-name-on-card'>
            Embroidered Semi Stitched Lehenga Choli  (Purple)
            </p>
          </Card.Body>
          </Card>
          </div>
          <div>
            <Card className='card image-box w-100'>
          <img className='center w-75' src="https://rukminim2.flixcart.com/image/832/832/xif0q/lehenga-choli/l/x/d/free-full-sleeve-lehenga-lehenga-for-women-lehenga-choli-net-original-imaggcwfb3pjh2hf.jpeg?q=70" alt='camera-pic'/>
          <Card.Body>
            <p className='product-name-on-card'>
            Embroidered Semi Stitched Lehenga Choli  (Purple)
            </p>
          </Card.Body>
          </Card>
          </div>
          <div>
            <Card className='card image-box w-100'>
          <img className='center w-75' src="https://rukminim2.flixcart.com/image/832/832/xif0q/lehenga-choli/l/x/d/free-full-sleeve-lehenga-lehenga-for-women-lehenga-choli-net-original-imaggcwfb3pjh2hf.jpeg?q=70" alt='camera-pic'/>
          <Card.Body>
            <p className='product-name-on-card'>
            Embroidered Semi Stitched Lehenga Choli  (Purple)
            </p>
          </Card.Body>
          </Card>
          </div>
          <div>
            <Card className='card image-box w-100'>
          <img className='center w-75' src="https://rukminim2.flixcart.com/image/832/832/xif0q/lehenga-choli/l/x/d/free-full-sleeve-lehenga-lehenga-for-women-lehenga-choli-net-original-imaggcwfb3pjh2hf.jpeg?q=70" alt='camera-pic'/>
          <Card.Body>
            <p className='product-name-on-card'>
            Embroidered Semi Stitched Lehenga Choli  (Purple)
            </p>
          </Card.Body>
          </Card>
          </div>
          <div>
            <Card className='card image-box w-100'>
          <img className='center w-75' src="https://rukminim2.flixcart.com/image/832/832/xif0q/lehenga-choli/l/x/d/free-full-sleeve-lehenga-lehenga-for-women-lehenga-choli-net-original-imaggcwfb3pjh2hf.jpeg?q=70" alt='camera-pic'/>
          <Card.Body>
            <p className='product-name-on-card'>
            Embroidered Semi Stitched Lehenga Choli  (Purple)
            </p>
          </Card.Body>
          </Card>
          </div>
        </Slider>
        </Row>
      </Container>
      </Fragment>
    );
      
  }
}

export default NewArrival
