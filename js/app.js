const $ = (selector) => document.querySelector(selector)

$('.popup__open').addEventListener('click', (event) => {
    event.preventDefault()
    $('.popup__wrapper').classList.add('popup__wrapper--active')
})

$('.popup__close').addEventListener('click', () => {
    $('.popup__wrapper').classList.remove('popup__wrapper--active')
})