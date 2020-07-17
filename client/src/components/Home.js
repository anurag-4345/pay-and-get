import React, { Component } from 'react'
import '../css/Home page.css'
import Slider from './slider'
class Home extends Component {
  render () {
    return (
      <section className='home'>
        <section className='header'>
          <div className='head'>
            <h4>Pay and Get</h4>
            <h1>Cash back</h1>
          </div>
          <div className='head'>
            <form action='/' method='post'>
              <input
                type='number'
                className='inputTag'
                name='rec'
                placeholder='Pay get cashback'
              />
              <input
                type='button'
                value='Submit'
                className='inputTag'
                id='payBtn'
                style={{ display: 'none' }}
              />
            </form>
          </div>
        </section>
        <section className='item-head'>
          <div className='item-body'>
            <h2>₹ Today</h2>
          </div>
          <div className='item-body'>
            <h2>₹ CashBack</h2>
          </div>
        </section>
        <h2 style={{ textAlign: 'center' }}>Service</h2>
        <Slider item={["item-1","item-2","item-3","item-4"]} />
        <section className='item-head-1'>
          <div className='item-body-1'>
            our service <i className='fa fa-arrow-right' aria-hidden='true'></i>
          </div>
          <div className='item-body-1'>
            Loan Policy <i className='fa fa-arrow-right' aria-hidden='true'></i>
          </div>
          <div className='item-body-1'>
            Contact us <i className='fa fa-arrow-right' aria-hidden='true'></i>
          </div>
          <div className='item-body-1'>
            Setting <i className='fa fa-arrow-right' aria-hidden='true'></i>
          </div>
        </section>
      </section>
    )
  }
}

export default Home
