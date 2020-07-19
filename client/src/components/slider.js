import React, { Component } from 'react'

class Slider extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    // const block = this.props.item
    return (
      <section className='item-head-2'>
        {/* <div className='item-body-2'>
          <i className='fa fa-book' aria-hidden='true'></i> {this.props.item[1]}
        </div>
        <div className='item-body-2'>
          <i className='fa fa-book' aria-hidden='true'></i> {this.props.item[2]}
        </div>
        <div className='item-body-2'>
          <i className='fa fa-book' aria-hidden='true'></i> {this.props.item[3]}
        </div> */}
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
          <i className='fa fa-calendar' aria-hidden='true'></i> Debit
        </div>
        <div className='item-body-2'>
          <i className='fa fa-money'></i> Grow Business
        </div>
        <div className='item-body-2'>
          <i className='fa fa-question' aria-hidden='true'></i> FAQ
        </div>
      </section>
    )
  }
}
export default Slider
