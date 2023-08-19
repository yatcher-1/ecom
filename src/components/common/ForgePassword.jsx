import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import LoginImage from "../../assets/images/login.png"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import AppURL from '../../api/AppURL';



export class ForgePassword extends Component {
    constructor(){
        super();
        this.state={
            email:"",
            message:"",
            loggedIn:false,
        }
    }

    FormSubmit = (e) => {
        e.preventDefault();
        const data = {
            email: this.state.email,
        }
        axios.post(AppURL.UserForgetPassword,data).then(response => {
            this.setState({message:response.data.message});
            toast.success(response.data.message, {
                position: "top-right"
            });
        }).catch(error => {
            this.setState({message:error.response.data.message});
            toast.error(error.response.data.message, {
                position: "top-right"
            });
        });
    }

    render() {
    return (
        <Fragment>
        <Container> 
            <Row className='p-2'>
                <Col className='shadow-sm bg-white mt-2' md={12} lg={12} sm={12} xs={12}>
                    <Row className='text-center'>
                        <Col className='d-flex justify-content-center' md={6} lg={6} sm={12} xs={12}>
                            <Form onSubmit={this.FormSubmit} className='onboardForm'>
                                <h4 className='section-title-login'>Forget Password</h4>
                                <input onChange={(e)=>{this.setState({email:e.target.value})}} type='email' className='form-control m-2' placeholder='Enter your email'/>
                                <Button type='submit' className='btn btn-block site-btn-login m-2'>
                                    Reset Your Password
                                </Button>
                                <br></br><br></br>
                                <hr />
                                <p>
                                    <b>Aldready Have an Account?</b> <Link to={"/login"}>Login</Link>
                                </p>
                                <p>
                                    <b>Dont Have an Account?</b> <Link to={"/register"}>Register</Link>
                                </p>
                            </Form>
                        </Col>
        
                        <Col className='p-0 m-0 Desktop' md={6} lg={6} sm={6} xs={6}>
                            <img className='onboardbanner' src={LoginImage} alt=''/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
        <ToastContainer />
        </Fragment>
    )
  }
}

export default ForgePassword
