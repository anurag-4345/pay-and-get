import React, { Component } from 'react'
import '../css/Home page.css'

class footer extends Component {
    render() {
        return (
            <footer className='foot-head'>
            <div className='foot-body'>
              <i className='fa fa-home' aria-hidden='true'></i>
            </div>
            <div className='foot-body'>
              <i className='fa fa-comment'></i>
            </div>
            <div className='foot-body'>
              <i className='fa fa-calendar'></i>
            </div>
            <div className='foot-body'>
              <i className='fa fa-cog' aria-hidden='true'></i>
            </div>
          </footer>
        )
    }
}
export default footer