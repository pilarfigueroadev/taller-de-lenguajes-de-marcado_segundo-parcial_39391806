const $ = (selector) => document.querySelector(selector)

const handleLogin = () => {
    const USERNAME = 'mari'
    const PASSWORD = '123'

    const username = $('#username').value.trim()
    const password = $('#password').value.trim()
    if (username === USERNAME && password === PASSWORD) {
        window.location.href = `admin.html?user=${username}`
    } else {
        alert('Credenciales incorrectas.')
    }
}

$('.popup__open').addEventListener('click', (event) => {
    event.preventDefault()
    $('.popup__wrapper').classList.add('popup__wrapper--active')
})

$('.popup__close').addEventListener('click', () => {
    $('.popup__wrapper').classList.remove('popup__wrapper--active')
})

$('.form--login').addEventListener('submit', (event) => {
    event.preventDefault()
    handleLogin()
})