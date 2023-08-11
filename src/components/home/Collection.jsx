import axios from 'axios';
import React, { Component, Fragment } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import AppURL from '../../api/AppURL';
import CollectionLoadng from '../PlaceHolder/CollectionLoadng';
import { Link } from 'react-router-dom';

class Collection extends Component {
  
  constructor(){
    super();
    this.state={
      ProductData:[],
      isLoading:"",
      mainDiv:'d-none',
    }
  }  

  componentDidMount(){
    axios.get(AppURL.ProductListByRemark("Collection")).then(response => {
        this.setState({ProductData:response.data,isLoading:"d-none",mainDiv:""})
    }).catch(error => {

    });
  }

  render() {
    const CollectionList = this.state.ProductData;
    const MyView = CollectionList.map((CollectionList,i)=>{
        if(CollectionList.special_price==="na"){
          return <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
          <Link className="text-link"  to={"/productdetails/"+CollectionList.id}>
          <Card className='card image-box w-100'>
          <img className='center w-75' src={CollectionList.image} alt='camera-pic'/>
          <Card.Body>
              <p className='product-name-on-card'>
              {CollectionList.title}
              </p>
              <p className='product-price-on-card'>
            Price: <strike className="text-secondary">${CollectionList.price}</strike>  ${CollectionList.special_price}
            </p>
          </Card.Body>
          </Card>
          </Link>
          </Col>
        }else{
          return <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
          <Link className="text-link"  to={"/productdetails/"+CollectionList.id}>
          <Card className='card image-box w-100'>
          <img className='center w-75' src={CollectionList.image} alt='camera-pic'/>
          <Card.Body>
              <p className='product-name-on-card'>
              {CollectionList.title}
              </p>
              <p className='product-price-on-card'>
            Price: <strike className="text-secondary">${CollectionList.price}</strike>  ${CollectionList.special_price}
            </p>
          </Card.Body>
          </Card>
          </Link>
          </Col>
        }
    });
    return (
      <Fragment>
              <CollectionLoadng isLoading={this.state.isLoading}/>
              <div className={this.state.mainDiv}>
      <Container className='text-center' fluid={true}>
      <div className="section-title text-center mb-55">
      <h2>Collection</h2>
      <p className='section-sub-title'>Some Of Our Exclusive Collection</p>
      </div>
      <Row>
        {MyView}
      </Row>
      </Container>
      </div>  
      </Fragment>
    )
  }
}

export default Collection
