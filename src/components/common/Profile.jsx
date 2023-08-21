import React, { Component, Fragment } from 'react'
import { Card, Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import { Navigate } from 'react-router';
import { Link } from 'react-router-dom';

export class Profile extends Component {
  render() {
    let name;
    let email;
    if(this.props.user){
      name = this.props.user.name; 
      email = this.props.user.email; 
    }

    if(!localStorage.getItem('token')){
      return <Navigate to="/login" />
    }
    
    return (
      <Fragment>
        <Container className='text-center'>
        <div className="section-title text-center mb-55">
        <h2>User Profile</h2>
      </div>
      <Container>
        <Row>
          <Col lg={4} md={4} sm={12}>
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://rukminim2.flixcart.com/fk-p-flap/128/128/image/0d75b34f7d8fbcb3.png?q=100" className='user-profile' />
      <ListGroup className="list-group-flush">
      <ListGroupItem>
      <Link to="/orderlist" className='text-link'>
        <p className='product-name-on-card'>Order List</p>
      </Link>
        </ListGroupItem>
      <ListGroupItem>
      <Link to="/orderlist" className='text-link'>
        <p className='product-name-on-card'>Order List</p>
      </Link>
        </ListGroupItem>
      <ListGroupItem>
      <Link to="/orderlist" className='text-link'>
        <p className='product-name-on-card'>Order List</p>
      </Link>
        </ListGroupItem>
      </ListGroup>
    </Card>
          </Col>
          <Col lg={8} md={8} sm={12}>
          <ul className='list-group'>
        <li className='list-group-item'>Name: {name}</li>
        <li className='list-group-item'>Email: {email}</li>
        </ul>
          </Col>
        </Row>
      </Container>
        </Container>
      </Fragment>
    )
  }
}

export default Profile
