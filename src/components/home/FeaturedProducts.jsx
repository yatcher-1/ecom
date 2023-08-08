import axios from 'axios';
import React, { Component, Fragment } from 'react'
import { Card, Col, Row, Container  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AppURL from '../../api/AppURL';

class FeaturedProducts extends Component {
  
  constructor(){
    super();
    this.state={
      ProductData:[],
    }
  }  

  componentDidMount(){
    axios.get(AppURL.ProductListByRemark("Featured")).then(response => {
        this.setState({ProductData:response.data})
    }).catch(error => {

    });
  }

  render() {
    
    const FeaturedList = this.state.ProductData;
    const MyView = FeaturedList.map((FeaturedList,i)=>{
        if(FeaturedList.special_price==="na"){
          return <Col className="p-1" key={i.toString()} xl={2} lg={2} md={2} sm={4} xs={6}>
          <Link to="/productdetails">
          <Card className='card image-box'>
          <img className='center' src={FeaturedList.image} alt='camera-pic'/>
          <Card.Body>
              <p className='product-name-on-card'>
              {FeaturedList.title}
              </p>
              <p className='product-price-on-card'>
              Price: ${FeaturedList.price}
              </p>
          </Card.Body>
          </Card>
          </Link>
          </Col>
        }else{
          return <Col className="p-1" key={i.toString()} xl={2} lg={2} md={2} sm={4} xs={6}>
        <Link to="/productdetails">
        <Card className='card image-box'>
        <img className='center' src={FeaturedList.image} alt='camera-pic'/>
        <Card.Body>
            <p className='product-name-on-card'>
            {FeaturedList.title}
            </p>
            <p className='product-price-on-card'>
            Price: <strike className="text-secondary">${FeaturedList.price}</strike>  ${FeaturedList.special_price}
            </p>
        </Card.Body>
        </Card>
        </Link>
        </Col>
        }
        
        
        
    });

    return (
      <Fragment>
      <Container className='text-center' fluid={true}>
      <div className="section-title text-center mb-55">
      <h2>Featured Product</h2>
      <p className='section-sub-title'>Some Of Our Exclusive Collection</p>
      </div>
      <Row>
      {MyView}
      </Row>
      </Container>
      </Fragment>
    )
  }
}

export default FeaturedProducts
