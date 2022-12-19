const loginName = document.querySelector('.login-name')
const loginButton = document.querySelector('.login-button')
const form = document.querySelector('form')

const loginCheck = ({ target }) => {
	if (target.value.length < 3) {
		loginButton.setAttribute('disabled', '')
		return
	}
	loginButton.removeAttribute('disabled')
}

const loginSubmit = (event) => {
    event.preventDefault()

    localStorage.setItem('player', loginName.value)
    window.location = 'pages/game.html'
}
loginName.addEventListener('input', loginCheck)
form.addEventListener('submit', loginSubmit)