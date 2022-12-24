let currentTime = 0
let correctCards = 0
let count = 0
let firstCard = ''
let secondCard = ''

const startGame = () => {
	const characters = [
		'summer',
		'scroopy',
		'rick',
		'pickle-rick',
		'pessoa-passaro',
		'morty',
		'meeseeks',
		'jessica',
		'jerry',
		'beth',
	]
	let duplicateCharacters = [...characters, ...characters]
	const shuffleCharacter = duplicateCharacters.sort(() => Math.random() - 0.5)
	createCard(shuffleCharacter)
}

const createCard = (characters) => {
	const cardGrid = document.querySelector('.card-grid')

	setName()

	characters.forEach((character) => {
		const card = createElement('div', 'card')
		card.setAttribute('character', character)
		cardGrid.appendChild(card)

		const front = createElement('div', 'face front')
		front.style.backgroundImage = `url(../images/${character}.png)`
		card.appendChild(front)

		const back = createElement('div', 'face back')
		back.style.backgroundImage = 'url(../images/back.png)'
		card.appendChild(back)

		card.addEventListener('click', revealCard)
	})
}

const createElement = (tag, className) => {
	const element = document.createElement(tag)
	element.className = className
	return element
}

const setName = () => {
	const playerName = document.querySelector('.player-name')
	playerName.childNodes[1].innerHTML = localStorage.getItem('player')
}

const checkCard = () => {
	const firstCharacter = firstCard.getAttribute('character')
	const secondCharacter = secondCard.getAttribute('character')

	if (firstCharacter == secondCharacter) {
		firstCard = ''
		secondCard = ''
		correctCards++
	} else {
		setTimeout(() => {
			firstCard.classList.remove('active')
			secondCard.classList.remove('active')

			firstCard = ''
			secondCard = ''
		}, 500)
	}
}

const meterCount = () => {
	const metter = document.querySelector('.meter')

	count++
	if (count < 10) {
		metter.innerHTML = '0' + count
	} else {
		metter.innerHTML = count
	}
}

const revealCard = ({ target }) => {
	if (target.parentNode.className.includes('active')) {
		return
	}

	if (firstCard == '') {
		target.parentNode.classList.add('active')
		firstCard = target.parentNode
	} else if (secondCard == '') {
		target.parentNode.classList.add('active')
		secondCard = target.parentNode

		meterCount()
		checkCard()
	}

	if (correctCards == 10) {
		setTimeout(() => {
			clearInterval(interval)
			alert('Você ganhou!!')
		}, 500)
	}
}

const timerCount = () => {
	const timer = document.querySelector('.timer')

	if (currentTime < 10) {
		timer.innerHTML = '0' + currentTime
	} else {
		timer.innerHTML = currentTime
	}
	currentTime++
}

const interval = setInterval(timerCount, 1000)

startGame()
