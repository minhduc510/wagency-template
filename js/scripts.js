const btnMenu = document.querySelector('.header-menu')
const overflow = document.querySelector('.overflow')
const menuBottom = document.querySelector('.header-bottom')
const deleteBtn = document.querySelector('.header-bottom .icon')

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