document.addEventListener('DOMContentLoaded', () => {
  let aside = document.querySelector('body > aside')
  let menu = document.querySelector('body > main #menu')
  menu.addEventListener('click', () => {
    aside.classList.toggle('active')
  })
  let back = document.querySelector('body > aside #menu')
  back.addEventListener('click', () => {
    aside.classList.toggle('active')
  })
})
