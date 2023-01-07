const loginName = document.querySelector('.login-name')
const loginButton = document.querySelector('.login-button')
const form = document.querySelector('form')

const loginValidate = ({ target }) => {
	if (target.value.length >= 3) {
		loginButton.removeAttribute('disabled')
		return
	}
	loginButton.setAttribute('disabled', '')
}

const loginSubmit = (event) => {
	event.preventDefault()

	localStorage.setItem('player', loginName.value)
	window.location = 'pages/game.html'
}

loginName.addEventListener('input', loginValidate)
form.addEventListener('submit', loginSubmit)