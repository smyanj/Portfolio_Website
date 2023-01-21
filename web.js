const menuButton = document.getElementById('menu-open')
const navList = document.getElementById('nav-list')

function toggleButton(){
    navList.classList.toggle('show')
}
menuButton.addEventListener('click', toggleButton)
