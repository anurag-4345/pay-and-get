import React, { Component } from 'react'
import Slider from "./slider"

class BodyBlock extends Component {
  render () {
    return (
      <div>
        <section className='item-head'>
          <div className='item-body'>
            <h2>₹ Today</h2>
          </div>
          <div className='item-body'>
            <h2>₹ CashBack</h2>
          </div>
        </section>
        <h2 style={{ textAlign: 'center' }}>Service</h2>
        <Slider item={['item-1', 'item-2', 'item-3', 'item-4']} />
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
      </div>
    )
  }
}

export default BodyBlock
