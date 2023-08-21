import React, { Component, Fragment } from 'react'
import {Container, Row, Col,Button,Card} from 'react-bootstrap';
import axios from 'axios';
import AppURL from '../../api/AppURL';
import cogoToast from 'cogo-toast';
import { Navigate } from 'react-router';

class Cart extends Component {

     constructor(){
          super();
          this.state={
            ProductData:[],
            isLoading:"",
            mainDiv:'d-none',
            confirmBtn:"Confirm Order",
            city:"",
            payment:"",
            name:"",
            address:"",
            PageRedirectStatus:false,
          }
        }  
        
        componentDidMount(){
          axios.get(AppURL.CartList(this.props.User.email)).then(response => {
              this.setState({ProductData:response.data,isLoading:"d-none",mainDiv:""})
          }).catch(error => {
      
          });
        }

        removeItem = (id) => { 
          axios.get(AppURL.CartRemove(id)).then(response => {
               if(response.data===1){
                    cogoToast.success("Product deleted successfully", {position: 'top-right'})
                    window.location.reload();
               }else{
                    cogoToast.error("Product could not deleted, try again", {position: 'top-right'})
               }
            }).catch(error => {
            cogoToast.error("Product could not deleted, try again", {position: 'top-right'})
          })
        } //end method

        ItemPlus = (id, quantity, price) => {
          axios.get(AppURL.CartItemPlus(id, quantity, price)).then(response => {
               if(response.data===1){
                    window.location.reload();
                    cogoToast.success("Quantity increased", {position: 'top-right'})
               }else{
                    cogoToast.error("Product could not added, try again", {position: 'top-right'})
               }
            }).catch(error => {
            cogoToast.error("Product could not added, try again", {position: 'top-right'})
          })
        } //end method

        ItemMinus = (id, quantity, price) => {
          axios.get(AppURL.CartItemMinus(id, quantity, price)).then(response => {
               if(response.data===1){
                    window.location.reload();
                    cogoToast.success("Quantity decreased", {position: 'top-right'})
               }else{
                    cogoToast.error("Product could not deleted, try again", {position: 'top-right'})
               }
            }).catch(error => {
            cogoToast.error("Product could not deleted, try again", {position: 'top-right'})
          })
        } //end method

        cityOnChange = (e) => {
          let city = e.target.value;
          this.setState({city:city});
        } // end method

        paymentMethodOnChange = (e) => {
          let payment = e.target.value;
          this.setState({payment:payment});
        } // end method

        nameOnChange = (e) => {
          let name = e.target.value;
          this.setState({name:name});
        } // end method

        addressOnChange = (e) => {
          let address = e.target.value;
          this.setState({address:address});
        } // end method

        confirmOnClick = () => {
          let city = this.state.city;
          let payment = this.state.payment;
          let name = this.state.name;
          let address = this.state.address;
          let email = this.props.User.email;

          if(city.length===0){
               cogoToast.error("please select city",{position:'top-right'});
          }
          else if(payment.length===0){
               cogoToast.error("please select payment method",{position:'top-right'});
          }
          else if(name.length===0){
               cogoToast.error("please fill out your name",{position:'top-right'});
          }
          else if(address.length===0){
               cogoToast.warn("please fill out the address",{position:'top-right'});
          }
          else{

               let invoice = new Date().getTime();
               let MyFormData = new FormData();
               MyFormData.append('city',city)
               MyFormData.append('payment_method',payment)
               MyFormData.append('delivery_address',address)
               MyFormData.append('name',name)
               MyFormData.append('email',email)
               MyFormData.append('invoice_no',invoice)
               MyFormData.append('delivery_charge',"0.00")

               axios.post(AppURL.CartOrder,MyFormData).then(response => {
                    if(response.status===200){
                         cogoToast.success("Order Placed", {position: 'top-right'})
                         this.setState({PageRedirectStatus:true})
                    }else{
                         cogoToast.error("Order could not deleted, try again", {position: 'top-right'})
                    }
                 }).catch(error => {
                 cogoToast.error("Product could not deleted, try again", {position: 'top-right'})
               })

          }

        } // end method

