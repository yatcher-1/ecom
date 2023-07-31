import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Apple from "../../assets/images/apple.png"
import Google from "../../assets/images/google.png"

class FooterDesktop extends Component {
  render() {
    return (
      <Fragment>
      <div className='footerback shadow-sm m-0 mt-5 pt-3'>
        <Container>
          <Row className='px-0 my-5'>
            <Col className='p-2' lg={3} md={3} sm={6} xs={12}>
              <h5 className='footer-menu-title'>Office Address</h5>
              <p className=''>1644, Franklin soc near basil ark <br></br>
              Email: xyz@test.com
              </p>
              <h5 className='footer-menu-title'>Social Link</h5>
              <a href='/'><i className='fab m-1 h4 fa-facebook'></i></a>
              <a href='/'><i className='fab m-1 h4 fa-twitter'></i></a>
              <a href='/'><i className='fab m-1 h4 fa-instagram'></i></a>
            </Col>
            <Col className='p-2' lg={3} md={3} sm={6} xs={12}>
            <h5 className='footer-menu-title'>The Company</h5>
            <Link to="/" className='footer-link'>About Us</Link><br></br>
            <Link to="/" className='footer-link'>Company Profile</Link><br></br>
            <Link to="/" className='footer-link'>Contact Us</Link><br></br>
            </Col>
            <Col className='p-2' lg={3} md={3} sm={6} xs={12}>
            <h5 className='footer-menu-title'>More Info</h5>
            <Link to="/" className='footer-link'>How to purchase!</Link><br></br>
            <Link to="/" className='footer-link'>Privacy Policy</Link><br></br>
            <Link to="/" className='footer-link'>Refund Policy</Link><br></br>
            </Col>
            <Col className='p-2' lg={3} md={3} sm={6} xs={12}>
            <h5 className='footer-menu-title'>Download App</h5>
            <a href='/'><img src={Google} alt='' /></a>
            <a href='/'><img className='mt-2' src={Apple} alt='' /></a>
            </Col>
          </Row>
        </Container>
        <Container fluid={"true"} className='text-center m-0 pt-3 pb-1 bg-dark'>
          <Container>
            <Row>
              <h6 className='text-white'>© Easy Ecom 2023, All Rights Reserved</h6>
            </Row>
          </Container>
        </Container>
        </div>
      </Fragment>
    )
  }
}

export default FooterDesktop
