import React, { Component, Fragment } from 'react'
import { Route, Routes} from 'react-router'
import HomePage from '../pages/HomePage'
import UserLoginPage from '../pages/UserLoginPage'
import ContactPage from '../pages/ContactPage'
import PurchasePage from '../pages/PurchasePage'
import PrivacyPage from '../pages/PrivacyPage'
import RefundPage from '../pages/RefundPage'
import ProductDetailPage from '../pages/ProductDetailPage'
import NotificationPage from '../pages/NotificationPage'
import FavouritePage from '../pages/FavouritePage'
import Cart from '../pages/Cart'
import AboutPage from '../pages/AboutPage'
import ProductCategoryPage1 from '../pages/ProductCategoryPage'
import ProductSubCategoryPage from '../pages/ProductSubCategoryPage'


class AppRoute extends Component {

  render() {
    return (
      <Fragment>
        <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/login" element={<UserLoginPage />}/>
        <Route path="/contact" element={<ContactPage />}/>
        <Route path="/purchase" element={<PurchasePage />}/>
        <Route path="/privacy" element={<PrivacyPage />}/>
        <Route path="/about" element={<AboutPage />}/>
        <Route path="/refund" element={<RefundPage />}/>
        <Route path="/productdetails" element={<ProductDetailPage />}/>
        <Route path="/notification" element={<NotificationPage />}/>
        <Route path="/favourite" element={<FavouritePage />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route exact path="/productcategory/:category" element={<ProductCategoryPage1 />}/>
        <Route exact path="/productsubcategory/:category/:subcategory" element={<ProductSubCategoryPage />}/>
        </Routes>
      </Fragment>
    )
  }
}

export default AppRoute
