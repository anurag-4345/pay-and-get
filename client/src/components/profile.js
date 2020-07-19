import React, { Component } from 'react'
import "../css/Home page.css"

class profile extends Component {
  render () {
    return (
      <section className='profile'>
        <section className='item-head-1'>
          <div className='pro-de'>
           <i className="fa fa-window-minimize    "></i>
            <h1>Ram</h1>
          </div>
          <div className='item-body-1'>
            Cashback list{' '}
            <i className='fa fa-arrow-right' aria-hidden='true'></i>
          </div>
          <div className='item-body-1'>
            Profile <i className='fa fa-arrow-right'></i>
          </div>
          <div className='item-body-1'>
            Bank <i className='fa fa-arrow-right' aria-hidden='true'></i>
          </div>
          <div className='item-body-1'>
            Payment setting{' '}
            <i className='fa fa-arrow-right' aria-hidden='true'></i>
          </div>
          <div className='item-body-1'>
            Security Setting{' '}
            <i className='fa fa-arrow-right' aria-hidden='true'></i>
          </div>
          <div className='item-body-1'>
            Payment reminders{' '}
            <i className='fa fa-arrow-right' aria-hidden='true'></i>
          </div>
          <div className='item-body-1'>
            saved address{' '}
            <i className='fa fa-arrow-right' aria-hidden='true'></i>
          </div>
          <div className='item-body-1'>
            Chat Setting{' '}
            <i className='fa fa-arrow-right' aria-hidden='true'></i>
          </div>
          <div className='item-body-1'>
            Extra locker{' '}
            <i className='fa fa-arrow-right' aria-hidden='true'></i>
          </div>
        </section>
      </section>
    )
  }
}


export default profile
