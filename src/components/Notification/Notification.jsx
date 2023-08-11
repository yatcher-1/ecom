import axios from 'axios';
import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap'
import AppURL from '../../api/AppURL';

class Notification extends Component {

     constructor(){
          super();
          this.state={
               show:false,
               NotificationData:[],
               isLoading:"",
               mainDiv:"d-none",
               Notificationmgs:"",
               Notificationtitle:"",
               Notificationdate:"",
          }
     }

     componentDidMount(){
        axios.get(AppURL.NotificationHistory).then(response => {
            this.setState({NotificationData:response.data,isLoading:"d-none",mainDiv:""})
        }).catch(error => {
    
        });
     }

      handleClose = () =>{
          this.setState({ show:false})
      };  

      handleShow = (e) => {
           this.setState({ show:true });
           let Nmsg = e.target.getAttribute("data-message");
           let Ntitle = e.target.getAttribute("data-title");
           let Ndate = e.target.getAttribute("data-date");
           this.setState({Notificationmgs:Nmsg,Notificationtitle:Ntitle,Notificationdate:Ndate})
      }; 

render() {

    const NotificationList = this.state.NotificationData;
    const MyView = NotificationList.map((NotificationList,i)=>{
          return <Col className=" p-1 " md={6} lg={6} sm={12} xs={12}>
          <Card onClick={this.handleShow} className="notification-card">
              <Card.Body>
                  <h6> {NotificationList.title}</h6>
                  <p className="py-1  px-0 text-primary m-0"><i className="fa  fa-bell"></i>   {NotificationList.date} | Status: Unread</p>
                  <Button data-title={NotificationList.title} data-date={NotificationList.date}
                  data-message={NotificationList.message} className='btn btn-danger'>Details</Button>
              </Card.Body>
          </Card>
      </Col>
    })
    
return (
<Fragment>
<Container className="TopSection">
    <Row>
        {MyView}
    </Row>
</Container>


<Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
           <h6><i className="fa fa-bell"></i> {this.state.Notificationdate}</h6>
        </Modal.Header>
        <Modal.Body>
             <h6>{this.state.Notificationtitle}</h6>
             <p>
             {this.state.Notificationmgs}
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

export default Notification