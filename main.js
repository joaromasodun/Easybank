const hamburger = document.querySelector('.hamburger')
const close = document.querySelector('.close')
const menu = document.querySelector('.navigation')

console.log(hamburger)

function handleMenuClick() {
  menu.classList.toggle('active')
  hamburger.classList.toggle('active')
  close.classList.toggle('active')

}

hamburger.addEventListener('click', handleMenuClick)
close.addEventListener('click', handleMenuClick)