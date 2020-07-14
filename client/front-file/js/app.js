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
  localStorage.setItem("login",JSON.stringify(["123@123.com","123"]))
}

loginBtn.addEventListener('click', ToggleElements, false)
sideBtn.addEventListener('click', ToggleElements, false)

const email = document.getElementById("email");
const pass = document.getElementById("pass");
const login = document.querySelector(".login");

  login.addEventListener("click",(e)=>{
    e.preventDefault();
    // localStorage.setItem("log",JSON.stringify([email.value,pass.value]))
    const data = JSON.parse(localStorage.getItem("login"));
      if(data[0] === email.value && data[1] === pass.value){
        console.log(true);
        window.location.pathname = "/registration.html"
      }else{
        document.getElementById("emailError").innerText = "Enter Right email or password"
        document.getElementById("emailError").style.color = "red"
        document.body.style.backgroundColor = "white"
        email.value = ""
        pass.value = ""
      }
  })