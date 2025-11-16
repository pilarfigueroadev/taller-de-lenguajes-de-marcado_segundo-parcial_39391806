const $ = (selector) => document.querySelector(selector)

$('.popup__open').addEventListener('click', (event) => {
    event.preventDefault()
    $('.popup__wrapper').classList.add('popup__wrapper--active')
})

$('.popup__close').addEventListener('click', () => {
    $('.popup__wrapper').classList.remove('popup__wrapper--active')
})

$('.form--login').addEventListener('submit', (event) => {
    event.preventDefault()

    const username = $('#username').value.trim()
    const password = $('#password').value.trim()
    if (username === 'mari' && password === '123') {
        window.location.href = `admin.html?user=${username}`
    } else {
        alert('Credenciales incorrectas.')
    }

})