import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Navbar, Row } from 'react-bootstrap'
import Logo from '../../assets/images/easyshop.png'
import { Link } from 'react-router-dom'
import MegaMenuAll from '../home/MegaMenuAll'

class NavMenuDesktop extends Component {
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
        <Navbar className="bg-body-tertiary navbar" fixed={"top"}>
        <Container fluid={"true"} className='fixed-top shadow-sm p-2 mb-0 bg-white'>
          <Row>
            <Col lg={4} md={4} sm={12}  xs={12}>

              <Button className='cart-btn'><i className='fa fa-shopping-cart'> 3 Items</i></Button>

              <Link to="/"><img className='nav-logo' src={Logo} alt='main-logo'></img></Link>
            
            </Col>
            <Col className="p-1 mt-1" lg={4} sm={12} md={4} xs={12}>
              <div className='input-group w-100'>
              <input type='text' name='' className='form-control' />
              <Button type='button' className='btn site-btn'>
                <i className='fa fa-search'></i>
              </Button> 
              </div>
            </Col>
            <Col className="p-1 mt-1" lg={4} sm={12} md={4} xs={12}>
              <Link to="/" className='btn '><i className='fa h4 fa-bell'></i><sup><span className='badge text-white bg-danger'>5</span></sup>
              </Link>
              <a className='btn' href='/'><i className='fa h4 fa-mobile-alt'></i></a>
              <Link to='/' className='h4 btn'>Login</Link>
              <Link to='/' className='h4 btn'>Register</Link>
              <Button className='cart-btn'><i className='fa fa-shopping-cart'> 3 Items</i></Button>
            </Col>
          </Row>
        </Container>
        <div className={this.state.SideNavState}>
          <MegaMenuAll />
        </div>

        <div onClick={this.ContentOverlayClickHandler} className={this.state.ContentOverState}>

        </div>
      </Navbar>
      </div>
      </Fragment>
      
    )
  }
}

export default NavMenuDesktop
