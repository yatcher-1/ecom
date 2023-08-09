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
    
      const SliderData = this.props.data;
      const MyView = SliderData.map((SliderList, i)=>{
        return  <div key={i.toString()}>
        <img className='slider-img' src={SliderList.slider_image} alt='' />
      </div>
      })

    return (
      <div>
        <Slider {...settings}>
          {MyView}
        </Slider>
      </div>
    )
  }
}

export default HomeSlider
