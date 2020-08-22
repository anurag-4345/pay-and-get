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

// value setup
