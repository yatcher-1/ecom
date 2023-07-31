import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import LoginImage from "../../assets/images/login.png"

class UserLogin extends Component {
  render() {
    return (
<Fragment>
<Container> 
    <Row className='p-2'>
        <Col className='shadow-sm bg-white mt-2' md={12} lg={12} sm={12} xs={12}>
            <Row className='text-center'>
                <Col className='d-flex justify-content-center' md={6} lg={6} sm={12} xs={12}>
                    <Form className='onboardForm'>
                        <h4 className='section-title-login'>User Sign-in</h4>
                        <h6 className='section-sub-title'>Please Enter your Mobile Number</h6>
                        <input type='text' className='form-control m-2' placeholder='Enter Contact No.'/>
                        <Button className='btn btn-block site-btn-login m-2'>
                            Next
                        </Button>
                    </Form>
                </Col>

                <Col className='p-0 m-0 Desktop' md={6} lg={6} sm={6} xs={6}>
                    <img className='onboardbanner' src={LoginImage} alt=''/>
                </Col>
            </Row>
        </Col>
    </Row>
</Container>
</Fragment>
    )
  }
}

export default UserLogin
