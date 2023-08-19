import React, { Fragment, useEffect, useState } from 'react'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import ProductDetail from '../components/ProductDetails/ProductDetail'
import AppURL from '../api/AppURL'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import SliderLoading from '../components/PlaceHolder/SliderLoading'

function ProductDetailPage (props) {
  const {code} = useParams();
  const [ProductData, setData] = useState([])
  const [isLoading, loadData] = useState("")
  const [mainDiv, mainData] = useState("d-none")
  const user = props.user;
  
  useEffect(() => {
      fetchData(code);
      window.scroll(0,0)
      axios.get(AppURL.ProductDetails(code)).then(response => {
          setData(response.data);
          loadData("d-none");
          mainData("");
      }).catch(error => {
          
      });
  }, [code]);
  
  const fetchData = (code) =>{
      return code;
    }
    
      if(mainDiv === "d-none"){
        return (
            <Fragment>
            <div className='Desktop'>
              <NavMenuDesktop />
            </div>
            <div className='Mobile'>
              <NavMenuMobile />
            </div>
            <SliderLoading isLoading={isLoading}/>
            <div className='Desktop'>
              <FooterDesktop />
            </div>
              <div className='Mobile'>
              <FooterMobile />
            </div>
            </Fragment>
        )
      }else{
        return (
          <Fragment>
          <div className='Desktop'>
            <NavMenuDesktop />
          </div>
          <div className='Mobile'>
            <NavMenuMobile />
          </div>
          <ProductDetail ProductData={ProductData} User={user} />
          <div className='Desktop'>
            <FooterDesktop />
          </div>
            <div className='Mobile'>
            <FooterMobile />
          </div>
          </Fragment>
      )
      }
    }
  
export default ProductDetailPage
