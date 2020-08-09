const amount = document.getElementById('amount')
const btn = document.getElementById('recived')
const sec = document.getElementById('sec')
const formArea = document.getElementById('form-area')
const Header = document.getElementById('header')
amount.addEventListener('keyup', e => {
  if (e.target.value != 0) {
    btn.style.display = 'block'
    setTimeout(() => {
      formArea.style.minHeight = '100vh'
      formArea.style.padding = '0px'
      header.style.display = 'none'
      sec.style.display = 'none'
    }, 400)
  } else if (e.target.value == '') {
    btn.style.display = 'none'
    setTimeout(() => {
      formArea.style.padding = '30px'
      sec.style.display = 'block'
      formArea.style.minHeight = '10vh'
      header.style.display = 'block'
    }, 500)
  }
})
const sec1 = document.getElementById('sec-1')
const noneElements = () => {
  sec.style.display = 'none'
  formArea.style.display = 'none'
  header.style.display = 'none'
  document.getElementById('sec-value').style.display = 'block'
}
// sec1.addEventListener('click', e => {
//   noneElements()
//   document.getElementById('sec-1-text').style.display = 'block'
// })
const showValue = (e) =>{
  noneElements()
  document.getElementById(`${e.id}-text`).style.display = 'block'
}
const back = () => {
  document.getElementById('sec-value').style.display = 'none'
  window.location.reload()
}