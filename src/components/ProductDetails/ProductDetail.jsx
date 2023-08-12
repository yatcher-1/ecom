import React, { Component, Fragment } from 'react'
import { Container,Row,Col, Breadcrumb} from 'react-bootstrap'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom';

class ProductDetails extends Component {

     // constructor(){
     //      super();
     // }

     imgOnClick(e){
          let imgSrc = e.target.getAttribute('src');
          let previewImg = document.getElementById('previewImg');
          ReactDOM.findDOMNode(previewImg).setAttribute('src', imgSrc);
     }

     PriceOption(price, special_price){
          if(special_price==="na"){
               return(
                    <p className='product-price-on-card'>Price : {price}$</p>
               )
          }else{
               return(
                    <p className='product-price-on-card'>
                    Price : <strike className="text-secondary">
                         {price}$
                    </strike>{special_price}$</p>
               )
          }
     }


     render() {
           
          let ProductAllData = this.props.ProductData;
          let title = ProductAllData["productList"][0]["title"];
          let brand = ProductAllData["productList"][0]["brand"];
          let category = ProductAllData["productList"][0]["category"];
          let subCategory = ProductAllData["productList"][0]["subcategory"];
          let image = ProductAllData["productList"][0]["image"];
          let price = ProductAllData["productList"][0]["price"];
          let productCode = ProductAllData["productList"][0]["product_code"];
          let remark = ProductAllData["productList"][0]["remark"];
          let special_price = ProductAllData["productList"][0]["special_price"];
          let star = ProductAllData["productList"][0]["star"];

          let image_two = ProductAllData["productDetails"][0]["image_two"];
          let image_three = ProductAllData["productDetails"][0]["image_three"];
          let image_four = ProductAllData["productDetails"][0]["image_four"];
          let color = ProductAllData["productDetails"][0]["color"];
          let size = ProductAllData["productDetails"][0]["size"];
          let product_id = ProductAllData["productDetails"][0]["poduct_id"];
          let shortDesc = ProductAllData["productDetails"][0]["short_description"];
          let longDesc = ProductAllData["productDetails"][0]["long_description"];

          var ColorDiv = "d-none"
          if(color!=="na"){
               let ColorArray = color.split(',');
               var ColorOption = ColorArray.map((ColorList, i)=>{
                    return <option value = {ColorList}>{ColorList}</option>
               })
               ColorDiv=""
          }else{
               ColorDiv="d-none"
          }

          var SizeDiv = "d-none"
          if(size!=="na"){
               let SizeArray = size.split(',');
               var SizeOption = SizeArray.map((ColorList, i)=>{
                    return <option value = {ColorList}>{ColorList}</option>
               })
               SizeDiv=""
          }else{
               SizeDiv="d-none"
          }

          
          return (
               <Fragment>
               <Container  className="BetweenTwoSection"  fluid={"true"}>
               <div className="breadbody">
        <Breadcrumb>
        <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
        <Breadcrumb.Item>
        <Link to={"/productcategory/"+category} onClick={() => {
              window.location.href = `/productcategory/${category}`;
            }}>{category}</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
        <Link to={"/productsubcategory/"+subCategory+"/"+subCategory} onClick={() => {
              window.location.href = `/productsubcategory/${category}/${subCategory}`;
            }}>{subCategory}</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
        <Link to={"/productdetails/"+product_id} onClick={() => {
              window.location.href = `/productdetails/${product_id}`;
            }}>{title}</Link>
        </Breadcrumb.Item>
        </Breadcrumb>
        </div>
                   <Row className="p-2">
          <Col className="shadow-sm bg-white pb-3 mt-4" md={12} lg={12} sm={12} xs={12}>
          <Row>
          <Col className="p-3" md={6} lg={6} sm={12} xs={12}>
          <img id='previewImg' className="bigimage" src={image} alt=''/>
          <Container  className="my-3">
               <Row>
                    <Col className="p-0 m-0"  md={3} lg={3} sm={3} xs={3}>
                         <img  onClick={this.imgOnClick} className="w-100 smallimage product-sm-img" src={image} alt=''/>
                    </Col>
                    <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                         <img onClick={this.imgOnClick} className="w-100 smallimage product-sm-img" src={image_two} alt=''/>
                    </Col>
                    <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                         <img onClick={this.imgOnClick} className="w-100 smallimage product-sm-img" src={image_three} alt=''/>
                    </Col>
                    <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                         <img onClick={this.imgOnClick} className="w-100 smallimage product-sm-img" src={image_four} alt=''/>
                    </Col>
               </Row>
          </Container>
          </Col>
          <Col className="p-3 " md={6} lg={6} sm={12} xs={12}>
          <h5 className="Product-Name">{title}</h5>
          <h6 className="section-sub-title">{shortDesc}</h6>
          {this.PriceOption(price, special_price)}
          <h6 className="mt-2">Category : <b>{category}</b></h6>
          <h6 className="mt-2">Subcategory : <b>{subCategory}</b></h6>
          <h6 className="mt-2">Brand : <b>{brand}</b></h6>
          <h6 className="mt-2">Product Code : <b>{productCode}</b></h6>

          <div className={ColorDiv}>
          <h6 className="mt-2">Choose Color</h6>
               <select className='form-control form-select'>
                    <option>Choose Color</option>
                    {ColorOption}
               </select>
          </div>

          <div className={SizeDiv}>
          <h6 className="mt-2">Choose Size</h6>
               <select className='form-control form-select'>
                    <option>Choose Size</option>
                    {SizeOption}
               </select>
          </div>

          <div className="">
          <h6 className="mt-2">Choose Qty</h6>
               <select className='form-control form-select'>
                    <option>Choose Qty</option>
                    <option value={0}>0</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>
               </select>
          </div>

          <div className="input-group mt-3">
               <button className="btn site-btn m-1 "> <i className="fa fa-shopping-cart"></i>  Add To Cart</button>
               <button className="btn btn-primary m-1"> <i className="fa fa-car"></i> Order Now</button>
               <button className="btn btn-primary m-1"> <i className="fa fa-heart"></i> Favourite</button>
          </div>
          </Col>
     </Row>

     <Row>
          <Col className="" md={6} lg={6} sm={12} xs={12}>
          <h6 className="mt-2">DETAILS</h6>
          <p>{longDesc}</p>
          </Col>

          <Col className="" md={6} lg={6} sm={12} xs={12}>
          <h6 className="mt-2">REVIEWS</h6>
          <p className=" p-0 m-0"><span className="Review-Title">Kazi Ariyan</span> <span className="text-success"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </span> </p>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>

          <p className=" p-0 m-0"><span className="Review-Title">Kazi Ariyan</span> <span className="text-success"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </span> </p>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>

          <p className=" p-0 m-0"><span className="Review-Title">Kazi Ariyan</span> <span className="text-success"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </span> </p>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
          </Col>
        </Row>
        </Col>
                   </Row>
               </Container>
               
               </Fragment>
          )
     }
}

export default ProductDetails