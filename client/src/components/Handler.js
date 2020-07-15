import React, { Component } from 'react'
import Footer from './footer'
import Home from './Home'
import Join from './join'
import Profile from './profile'
import Record from './record'

class Handler extends Component {
  render () {
    return (
      <section style={{margin:"0px",padding:"0px"}}>
        <Home />v
        <Join />
        <Profile />
        <Record />
        <Footer />
      </section>
    )
  }
}

export default Handler
