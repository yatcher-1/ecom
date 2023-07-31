import React, { Component } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

class HomeSlider extends Component {
    
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
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        arrow: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
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
      <div>
        <Slider {...settings}>
          <div>
            <img className='slider-img' src='https://raw.githubusercontent.com/easylearningbd/react-ecommerce/c4da25bd5dc31260659a65d4cb5f0e85392b2a77/src/assets/images/slider1.jpg' alt='' />
          </div>
          <div>
            <img className='slider-img' src='https://raw.githubusercontent.com/easylearningbd/react-ecommerce/c4da25bd5dc31260659a65d4cb5f0e85392b2a77/src/assets/images/slider2.jpg' alt='' />
          </div>
          <div>
            <img className='slider-img' src='https://raw.githubusercontent.com/easylearningbd/react-ecommerce/c4da25bd5dc31260659a65d4cb5f0e85392b2a77/src/assets/images/slider3.jpg' alt='' />
          </div>
        </Slider>
      </div>
    )
  }
}

export default HomeSlider
