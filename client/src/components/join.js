import React from 'react'
import '../css/Home page.css'

class JoinComp extends React.Component {
  render () {
    return (
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
    )
  }
}
export default JoinComp
