import React, { Component } from 'react'
import "../css/Home page.css"
import Img from "../img/header.jpg"

class profile extends Component {
  render() {
    return (
      <section className='profile'>      
        <section className='item-head-1'>
          <div className='pro-de'>
            <img alt="checker_log" className="pro" src={Img} />
            <h1>Ram</h1>
          </div>
            <div className='item-body-1' >
              Profile <i className='fa fa-arrow-right'></i>
            </div>
          <div className='item-body-1'>
            Bank <i className='fa fa-arrow-right' aria-hidden='true'></i>
          </div>
          <div className='item-body-1'>
            Payment Setup <i className='fa fa-arrow-right' aria-hidden='true'></i>
          </div>
          <div className='item-body-1'>
            Reminders
            <i className='fa fa-arrow-right' aria-hidden='true'></i>
          </div>
          <div className='item-body-1'>
            Order QR code
            <i className='fa fa-arrow-right' aria-hidden='true'></i>
          </div>

          <div className='item-body-1'>
            <span>  Offer <i className=" text-success fa fa-gear"> </i> </span>
            <i className='fa fa-arrow-right' aria-hidden='true'></i>
          </div>
        </section>
      </section>
    )
  }
}


export default profile
