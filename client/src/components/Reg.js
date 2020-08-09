import React, { Component } from 'react'
import '../css/style.css'
class Reg extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "", cate: "", mobile: "", email: "", address: "", pinCode: ""
    }
  }

  postData() {
    fetch("http://localhost:3001/basicDetails", {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded; charset=utf-8"
      },
      body: `name=${this.state.name}&category=${this.state.cate}&mobile=${this.state.mobile}&email=${this.state.email}&address=${this.state.address}&pinCode=${this.state.pincode}`
    }).then(res => res.json())
      .then(data => this.setState({
        name: this.state.name,
        category: this.state.cate,
        mobile: this.state.mobile,
        email: this.state.email,
        address: this.state.address,
        pinCode: this.state.pincode
      }))
  }

  updateValue(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <section>
        <h2 className='heading'>Create New Connection</h2>
        <div className='container'>
          <form className='back-gd' onSubmit={this.postData.bind(this)}>
            <div className='box-1'>
              <label htmlFor='name'> Business Name</label>
              <input onChange={this.updateValue.bind(this)}
                type='text'
                placeholder='Business Name'
                required
                name='name'
                id='name'
              />
            </div>
            <div className='box-1'>
              <label htmlFor='cate'> Category</label>
              <select name='cate' onClick={this.updateValue.bind(this)} id='cate'>
                <option value=''> Select </option>
                <option value='food'> Food </option>
                <option value='mobile'> Mobile </option>
                <option value='Repair'> Repair </option>
              </select>
            </div>
            <div className='box-1'>
              <label htmlFor='mobile'>Mobile no</label>
              <input onChange={this.updateValue.bind(this)}
                type='number'
                placeholder='Mobile number'
                required
                name='mobile'
                id='mobile'
              />
            </div>
            <div className='box-1'>
              <label htmlFor='email-1'>Email</label>
              <input onChange={this.updateValue.bind(this)}
                type='email'
                placeholder='Email'
                required
                name='email'
                id='email-1'
              />
            </div>
            <div className='box-1'>
              <label htmlFor='address'>Address</label>
              <input onChange={this.updateValue.bind(this)}
                type='text'
                name='address'
                id='address'
                rows='5'
                placeholder='Address'
              />
            </div>
            <div className='box-1'>
              <label htmlFor='pin'>Pin Code</label>
              <input onChange={this.updateValue.bind(this)}
                type='number'
                placeholder='Pin-code'
                required
                name='pinCode'
                id='pin'
              />
            </div>
            <div className='box-1'>
              <button id='btn' >Submit</button>
            </div>
          </form>
        </div>
      </section>
    )
  }
}

export default Reg
