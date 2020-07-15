import React, { Component } from 'react'
import '../css/Home page.css'

class record extends Component {
  render () {
    return (
      <div>
        <section className='record'>
          <h4>Yesterday CashBack Our Customer</h4>
          <p>Make payment win cashback</p>
          <table className='record-item'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Business</th>
                <th>Amount</th>
                <th>Cashback</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Amit</td>
                <td>Retail shop</td>
                <td>5000</td>
                <td>500</td>
              </tr>
              <tr>
                <td>syam lal</td>
                <td>Food</td>
                <td>4000</td>
                <td>400</td>
              </tr>
            </tbody>
          </table>
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
          <h1>Winner Of Week</h1>
          <table className='record-item'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Business</th>
                <th>Amount</th>
                <th>cashback</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mohit</td>
                <td>sport shop</td>
                <td>10000</td>
                <td>1000</td>
              </tr>
              <tr>
                <td>vibhor</td>
                <td>pan shop</td>
                <td>2000</td>
                <td>200</td>
              </tr>
            </tbody>
          </table>
          <section className='item-head-2'>
            <div className='item-body-2'>
              <i className='fa fa-bus' aria-hidden='true'></i> Bus
            </div>
            <div className='item-body-2'>
              <i className='fa fa-car' aria-hidden='true'></i> Car
            </div>
            <div className='item-body-2'>
              <i className='fa fa-train' aria-hidden='true'></i> Train
            </div>
            <div className='item-body-2'>
              <i className='fa fa-plane' aria-hidden='true'></i> Arrow-Plane
            </div>
            <div className='item-body-2'>
              <i className='fa fa-ship'></i> ship
            </div>
            <div className='item-body-2'>
              <i className='fa fa-question' aria-hidden='true'></i> FAQ
            </div>
          </section>
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
        </section>
      </div>
    )
  }
}

export default record
