import React, { Component, Fragment } from 'react'
import { Breadcrumb, Button, Col, Container, Form, Row, Toast} from 'react-bootstrap'
import validation from '../../validation/validation';
import axios from 'axios';
import AppURL from '../../api/AppURL';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

export class Contact extends Component {

    constructor(){
        super();
        this.state={
            name:"",
            email:"",
            message:""
        }
    }

    nameOnChange = (e)=>{
        let name = e.target.value;
        this.setState({name:name});
    }
    emailOnChange = (e)=>{
        let email = e.target.value;
        this.setState({email:email});
    }
    messageOnChange = (e)=>{
        let message = e.target.value;
        this.setState({message:message});
    }

    onFormSubmit = (e)=>{
        let name = this.state.name; 
        let email = this.state.email; 
        let message = this.state.message; 
        let sendBtn = document.getElementById('sendBtn'); 
        let contactForm = document.getElementById('contactForm'); 

        if(message.length===0){
            toast.error("please send message");
        }else if(name.length===0){
            toast.error("please input name");
        }else if(email.length===0){
            toast.error("please input email");
        }else if(!(validation.NameRegx).test(name)){
            toast.error("wrong input in name");
        }else{
            sendBtn.innerHTML= 'Sending...';
            let MyFormData = new FormData();
            MyFormData.append("name", name);
            MyFormData.append("email", email);
            MyFormData.append("message", message);
            
            axios.post(AppURL.PostContact, MyFormData)
            .then(function (response){
                toast.success("message sent succefully");
                if(response.status===200 && response.status===1){
                    sendBtn.innerHTML = "Submit";
                    contactForm.reset();
                }   
            })
            .catch(function (error){
                toast.error(error);
                sendBtn.innerHTML = "Submit";
            });
        }

        e.preventDefault();
    }

  render() {
    return (
        <Fragment>
        <Container>
        <div className="breadbody">
        <Breadcrumb>
        <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
        <Breadcrumb.Item>
        <Link to="/contact" onClick={() => {
              window.location.href = "/contact";
            }}>Contact</Link>
        </Breadcrumb.Item>
        </Breadcrumb>
        </div> 
            <Row className='p-2'>
                <Col className='shadow-sm bg-white mt-2' md={12} lg={12} sm={12} xs={12}>
                    <Row className='text-center'>
                        <Col className='d-flex justify-content-center' md={6} lg={6} sm={12} xs={12}>
                            <Form id='contactForm' onSubmit={this.onFormSubmit} className='onboardForm'>
                                <h4 className='section-title-login'>Contact With Us</h4>
                                <h6 className='section-sub-title'>Please Contact With Us.</h6>
                                <input onChange={this.nameOnChange} type='text' className='form-control m-2' placeholder='Enter Name' name='name'/>

                                <input onChange={this.emailOnChange} type='email' className='form-control m-2' placeholder='Enter Email' name='email'/>

                                <Form.Control onChange={this.messageOnChange} as='textarea' className='form-control m-2' placeholder='Enter Your Message' name='message' rows={3}/>

                                <Button id='sendBtn' type="submit" className='btn btn-block site-btn-login m-2'>
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
        <ToastContainer />
        </Fragment>
    )
  }
}

export default Contact
