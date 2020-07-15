import React, { Component } from 'react'
import '../css/Home page.css'
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
                style={{display:"none"}}
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
        <h2 style={{textAlign:"center"}}>Service</h2>
        <section className='item-head-2'>
          <div className='item-body-2'>
            <i className='fa fa-book' aria-hidden='true'></i> Record
          </div>
          <div className='item-body-2'>
            <i className='fa fa-money' aria-hidden='true'></i> List
          </div>
          <div className='item-body-2'>
            <i className='fa fa-fire' aria-hidden='true'></i> order
          </div>
          <div className='item-body-2'>
            <i className='fa fa-calendar' aria-hidden='true'></i> Credit
          </div>
          <div className='item-body-2'>
            <i className='fa fa-money'></i> Grow Business
          </div>
          <div className='item-body-2'>
            <i className='fa fa-question' aria-hidden='true'></i> FAQ
          </div>
        </section>
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
