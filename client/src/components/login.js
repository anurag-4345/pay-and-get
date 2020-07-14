import React, { Component } from 'react'
import "../css/style.css"
class Login extends Component {
  render () {
    return (
      <div>
        <div className='container'>
          <h1 className='head' id='heads'>
            Pay & Get Cashback
          </h1>
          <session className='btnSession'>
            <center>
              <h3>Select Candidate type</h3>
            </center>
            <button className='side-1 login-btn sm-block'>FSE Login</button>
            <button className='side-2 sm-block' id='backBtn'>
              Back-End Login
            </button>
          </session>
        </div>
        <session className='loginSession'>
          <button className='backBtn'>Back</button>
          <form action='' method='post' id='fromData'>
            <label htmlFor='email' id='emailError'>
              {' '}
              Email{' '}
            </label>
            <input
              type='email'
              placeholder='Enter Email'
              name='email'
              required
              id='email'
            />
            <label htmlFor='pass'> Password </label>
            <input
              placeholder='Enter password'
              type='password'
              required
              name='password'
              id='pass'
            />
            <button className='submit login' id='btn'>
              Login
            </button>
          </form>
        </session>
        <div className='footer'>Welcome and connect us</div>
      </div>
    )
  }
}

export default Login
// <meta charset="UTF-8" />
// <meta name="viewport" content="width=device-width, initial-scale=1.0" />
// <title>Pay with me</title>
// <link rel="stylesheet" href="/css/style.css" />

// <script src="/javascripts/app.js"></script>
