import React, { Component, Fragment } from 'react'
import { Route, Routes } from 'react-router'
import HomePage from '../pages/HomePage'


class AppRoute extends Component {
  render() {
    return (
      <Fragment>
        <Routes>
        <Route path="/" element={<HomePage />}/>
        </Routes>
      </Fragment>
    )
  }
}

export default AppRoute
