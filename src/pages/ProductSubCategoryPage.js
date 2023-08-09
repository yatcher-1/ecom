import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import AppURL from "../api/AppURL";
import axios from "axios";
import SubCategory from "../components/ProductDetails/SubCategory";

function ProductSubCategoryPage(){
    const {category} = useParams();
    const {subcategory} = useParams();
    const [ProductData, setData] = useState([]);
    useEffect(() => {
        window.scroll(0,0)
        fetchData(category, subcategory);
        axios.get(AppURL.ProductListBySubCategory(category, subcategory)).then(response => {
            (setData(response.data));
        }).catch(error => {
            
        });
    }, [category, subcategory]);

    
    const fetchData = (category, subcategory) =>{
        return (category, subcategory);
    }

    return (
        <Fragment>
        <div className='Desktop'>
          <NavMenuDesktop />
        </div>
        <div className='Mobile'>
          <NavMenuMobile />
        </div>
        <SubCategory Category={category} SubCategory={subcategory} ProductData={ProductData}/>
        <div className='Desktop'>
          <FooterDesktop />
        </div>
          <div className='Mobile'>
          <FooterMobile />
        </div>
        </Fragment>
    )
}

export default ProductSubCategoryPage;