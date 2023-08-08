import React, { Component, Fragment } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import AppURL from '../../api/AppURL';
import { Link } from 'react-router-dom';

class NewArrival extends Component {

  constructor(props){
    super(props);
    this.state = {
      ProductData : []
    }
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next(){
    this.slider.slickNext();
  }
  previous(){
    this.slider.slickPrev();
  }
  
  componentDidMount(){
    axios.get(AppURL.ProductListByRemark("New")).then(response => {
        this.setState({ProductData:response.data})
    }).catch(error => {

    });
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

    const NewList = this.state.ProductData;
    const MyView = NewList.map((NewList,i)=>{
        if(NewList.special_price==="na"){
          return <div>
          <Card className='card image-box w-100'>
          <img className='center w-75' src={NewList.image} alt='camera-pic'/>
          <Card.Body>
            <p className='product-name-on-card'>
            {NewList.title}
            </p>
            <p className='product-price-on-card'>
            Price: <strike className="text-secondary">${NewList.price}</strike>  ${NewList.special_price}
            </p>
          </Card.Body>
          </Card>
          </div>
        }else{
          return <div>
          <Card className='card image-box w-100'>
          <img className='center w-75' src={NewList.image} alt='camera-pic'/>
          <Card.Body>
            <p className='product-name-on-card'>
            {NewList.title}
            </p>
            <p className='product-price-on-card'>
            Price: <strike className="text-secondary">${NewList.price}</strike>  ${NewList.special_price}
            </p>
          </Card.Body>
          </Card>
          </div>
        }
        
        
        
    });
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
        {MyView}  
        </Slider>
        </Row>
      </Container>
      </Fragment>
    );
      
  }
}

export default NewArrival
