import axios from 'axios';
import React, { Component, Fragment } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import AppURL from '../../api/AppURL';
import cogoToast from 'cogo-toast';
import { Navigate } from 'react-router';

class Favourite extends Component {
  constructor(){
    super();
    this.state={
      ProductData:[],
      isLoading:"",
      mainDiv:'d-none',
    }
  }  
  componentDidMount(){
    axios.get(AppURL.FavouriteList(this.props.User.email)).then(response => {
        this.setState({ProductData:response.data,isLoading:"d-none",mainDiv:""})
    }).catch(error => {

    });
  }


  removeItem = (e) => { 
    let product_code = e.target.getAttribute('data-code');
    let email = this.props.User.email;

    axios.get(AppURL.FavouriteRemove(product_code, email)).then(response => {
        cogoToast.success("Product deleted successfully", {position: 'top-right'})
        window.location.reload();
      }).catch(error => {
      cogoToast.error("Product could not deleted, try again", {position: 'top-right'})
    })
  }


  render() {

    if(!localStorage.getItem('token')){
      return <Navigate to="/login" />
    }

    const FavList = this.state.ProductData;
    const MyView = FavList.map((ProductList,i)=>{
        return <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
        <Card className='card image-box w-100'>
        <img className='center w-75' src={ProductList.image} alt='camera-pic'/>
        <Card.Body>
            <p className='product-name-on-card'>
            {ProductList.product_name}
            </p>
            <Button data-code={ProductList.product_code} onClick={this.removeItem} className='btn btn-sm btn-dark'>
              <i className='fa fa-trash-alt'></i> Remove
            </Button>
        </Card.Body>
        </Card>
        </Col>

    })

    return (
        <Fragment>
        <Container className='text-center' fluid={true}>
        <div className="section-title text-center mb-55">
        <h2>My Favourite</h2>
        <p className='section-sub-title'>Some Of Our Exclusive Collection You Liked</p>
        </div>
        <Row>
          {MyView}
        </Row>
        </Container>
        </Fragment>
    )
  }
}

export default Favourite
