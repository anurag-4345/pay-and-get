import React, { Component } from 'react'
import Home from './Home'
import Join from './join'
import Profile from './profile'
import Record from './record'
import 'font-awesome/css/font-awesome.min.css';
import Bank from "./bank";
import Reg from './Reg'

class Handler extends Component {
  constructor (props) {
    super(props)
    this.state = {
      _nav: 1
    }
  }
  render () {
    return (
      <section>
        {this.state._nav === 1 && <Home />}
        {this.state._nav === 2 && <Join />}
        {this.state._nav === 3 && <Record />}
        {this.state._nav === 4 && <Profile />}
        {this.state._nav === 5 && <Reg />}
        {this.state._nav === 6 && <Bank />}

        <footer className='foot-head'>
          <div className='foot-body' onClick={() => this.setState({ _nav: 1 })}>
            <i className='fa fa-home' aria-hidden='true'></i>
          </div>
          <div className='foot-body' onClick={() => this.setState({ _nav: 2 })}>
            <i className='fa fa-comment'></i>
          </div>
          <div className='foot-body' onClick={() => this.setState({ _nav: 3 })}>
            <i className='fa fa-calendar'></i>
          </div>
          <div className='foot-body' onClick={() => this.setState({ _nav: 4 })}>
            <i className='fa fa-cog' aria-hidden='true'></i>
          </div>
        
        </footer>
      </section>
    )
  }
}

export default Handler