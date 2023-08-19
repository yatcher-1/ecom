import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Form, Row} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import LoginImage from "../../assets/images/login.png"
import axios from 'axios';
import AppURL from '../../api/AppURL';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';


export class ResetPassword extends Component {
    constructor(){
        super();
        this.state={
            token:"",
            email:"",
            password:"",
            password_confirmation:"",
            message:"",
            loggedIn:false,
        }
    }
    FormSubmit = (e) => {
        e.preventDefault();
        const data = {
            token: this.state.token,
            email: this.state.email,
            password: this.state.password,
            password_confirmation: this.state.password_confirmation,
        }
        const reset = document.getElementById("reset");
        axios.post(AppURL.UserResetPassword,data).then(response => {
            this.setState({message:response.data.message});
            toast.success(response.data.message, {
                position: "top-right"
            });
            reset.reset();
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
                        <Form id='reset' onSubmit={this.FormSubmit} className='onboardForm'>
                            <h4 className='section-title-login'>Reset Password</h4>
                            <input onChange={(e)=>{this.setState({token:e.target.value})}} type='text' className='form-control m-2' placeholder='Enter your Pin Code'/>
                            <input onChange={(e)=>{this.setState({email:e.target.value})}} type='email' className='form-control m-2' placeholder='Enter your Email'/>
                            <input onChange={(e)=>{this.setState({password:e.target.value})}} type='password' className='form-control m-2' placeholder='Enter Your password'/>
                            <input onChange={(e)=>{this.setState({password_confirmation:e.target.value})}} type='password' className='form-control m-2' placeholder='confirm password'/>
                            <Button type='submit' className='btn btn-block site-btn-login m-2'>
                                Reset Password
                            </Button>
                            <br></br><br></br>
                            <hr />
                            <p>
                                <b>Forget My password?</b> <Link to={"/forget"}>Forget Password</Link>
                            </p>
                            <p>
                                <b>Aldready Have an Account?</b> <Link to={"/login"}>Login</Link>
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

export default ResetPassword
