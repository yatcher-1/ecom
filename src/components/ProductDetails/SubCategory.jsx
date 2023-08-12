import React, { Component, Fragment } from 'react'
import { Breadcrumb, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class SubCategory extends Component {
  render() {
    const MyList = this.props.ProductData;
    const Category = this.props.Category;
    const SubCategory = this.props.SubCategory;
    const MyView = MyList.map((MyList,i)=>{
        if(MyList.special_price==="na"){
          return <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
          <Link className="text-link" to={"/productdetails/"+MyList.id}>
          <Card className='card image-box w-100'>
          <img className='center w-75' src={MyList.image} alt='camera-pic'/>
          <Card.Body>
              <p className='product-name-on-card'>
              {MyList.title}
              </p>
              <p className='product-price-on-card'>
            Price: <strike className="text-secondary">${MyList.price}</strike>  ${MyList.special_price}
            </p>
          </Card.Body>
          </Card>
          </Link>
          </Col>
        }else{
          return <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
          <Link className="text-link"  to={"/productdetails/"+MyList.id}>
          <Card className='card image-box w-100'>
          <img className='center w-75' src={MyList.image} alt='camera-pic'/>
          <Card.Body>
              <p className='product-name-on-card'>
              {MyList.title}
              </p>
              <p className='product-price-on-card'>
            Price: <strike className="text-secondary">${MyList.price}</strike>  ${MyList.special_price}
            </p>
          </Card.Body>
          </Card>
          </Link>
          </Col>
        }
    });

    return (
      <Fragment>
      <Container className='text-center' fluid={true}>
      <div className="breadbody">
        <Breadcrumb>
        <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
        <Breadcrumb.Item>
        <Link to={"/productcategory/"+Category} onClick={() => {
              window.location.href = `/productcategory/${Category}`;
            }}>{Category}</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
        <Link to={"/productsubcategory/"+Category+"/"+SubCategory} onClick={() => {
              window.location.href = `/productsubcategory/${Category}/${SubCategory}`;
            }}>{SubCategory}</Link>
        </Breadcrumb.Item>
        </Breadcrumb>
        </div>
      <div className="section-title text-center mb-55">
      <h2>{Category} / {SubCategory}</h2>
      </div>
      <Row>
        {MyView}
      </Row>
      </Container>
      </Fragment>
    )
  }
}

export default SubCategory
