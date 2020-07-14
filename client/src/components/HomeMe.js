import React, { Component } from 'react'
import '../css/Home page.css'
class Home extends Component {
  render () {
    return (
      <section>
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
          <h2>Service</h2>
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
              our service{' '}
              <i className='fa fa-arrow-right' aria-hidden='true'></i>
            </div>
            <div className='item-body-1'>
              Loan Policy{' '}
              <i className='fa fa-arrow-right' aria-hidden='true'></i>
            </div>
            <div className='item-body-1'>
              Contact us{' '}
              <i className='fa fa-arrow-right' aria-hidden='true'></i>
            </div>
            <div className='item-body-1'>
              Setting <i className='fa fa-arrow-right' aria-hidden='true'></i>
            </div>
          </section>
        </section>
        <section className='Join'>
          <div className='head-title'>
            <h2>Best in Cashback</h2>
            <h4>Join us</h4>
            <p>make you partner and create your business world wide</p>
          </div>
          <form action='' className='form-body'>
            <h3 className='form-item'>Make you Cards</h3>
            <label className='form-item' htmlFor='name'>
              Name
            </label>
            <input
              className='form-input'
              type='text'
              name='name'
              id='name'
              placeholder='Enter Name'
            />
            <label className='form-item' htmlFor='phone'>
              Phone
            </label>
            <input
              className='form-input'
              type='number'
              name='phone'
              placeholder='Enter Phone'
              id='phone'
            />
            <label className='form-item' htmlFor='name'>
              Email
            </label>
            <input
              className='form-input'
              type='email'
              name='email'
              id='email'
              placeholder='Enter Email'
            />
            <label className='form-item' htmlFor='address'>
              Address
            </label>
            <input
              className='form-input'
              type='text'
              name='address'
              id='address'
              placeholder='Enter Address'
            />
            <label className='form-item' htmlFor='message'>
              Income
            </label>
            <input
              className='form-input'
              type='number'
              name='message'
              id='message'
              placeholder='Enter Income Year'
            />
            <button className='form-input'>Join us</button>
            <p>Note: Only 50 tranfer then you will join us</p>
          </form>
        </section>
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
        <section className='profile'>
          <section className='item-head-1'>
            <div className='pro-de'>
              <img className='pro' src='/images/header.jpg' alt='' />
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
      </section>
    )
  }
}

export default Home
