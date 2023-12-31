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
import Search from '../pages/Search'
import RegisterPage from '../pages/RegisterPage'
import ForgetPasswordPage from '../pages/ForgetPasswordPage'
import ResetPasswordPage from '../pages/ResetPasswordPage'
import ProdilePage from '../pages/ProdilePage'
import axios from 'axios'
import AppURL from '../api/AppURL'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import OrderListPage from '../pages/OrderListPage'


class AppRoute extends Component {

  constructor(){
    super();
    this.state={
      user:{},
    }
  }

  componentDidMount(){
    axios.get(AppURL.UserData).then(response => {
        this.setUser(response.data)
    }).catch(error => {
  
    });
  }

  setUser = (user) => {
    this.setState({user:user})
  }

  render() {
    return (
      <Fragment>
        
        <NavMenuDesktop user={this.state.user} setUser={this.setUser}/>

        <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/login" element={<UserLoginPage user={this.state.user} setUser={this.setUser}/>} />
        <Route exact path="/register" element={<RegisterPage user={this.state.user} setUser={this.setUser} />} />
        <Route exact path="/forget" element={<ForgetPasswordPage />} />
        <Route exact path="/reset/:pincode" element={<ResetPasswordPage />} />
        <Route exact path="/profile" element={<ProdilePage user={this.state.user} setUser={this.setUser}/>} />
        <Route exact path="/logout" element={<ProdilePage user={this.state.user} setUser={this.setUser}/>} />
        <Route exact path="/contact" element={<ContactPage />} />
        <Route exact path="/purchase" element={<PurchasePage />} />
        <Route exact path="/privacy" element={<PrivacyPage />} />
        <Route exact path="/about" element={<AboutPage />} />
        <Route exact path="/refund" element={<RefundPage />} />
        <Route exact path="/productdetails/:code" element={<ProductDetailPage user={this.state.user}/>} />
        <Route exact path="/notification" element={<NotificationPage />} />
        <Route exact path="/favourite" element={<FavouritePage user={this.state.user}/>} />
        <Route exact path="/cart" element={<Cart user={this.state.user}/>} />
        <Route exact path="/productcategory/:category" element={<ProductCategoryPage1 />} />
        <Route exact path="/productsubcategory/:category/:subcategory" element={<ProductSubCategoryPage />} />
        <Route exact path="/notification" element={<NotificationPage />} />
        <Route exact path="/productbysearch/:searchkey" element={<Search />} />
        <Route exact path="/orderlist" element={<OrderListPage user={this.state.user}/>} />
        </Routes>
      </Fragment>
    )
  }
}

export default AppRoute
