import React, { Component } from 'react'
import '../css/style.css'
class Reg extends Component {
  render () {
    return (
      <section>
        <h2 className='heading'>Create New Connection</h2>
        <div className='container'>
          <form className='back-gd' action='/regs' method='post'>
            <div className='box-1'>
              <label htmlFor='name'> Business Name</label>
              <input
                type='text'
                placeholder='Enter The Business Name'
                required
                name='name'
                id='name'
              />
            </div>
            <div className='box-1'>
              <label htmlFor='cate'> Category</label>
              <select name='cat' required name='category' id='cate'>
                <option value='food'> Food </option>
                <option value='mobile'> Mobile </option>
                <option value='Repair'> Repair </option>
              </select>
            </div>
            <div className='box-1'>
              <label htmlFor='mobile'>Mobile no</label>
              <input
                type='number'
                placeholder='Enter the mobile number'
                required
                name='mobile'
                id='mobile'
              />
            </div>
            <div className='box-1'>
              <label htmlFor='email-1'>Email</label>
              <input
                type='email'
                placeholder='Enter the email'
                required
                name='email'
                id='email-1'
              />
            </div>
            <div className='box-1'>
              <label htmlFor='address'>Address</label>
              <input
                type='text'
                name='address'
                id='address'
                rows='5'
                placeholder='Enter the address'
              />
            </div>
            <div className='box-1'>
              <label htmlFor='pin'>Pin Code</label>
              <input
                type='number'
                placeholder='Enter the pin-code'
                required
                name='pinCode'
                id='pin'
              />
            </div>
            <div className='box-1'>
              <button id='btn'>Next</button>
            </div>
          </form>
        </div>
      </section>
    )
  }
}

export default Reg
