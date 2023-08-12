import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import AppURL from "../api/AppURL";
import axios from "axios";
import SearchList from "../components/ProductDetails/SearchList";

function Search(){
    const {searchkey} = useParams();
    const [ProductData, setData] = useState([]);
    useEffect(() => {
        fetchData(searchkey);
        window.scroll(0,0)
        axios.get(AppURL.ProductBySearch(searchkey)).then(response => {
            setData(response.data)
        }).catch(error => {
            
        });
    }, [searchkey]);

    
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
        <SearchList Search={searchkey} ProductSearchData={ProductData}/>
        <div className='Desktop'>
          <FooterDesktop />
        </div>
          <div className='Mobile'>
          <FooterMobile />
        </div>
        </Fragment>
    )
}

export default Search;