        PageRedirectStatus = () => { 
          if(this.state.PageRedirectStatus===true){
              return <Navigate to="/orderlist"/>
          }
        }

     render() {

     const MyList = this.state.ProductData;
     let totalPriceSum = 0;
     const MyView = MyList.map((ProductList,i)=>{
          totalPriceSum = totalPriceSum+parseInt(ProductList.total_price);
          return <div>
               <Card >                
               <Card.Body>
               <Row>
                    <Col md={3} lg={3} sm={6} xs={6}>
                         <img className="cart-product-img" src={ProductList.image} alt=""/>
                    </Col>

                    <Col md={6} lg={6} sm={6} xs={6}>
                    <h5 className="product-name">{ProductList.product_name}</h5>
                <h6> Quantity = {ProductList.quantity} </h6>
                <h6>Price = {ProductList.unit_price} x {ProductList.quantity} = {ProductList.total_price}$</h6>
                <p>{ProductList.size}</p>
                <p>{ProductList.product_color}</p>
                    </Col>

                    <Col md={3} lg={3} sm={12} xs={12}>

                    <Button onClick={()=>this.removeItem(ProductList.id)} className="btn mt-2 mx-1 btn-lg site-btn"><i className="fa fa-trash-alt"></i></Button>

                    <Button onClick={()=>this.ItemPlus(ProductList.id,ProductList.quantity,ProductList.unit_price)} className="btn mt-2 mx-1 btn-lg site-btn"><i className="fa fa-plus"></i> </Button>

                    <Button onClick={()=>this.ItemMinus(ProductList.id,ProductList.quantity,ProductList.unit_price)} className="btn mt-2 mx-1 btn-lg site-btn"><i className="fa fa-minus"></i> </Button>
                
                    </Col>
               </Row>              
               </Card.Body>               
          </Card>
          </div>
          
     })
      return (
              <Fragment>

                   <Container>   

              <div className="section-title text-center mb-55"><h2>Product Cart List</h2>   
              </div>



                   <Row>

                   <Col className="p-1" lg={7} md={7} sm={12} xs={12} >
                    {MyView}
                    </Col>

                    <Col className="p-1" lg={5} md={5} sm={12} xs={12} >
     <div className="card p-2">
               <div className="card-body">
                    <div className="container-fluid ">
                         <div className="row">
<div className="col-md-12 p-1  col-lg-12 col-sm-12 col-12">
     <h5 className="Product-Name text-danger">Total Due:   {totalPriceSum}$</h5>
</div>
</div>
<div className="row">
<div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
     <label className="form-label">Choose City</label>
     <select onChange={this.cityOnChange} className="form-control">
     <option value="">Choose</option>
     <option value="Dhaka">Assam</option>
     <option value="Dhaka">Bihar </option>
     <option value="Dhaka">Goa </option>
     <option value="Dhaka">Gujarat </option>
     <option value="Dhaka">Himachal Pradesh </option>
     <option value="Dhaka">Punjab  </option>
     </select>
</div>
<div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
     <label className="form-label">Choose Payment Method</label>
     <select onChange={this.paymentMethodOnChange}  className="form-control">
     <option value="">Choose</option>
     <option value="Cash On Delivery">Cash On Delivery</option>
     <option value="Cash On Delivery">Stripe</option>
     </select>
</div>
<div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
     <label  className="form-label">Your Name</label>
     <input onChange={this.nameOnChange}  className="form-control" type="text" placeholder=""/>
</div>

<div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
     <label  className="form-label">Delivery Address</label>
     <textarea onChange={this.addressOnChange}  rows={2}  className="form-control" type="text" placeholder=""/>
</div>
<div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
     <button onClick={this.confirmOnClick}  className="btn  site-btn">{this.state.confirmBtn} </button>
</div>
</div>
                    </div>
               </div>
               </div>
     </Col>

                   </Row>

               </Container>
          {this.PageRedirectStatus()}

              </Fragment>
          )
     }
}

export default Cart