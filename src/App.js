import React, { Component, Fragment } from 'react'
import AppRoute from './route/AppRoute'
import { BrowserRouter } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter>
        <AppRoute />
        </BrowserRouter>
      </Fragment>
    )
  }
}

export default App
