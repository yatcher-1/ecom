import React, { Component } from 'react'
import { Container } from 'react-bootstrap';

class NewArrivalLoading extends Component {
  render() {
    let isLoading = this.props.isLoading;

    return (
        <div className={isLoading}>
        <Container className='text-center' fluid={true}>
        <div className="section-title text-center mb-55">
        <h2>

          <a className='btn btn-sm ml-2 site-btn' onClick={this.previous} href='/'><i className='fa fa-angle-left'></i></a>
          &nbsp; New Arrival &nbsp;
          <a className='btn btn-sm ml-2 site-btn' onClick={this.next} href='/'><i className='fa fa-angle-right'></i></a>

        </h2>
        <p className='section-sub-title'>Some Of Our Exclusive Collection</p>
        </div>
              <div className='row'>
                  
                 <div className="col-lg-3 col-md-3 col-sm-4 col-6 p-1">
                              <a href="/" className="card image-box h-100 w-100">
                                 <div class="ph-picture"></div>
                                  <div className="ph-item">
                                      <div className="ph-col-12">
                                          <div className="ph-row">
                                              <div className="ph-col-12 small"/>
                                              <div className="ph-col-12 small"/>
                                          </div>
                                      </div>
                                  </div>
                              </a>
                          </div>
                 <div className="col-lg-3 col-md-3 col-sm-4 col-6 p-1">
                              <a href="/" className="card image-box h-100 w-100">
                                 <div class="ph-picture"></div>
                                  <div className="ph-item">
                                      <div className="ph-col-12">
                                          <div className="ph-row">
                                              <div className="ph-col-12 small"/>
                                              <div className="ph-col-12 small"/>
                                          </div>
                                      </div>
                                  </div>
                              </a>
                          </div>
                 <div className="col-lg-3 col-md-3 col-sm-4 col-6 p-1">
                              <a href="/" className="card image-box h-100 w-100">
                                 <div class="ph-picture"></div>
                                  <div className="ph-item">
                                      <div className="ph-col-12">
                                          <div className="ph-row">
                                              <div className="ph-col-12 small"/>
                                              <div className="ph-col-12 small"/>
                                          </div>
                                      </div>
                                  </div>
                              </a>
                          </div>
                 <div className="col-lg-3 col-md-3 col-sm-4 col-6 p-1">
                              <a href="/" className="card image-box h-100 w-100">
                                 <div class="ph-picture"></div>
                                  <div className="ph-item">
                                      <div className="ph-col-12">
                                          <div className="ph-row">
                                              <div className="ph-col-12 small"/>
                                              <div className="ph-col-12 small"/>
                                          </div>
                                      </div>
                                  </div>
                              </a>
                          </div>
                          </div>
                          </Container>
                          </div>
    )
  }
}

export default NewArrivalLoading
