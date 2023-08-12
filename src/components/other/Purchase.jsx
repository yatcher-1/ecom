import axios from 'axios';
import React, { Component, Fragment } from 'react'
import { Breadcrumb, Col, Container, Row } from 'react-bootstrap'
import ReactHtmlParser from 'react-html-parser'
import AppURL from '../../api/AppURL';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';


export class Purchase extends Component {
  constructor(){
    super();
    this.state={
      purchase:"",
      loaderDiv:"",
      mainDiv:'d-none'
    }
  }  

  componentDidMount(){
    
    let SiteInfoPurchase = sessionStorage.getItem("AllsiteInfo");

    if( SiteInfoPurchase === null ){
      axios.get(AppURL.AllSiteInfo).then(response => {
        let StatusCode = response.status;
        
        if(StatusCode === 200){
          let JsonData = (response.data)[0]['purchase_guide'];
          this.setState({purchase:JsonData,loaderDiv:'d-none',mainDiv:""});
          sessionStorage.setItem("SiteInfoPurchase", JsonData);
        }else{
          toast.error("something is wrong",{
            position: "bottom-center"
          });
        }
        }).catch(error => {
          toast.error("something is wrong",{
            position: "bottom-center"
          });
        });
    } // endifcondition
    else{
      this.setState({purchase:SiteInfoPurchase});
    }
  }

  render() {
    return (
        <Fragment>
        <Container> 
        <div className="breadbody">
        <Breadcrumb>
        <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
        <Breadcrumb.Item>
        <Link to="/purchase" onClick={() => {
              window.location.href = "/purchase";
            }}>Purchase</Link>
        </Breadcrumb.Item>
        </Breadcrumb>
        </div>
        <Row className='p-2'>
          <Col className='shadow-sm bg-white mt-2' md={12} lg={12} sm={12} xs={12}>
          <div className={this.state.loaderDiv}>
                <div class="ph-item">
                  <div class="ph-col-12">
                      <div class="ph-row">
                          <div class="ph-col-4"></div>
                          <div class="ph-col-8 empty"></div>
                          <div class="ph-col-6"></div>
                          <div class="ph-col-6 empty"></div>
                          <div class="ph-col-12"></div>
                          <div class="ph-col-12"></div>
                          <div class="ph-col-12"></div>
                          <div class="ph-col-12"></div>
                      </div>
                  </div>
                </div>
                <div class="ph-item">
                  <div class="ph-col-12">
                      <div class="ph-row">
                          <div class="ph-col-4"></div>
                          <div class="ph-col-8 empty"></div>
                          <div class="ph-col-6"></div>
                          <div class="ph-col-6 empty"></div>
                          <div class="ph-col-12"></div>
                          <div class="ph-col-12"></div>
                          <div class="ph-col-12"></div>
                          <div class="ph-col-12"></div>
                      </div>
                  </div>
                </div>
              </div>
          <div className={this.state.mainDiv}>
          <h4 className='section-title-login'>Purchase Page</h4> 
          <p className='section-title-contact'>
          { ReactHtmlParser (this.state.purchase)}
          </p>
          </div>
          </Col>
        </Row>
        </Container>
        <ToastContainer/>
        </Fragment>
    )
  }
}

export default Purchase
