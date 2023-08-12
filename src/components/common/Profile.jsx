import React, { Component, Fragment } from 'react'
import { Container } from 'react-bootstrap'

export class Profile extends Component {
  render() {
    return (
      <Fragment>
        <Container className='text-center'>
        <h1>User Profile</h1>
        <ul className='list-group'>
        <li className='list-group-item'>Name: Name</li>
        <li className='list-group-item'>Eail: Email</li>
        </ul>
        </Container>
      </Fragment>
    )
  }
}

export default Profile
