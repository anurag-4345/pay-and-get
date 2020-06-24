let loginBtn = document.querySelector('.login-btn')
let loginSession = document.querySelector('.loginSession')
loginSession.style.display = 'none'
let sideBtn = document.querySelector('#backBtn')
let ToggleElements = (e, props) => {
  setTimeout(() => {
    loginSession.style.display = 'flex'
    e.preventDefault()
    if (e.target.innerText == 'Back-End Login') {
      var inputItem = document.createElement('input')
      var labels = document.createElement('label')
      inputItem.classList = 'addNewElements'
      labels.classList = 'addNewElements'
      inputItem.placeholder = 'Enter ID'
      labels.innerText = 'Enter ID number'
      inputItem.setAttribute('type', 'number')
      document.getElementById('fromData').prepend(labels, inputItem)
      e.target = 'disabled'
      document.getElementById('heads').innerText = 'Admin Employee login'
    }
    
    document.getElementById('heads').innerText = 'Employee login'
    document.getElementsByClassName('btnSession')[0].style.display = 'none'
    document.getElementsByClassName('footer')[0].style.display = 'none'
    document.body.style.backgroundColor = 'rgb(241, 159, 159)'
    document.querySelector('.backBtn').addEventListener('click', () => {
      if (e.target.innerText == 'Back-End Login') {
        document.getElementById('fromData').removeChild(labels)
        document.getElementById('fromData').removeChild(inputItem)
      }
      document.getElementById('heads').innerText = 'Pay & Get CashBack'
      document.body.style.backgroundColor = 'white'
      setTimeout(() => {
        document.getElementsByClassName('btnSession')[0].style.display = 'flex'
        document.getElementsByClassName('footer')[0].style.display = 'block'
        loginSession.style.display = 'none'
      }, 800)
    })
  }, 800)
}

loginBtn.addEventListener('click', ToggleElements, false)
sideBtn.addEventListener('click', ToggleElements, false)
