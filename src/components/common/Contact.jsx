import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

export class Contact extends Component {
  render() {
    return (
        <Fragment>
        <Container> 
            <Row className='p-2'>
                <Col className='shadow-sm bg-white mt-2' md={12} lg={12} sm={12} xs={12}>
                    <Row className='text-center'>
                        <Col className='d-flex justify-content-center' md={6} lg={6} sm={12} xs={12}>
                            <Form className='onboardForm'>
                                <h4 className='section-title-login'>Contact With Us</h4>
                                <h6 className='section-sub-title'>Please Contact With Us.</h6>
                                <input type='text' className='form-control m-2' placeholder='Enter Contact No.'/>

                                <input type='email' className='form-control m-2' placeholder='Enter Email'/>

                                <input type='text' className='form-control m-2' placeholder='Enter Your Message'/>

                                <Button className='btn btn-block site-btn-login m-2'>
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                        <Col className='p-0 m-0 Desktop' md={6} lg={6} sm={6} xs={6}><br></br><br></br>
                            <p className='section-title-contact'>Surat</p>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.52982230402!2d72.82229625000001!3d21.159200149999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1690802937098!5m2!1sen!2sin" width="550" height="450" styles="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                         </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
        </Fragment>
    )
  }
}

export default Contact
