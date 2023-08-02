
let btnOpen = document.getElementById('btnOpen')
let btnClose = document.getElementById('btnClose')
let menu = document.getElementById('myMenu')

btnOpen.addEventListener('click', () => {
    menu.classList.remove('-right-full')
    menu.classList.add('right-0')
})

btnClose.addEventListener('click', () => {
    menu.classList.remove('right-0')
    menu.classList.add('-right-full')
})