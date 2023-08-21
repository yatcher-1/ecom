import axios from 'axios';
import React, { Component, Fragment } from 'react'
import AppURL from '../../api/AppURL';
import { Button, Card, Col, Container, Modal, Row } from 'react-bootstrap';
import SliderLoading from '../PlaceHolder/SliderLoading';

export class OrderList extends Component {
    constructor(){
        super();
        this.state={
          ProductData:[],
          isLoading:"",
          mainDiv:'d-none',
        }
      }  

      componentDidMount(){
        axios.get(AppURL.OrderListByUser(this.props.User.email)).then(response => {
            this.setState({ProductData:response.data,isLoading:"d-none",mainDiv:""})
        }).catch(error => {
    
        });
      }

    handleClose = () =>{
        this.setState({show:false})
    };  

    handleShow = (e) => {
         this.setState({ show:true });
         let Nmsg = e.target.getAttribute("data-message");
         let Ntitle = e.target.getAttribute("data-title");
         let Ndate = e.target.getAttribute("data-date");
         this.setState({Notificationmgs:Nmsg,Notificationtitle:Ntitle,Notificationdate:Ndate})
    };

  render() {
    const MyList = this.state.ProductData;
     const MyView = MyList.map((ProductList,i)=>{
        return <div>
            <Col md={6} lg={6} sm={6} xs={6}>
                    <h5 className="product-name">Invoice No: 
                    {ProductList.invoice_no}</h5>
                    <h5 className="product-name">
                    {ProductList.product_name}</h5>
                <h6> Quantity = {ProductList.quantity} </h6>
                <h6>Price = {ProductList.unit_price} x {ProductList.quantity} = {ProductList.total_price}$</h6>
                <p>{ProductList.size}</p>
                <p>{ProductList.product_color}</p>
                <h6>Status = {ProductList.order_status}</h6>
                    </Col>
                    <Button onClick={this.handleShow} className='btn btn-danger'>Post Review</Button>
                    <hr></hr>
        </div>
    })
    return (
      <Fragment>
      <SliderLoading isLoading={this.state.isLoading}/>
      <div className={this.state.mainDiv}>
      <Container>
      <div className="section-title text-center mb-55">
      <h2>Order History For {this.props.User.name}</h2>
      </div>
      <Card>                
            <Card.Body>
               <Row>
                   {MyView} 
               </Row>              
            </Card.Body>               
          </Card>
      </Container>
       </div>
       <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
           <h6><i className="fa fa-star"></i> Post Your Review</h6>
        </Modal.Header>
        <Modal.Body>
             <h6>Review</h6>
             <p>
             Review
             </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </Fragment>
    )
  }
}

export default OrderList
