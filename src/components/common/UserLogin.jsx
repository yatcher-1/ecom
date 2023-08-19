import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import LoginImage from "../../assets/images/login.png"
import { Link, Navigate } from 'react-router-dom'
import axios from 'axios';
import AppURL from '../../api/AppURL';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class UserLogin extends Component {

    constructor(){
        super();
        this.state={
            email:"",
            password:"",
            message:"",
            loggedIn:false,
        }
    }

    // Login Form Submit Method

    FormSubmit = (e) => {
        e.preventDefault();
        const data = {
            email: this.state.email,
            password:this.state.password,
        }
        axios.post(AppURL.UserLogin,data).then(response => {
            localStorage.setItem('token',response.data.token);
            this.setState({loggedIn:true});
            this.props.setUser(response.data.user);
            document.getElementById("reset").reset();
        }).catch(error => {
            toast.error(error.response.data.message, {
                position: "top-right"
            });
        });
    }

  render() {

    // after Login Redirect to profile page
    if(this.state.loggedIn){
       return <Navigate to="/profile" />
    }else{

    }

    if(localStorage.getItem('token')){
        return <Navigate to="/profile" />
    }

    return (
    <Fragment>
    <Container> 
    <Row className='p-2'>
        <Col className='shadow-sm bg-white mt-2' md={12} lg={12} sm={12} xs={12}>
            <Row className='text-center'>
                <Col className='d-flex justify-content-center' md={6} lg={6} sm={12} xs={12}>
                    <Form id='reset' onSubmit={this.FormSubmit} className='onboardForm'>
                        <h4 className='section-title-login'>User Sign-in</h4>
                        
                        <input type='email' onChange={(e)=>{this.setState({email:e.target.value})}} className='form-control m-2' placeholder='Enter your email'/>

                        <input type='password' onChange={(e)=>{this.setState({password:e.target.value})}}className='form-control m-2' placeholder='Enter Your password'/>
                        
                        <Button type="submit" className='btn btn-block site-btn-login m-2'>
                            Login
                        </Button>
                        <br></br><br></br>
                        <hr />
                        <p>
                            <b>Forget My password?</b> <Link to={"/forget"}>Forget Password</Link>
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

export default UserLogin
