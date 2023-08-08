import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import Category from "../components/ProductDetails/Category";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import AppURL from "../api/AppURL";
import axios from "axios";

function ProductCategoryPage1(){
    const {category} = useParams();
    const [ProductData, setData] = useState([])
    useEffect(() => {
        fetchData(category);
        window.scroll(0,0)
        axios.get(AppURL.ProductListByCategory(category)).then(response => {
            setData(response.data)
        }).catch(error => {
            
        });
    }, [category]);

    
    const fetchData = (category) =>{
        return category;
    }

    return (
        <Fragment>
        <div className='Desktop'>
          <NavMenuDesktop />
        </div>
        <div className='Mobile'>
          <NavMenuMobile />
        </div>
        <Category Category={category} ProductData={ProductData}/>
        <div className='Desktop'>
          <FooterDesktop />
        </div>
          <div className='Mobile'>
          <FooterMobile />
        </div>
        </Fragment>
    )
}

export default ProductCategoryPage1;