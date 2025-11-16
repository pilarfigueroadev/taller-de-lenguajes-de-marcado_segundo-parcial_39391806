const $ = (selector) => document.querySelector(selector)
const $$ = (selector) => document.querySelectorAll(selector)

const $home = $('.home--page')
const $admin = $('.admin--dashboard')
const $colaborate = $('.colaborate--page')

if ($home) {
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
}

if ($admin) {
    const welcomeAdmin = () => {
        const urlParams = new URLSearchParams(window.location.search)
        const username = urlParams.get('user')
        if (!username) return
        $('.admin__welcome').textContent = `Te damos la bienvenida, ${username}!`
    }
    
    welcomeAdmin()

    const toggleTournamentForm = (formElement, className) => {
        $(formElement).classList.toggle(className)
    }

    const toggleAddTournamentButton = () => {
        const isActive = $('.add--tournament--form').classList.contains('add--tournament--form--active')
        $('.add--tournament--button').textContent = isActive ? 'Cerrar formulario' : 'Agregar torneo'
    }

    $('.add--tournament--button').addEventListener('click', () => {
        toggleTournamentForm('.add--tournament--form', 'add--tournament--form--active')
        toggleAddTournamentButton()
    })

    $(".form .button--secondary").addEventListener('click', (event) => {
        event.preventDefault()
        toggleTournamentForm('.add--tournament--form', 'add--tournament--form--active')
        toggleAddTournamentButton()
        $('.add--tournament--form .form').reset()
    })

    $('.add--tournament--form .form').addEventListener('submit', (event) => {
        event.preventDefault()
        toggleTournamentForm('.add--tournament--form', 'add--tournament--form--active')
        $('.add--tournament--form .form').reset()
    })

    $$('.tournaments .button--primary').forEach(button => {
        button.addEventListener('click', () => {
            toggleTournamentForm('.edit--tournament--form', 'edit--tournament--form--active')
            $('.tournaments').style.display = 'none'
        })
    })

    $$('.tournaments .button--secondary').forEach(button => {
        button.addEventListener('click', (event) => {
            const adminConfirmation = confirm('Seguro que quieres eliminar este evento?')
            if (adminConfirmation) {
                event.target.closest('.grid--item').remove()
            }
        })
    })

    $('.edit--tournament--form .button--secondary').addEventListener('click', (event) => {
        event.preventDefault()
        toggleTournamentForm('.edit--tournament--form', 'edit--tournament--form--active')
        $('.tournaments').style.display = 'block'
        $('.edit--tournament--form .form').reset()
    })

    $('.edit--tournament--form .form').addEventListener('submit', (event) => {
        event.preventDefault()
        toggleTournamentForm('.edit--tournament--form', 'edit--tournament--form--active')
        $('.tournaments').style.display = 'block'
        $('.edit--tournament--form .form').reset()
    })
}
