import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Apple from "../../assets/images/apple.png"
import Google from "../../assets/images/google.png"
import ReactHtmlParser from 'react-html-parser'
import axios from 'axios'
import AppURL from '../../api/AppURL'

class FooterDesktop extends Component {
  constructor(){
    super();
    this.state={
      address:"",
      android_app_link:"",
      ios_app_link:"",
      facebook_link:"",
      twitter_link:"",
      instagram_link:"",
      copyright_text:"",
      loaderDiv:"",
      mainDiv:'d-none'
    }
  }  

  componentDidMount(){
    axios.get(AppURL.AllSiteInfo).then(response => {
      let StatusCode = response.status;

      if(StatusCode === 200){
        let JsonData = (response.data)[0];
        this.setState({
          address:JsonData['address'],
          android_app_link:JsonData['ios_app_link'],
          google_app_link:JsonData['google_app_link'],
          facebook_link:JsonData['facebook_link'],
          twitter_link:JsonData['twitter_link'],
          instagram_link:JsonData['instagram_link'],
          copyright_text:JsonData['copyright_text'],
          loaderDiv:'d-none',
          mainDiv:""});
      }
    }).catch(error => {

    });
  }
  render() {
    return (
      <Fragment>
      <div className='footerback shadow-sm m-0 mt-5 pt-3'>
        <Container>
          <Row className='px-0 my-5'>
            <Col className='p-2' lg={3} md={3} sm={6} xs={12}>
            <div className={this.state.loaderDiv}>
                <div class="ph-item">
                  <div class="ph-col-12">
                      <div class="ph-row">
                          <div class="ph-col-4"></div>
                          <div class="ph-col-8 empty"></div>
                          <div class="ph-col-6"></div>
                          <div class="ph-col-6 empty"></div>
                          <div class="ph-col-12"></div>
                      </div>
                  </div>
                </div>
              </div>
              <h5 className='footer-menu-title'>Office Address</h5>
              <div className={this.state.mainDiv}>
              {ReactHtmlParser(this.state.address)}
              </div>
              <h5 className='footer-menu-title'>Social Link</h5>
              <a href={this.state.facebook_link}><i className='fab m-1 h4 fa-facebook'></i></a>
              <a href={this.state.twitter_link}><i className='fab m-1 h4 fa-twitter'></i></a>
              <a href={this.state.instagram_link}><i className='fab m-1 h4 fa-instagram'></i></a>
            </Col>
            <Col className='p-2' lg={3} md={3} sm={6} xs={12}>
            <h5 className='footer-menu-title'>The Company</h5>
            <Link to="/about" className='footer-link'>About Us</Link><br></br>
            <Link to="/" className='footer-link'>Company Profile</Link><br></br>
            <Link to="/contact" className='footer-link'>Contact Us</Link><br></br>
            </Col>
            <Col className='p-2' lg={3} md={3} sm={6} xs={12}>
            <h5 className='footer-menu-title'>More Info</h5>
            <Link to="/purchase" className='footer-link'>How to purchase!</Link><br></br>
            <Link to="/privacy" className='footer-link'>Privacy Policy</Link><br></br>
            <Link to="/refund" className='footer-link'>Refund Policy</Link><br></br>
            </Col>
            <Col className='p-2' lg={3} md={3} sm={6} xs={12}>
            <h5 className='footer-menu-title'>Download App</h5>
            <a href={this.state.google_app_link}><img src={Google} alt='' /></a>
            <a href={this.state.ios_app_link}><img className='mt-2' src={Apple} alt='' /></a>
            <br></br>
            Change Your Language <br></br>
            <div id="google_translate_element"></div>
            </Col>
          </Row>
        </Container>
        <Container fluid={"true"} className='text-center m-0 pt-3 pb-1 bg-dark'>
          <Container>
            <Row>
              <h4 className='text-white'>{ReactHtmlParser(this.state.copyright_text)}</h4>
            </Row>
          </Container>
        </Container>
        </div>
      </Fragment>
    )
  }
}

export default FooterDesktop
