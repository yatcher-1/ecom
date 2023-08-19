import React, { Component, Fragment } from 'react'
import { Container } from 'react-bootstrap'
import { Navigate } from 'react-router';

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
        <h1>User Profile</h1>
        <ul className='list-group'>
        <li className='list-group-item'>Name: {name}</li>
        <li className='list-group-item'>Email: {email}</li>
        </ul>
        </Container>
      </Fragment>
    )
  }
}

export default Profile
