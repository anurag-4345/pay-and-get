import React, { Component } from 'react'
import '../css/Home page.css'

class footer extends Component {
    render() {
        return (
            <footer className='foot-head'>
            <div className='foot-body'>
              <i className='fa fa-home' aria-hidden='true'></i>1
            </div>
            <div className='foot-body'>
              <i className='fa fa-comment'></i>2
            </div>
            <div className='foot-body'>
              <i className='fa fa-calendar'></i>3
            </div>
            <div className='foot-body'>
              <i className='fa fa-cog' aria-hidden='true'></i>4
            </div>
          </footer>
        )
    }
}
export default footer