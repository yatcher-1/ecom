import React, { Component, Fragment, useEffect, useState } from 'react'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import ResetPassword from '../components/common/ResetPassword'
import { useParams } from 'react-router'
import AppURL from '../api/AppURL'
import axios from 'axios'

function ResetPasswordPage(){
    const {pincode} = useParams();
    const [ProductData, setData] = useState([])
    useEffect(() => {
        fetchData(pincode);
        window.scroll(0,0)
        axios.get(AppURL.ProductListByCategory(pincode)).then(response => {
            setData(response.data)
        }).catch(error => {
            
        });
    }, [pincode]);

    
    const fetchData = (pincode) =>{
        return pincode;
    }

    return (
        <Fragment>
        <div className='Desktop'>
          <NavMenuDesktop />
        </div>
        <div className='Mobile'>
          <NavMenuMobile />
        </div>
        <ResetPassword Pincode={pincode}/>
        <div className='Desktop'>
          <FooterDesktop />
        </div>
          <div className='Mobile'>
          <FooterMobile />
        </div>
        </Fragment>
    )
}

export default ResetPasswordPage
