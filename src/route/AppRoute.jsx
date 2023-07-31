import React, { Component, Fragment } from 'react'
import { Route, Routes } from 'react-router'
import HomePage from '../pages/HomePage'
import UserLoginPage from '../pages/UserLoginPage'


class AppRoute extends Component {
  render() {
    return (
      <Fragment>
        <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/login" element={<UserLoginPage />}/>
        </Routes>
      </Fragment>
    )
  }
}

export default AppRoute
