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
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/login" element={<UserLoginPage />} />
        <Route exact path="/contact" element={<ContactPage />} />
        <Route exact path="/purchase" element={<PurchasePage />} />
        <Route exact path="/privacy" element={<PrivacyPage />} />
        <Route exact path="/about" element={<AboutPage />} />
        <Route exact path="/refund" element={<RefundPage />} />
        <Route exact path="/productdetails/:code" element={<ProductDetailPage />} />
        <Route exact path="/notification" element={<NotificationPage />} />
        <Route exact path="/favourite" element={<FavouritePage />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/productcategory/:category" element={<ProductCategoryPage1 />} />
        <Route exact path="/productsubcategory/:category/:subcategory" element={<ProductSubCategoryPage />} />
        <Route exact path="/notification" element={<NotificationPage />} />
        </Routes>
      </Fragment>
    )
  }
}

export default AppRoute
