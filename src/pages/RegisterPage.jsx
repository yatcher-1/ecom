import React, { Component, Fragment } from 'react'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import Register from '../components/common/Register'

export class RegisterPage extends Component {
    componentDidMount(){
        window.scroll(0,0)
      }
      render() {
        const setUser = this.props.setUser;
        const user = this.props.setUser;
        return (
            <Fragment>
            <div className='Desktop'>
              <NavMenuDesktop />
            </div>
            <div className='Mobile'>
              <NavMenuMobile />
            </div>
            <Register setUser={setUser} user={user}/>
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

export default RegisterPage
