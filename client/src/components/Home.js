import React, { Component } from 'react'
import '../css/Home page.css'
import BodyBLock from './BodyBlock'
import Hander from '../img/QrCode.png'
class Home extends Component {
  constructor (prop) {
    super(prop)
    this.state = { btn: false, showData: false, img: false, inputTag: false }
  }
  checkAmountValue = e => {
    this.setState({
      showData: e.target.value > 0 ? e.target.value : false,
      btn: true
    })
  }
  showQR = () => {
    this.setState({ img: true, btn: false, inputTag: true })
  }
  backFunction = () => {
    this.setState({ btn: false, showData: false, img: false, inputTag: false })
  }
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
              {this.state.inputTag === false && (
                <input
                  type='number'
                  className='inputTag'
                  name='rec'
                  placeholder='Pay get cashback'
                  onChange={this.checkAmountValue}
                />
              )}{' '}
              {this.state.btn !== false && (
                <div className='AmountSec'>
                  <input
                    type='button'
                    value='Get Money'
                    className='inputTag'
                    id='payBtn'
                    onClick={this.showQR}
                  />
                  <h2> ₹ {this.state.showData} </h2>
                </div>
              )}
              {this.state.img !== false && (
                <div className='AmountSec'>
                  <h2> ₹ {this.state.showData} </h2>
                  <img
                    src={Hander}
                    className='AmountSecImg'
                    alt={'QR code'}
                  />{' '}
                  <br />
                  <input
                    className='inputTag'
                    type='button'
                    onClick={this.backFunction}
                    value='Back'
                  />
                </div>
              )}
            </form>
          </div>
        </section>
        {this.state.showData === false && <BodyBLock />}
      </section>
    )
  }
}

export default Home
