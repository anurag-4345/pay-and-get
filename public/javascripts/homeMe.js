function changeAndShow(event) {
    const payBtn = document.getElementById("payBtn")
    const p = document.getElementById("spanAmount");
    const b1 = document.getElementsByClassName("b1");
    if (event.value <= 0 || event.value === null) {
      p.style.display = "none"
      payBtn.style.display = "none"
      b1[0].style.display = ""
      b1[1].style.display = ""
      b1[2].style.display = ""
    } else {
      b1[0].style.display = "none"
      b1[1].style.display = "none"
      b1[2].style.display = "none"
      p.style.display = "block"
      p.innerText = event.value
      payBtn.style.display = "flex"
    }
  }
  // footer logic
  const home = document.getElementsByClassName('home')
  const join = document.getElementsByClassName('Join')
  const record = document.getElementsByClassName('record')
  const profile = document.getElementsByClassName('profile')

  const view_page = params => {
    if (params === 1) {
      home[0].style.display = 'block'
      join[0].style.display = 'none'
      record[0].style.display = 'none'
      profile[0].style.display = 'none'
    } else if (params === 2) {
      home[0].style.display = 'none'
      join[0].style.display = 'block'
      record[0].style.display = 'none'
      profile[0].style.display = 'none'
    } else if (params === 3) {
      home[0].style.display = 'none'
      join[0].style.display = 'none'
      record[0].style.display = 'block'
      profile[0].style.display = 'none'
    } else if (params === 4) {
      home[0].style.display = 'none'
      join[0].style.display = 'none'
      record[0].style.display = 'none'
      profile[0].style.display = 'block'
    }
  }
  view_page()