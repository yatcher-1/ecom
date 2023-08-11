import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/easyshop.png'
import Ham from '../../assets/images/bars.png'
import MegaMenuMobile from '../home/MegaMenuMobile';


class NavMenuMobile extends Component {

  constructor(){
    super();
    this.state= {
      SideNavState: "sideNavClose",
      ContentOverState: "ContentOverlayClose" 
    }
  }

  MenuBarClickHandler = ()=>{
    this.SideNavOpenClose();
  }
  
  ContentOverlayClickHandler = ()=>{
    this.SideNavOpenClose();
  }

  SideNavOpenClose = ()=>{
    let SideNavState = this.state.SideNavState;
    let ContentOverState = this.state.ContentOverState;

    if(SideNavState==="sideNavOpen"){
      this.setState({SideNavState:"sideNavClose",ContentOverState:"ContentOverlayClose"})
    }else{
      this.setState({SideNavState:"sideNavOpen",ContentOverState:"ContentOverlayOpen"})
    }
  }

  render() {
    return (
      <Fragment>
      <div className='TopSectionDown'>
        <Container fluid={"true"} className='fixed-top shadow-sm p-2 mb-0 bg-white'>
          <Row>
            <Col lg={4} md={4} sm={12}  xs={12}>
            <img src={Ham} className='bar-img' onClick={this.MenuBarClickHandler} alt=''/>

              <Link to="/" onClick={() => {
              window.location.href = "/";
            }}><img className='nav-logo' src={Logo} alt='main-logo'></img></Link>
              
              <Link to="/cart" className='cart-btn btn btn-dark'><i className='fa fa-shopping-cart'> 3 Items</i></Link>
            </Col>
          </Row>
        </Container>

        <div className={this.state.SideNavState}>
          <MegaMenuMobile />
        </div>

        <div onClick={this.ContentOverlayClickHandler} className={this.state.ContentOverState}>

        </div>
        
      </div>
      </Fragment>
    )
  }
}

export default NavMenuMobile
