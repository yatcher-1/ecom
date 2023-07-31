import React, { Component, Fragment } from 'react'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import ProductDetail from '../components/ProductDetails/ProductDetail'
import SuggestProduct from '../components/ProductDetails/SuggestProduct'

class ProductDetailPage extends Component {
    componentDidMount(){
        window.scroll(0,0)
      }
  render() {
    return (
        <Fragment>
        <div className='Desktop'>
          <NavMenuDesktop />
        </div>
        <div className='Mobile'>
          <NavMenuMobile />
        </div>
        <ProductDetail />
        <SuggestProduct />
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
