const btnMenu = document.querySelector('.header-menu')
const overflow = document.querySelector('.overflow')
const menuBottom = document.querySelector('.header-bottom')
const deleteBtn = document.querySelector('.header-bottom .icon')
const menuItems = document.querySelectorAll('.menu-item')

function hideMenuMobile() {
    overflow.classList.remove('show')
    overflow.classList.add('hidden')
    menuBottom.classList.remove('show')
    menuBottom.classList.add('hidden')
}

btnMenu.addEventListener('click', function () {
    overflow.classList.remove('hidden')
    overflow.classList.add('show')
    menuBottom.classList.remove('hidden')
    menuBottom.classList.add('show')

})

overflow.addEventListener('click', hideMenuMobile)
deleteBtn.addEventListener('click', hideMenuMobile)

menuItems.forEach(item => {
    item.onclick = function () {
        const menuChild = item.querySelector('.menu-child')
        menuChild.style.display = menuChild.style.display === 'none' ? 'block' : 'none'
    }
})