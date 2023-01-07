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
	timerToStart()
	setName()
}

const createCard = (characters) => {
	const cardGrid = document.querySelector('.card-grid')

	characters.forEach((character) => {
		const card = createElement('div', 'card')
		card.setAttribute('character', character)
		// card.setAttribute('character', 'beth')
		cardGrid.appendChild(card)

		const front = createElement('div', 'face front')
		front.style.backgroundImage = `url(../images/${character}.png)`
		// front.style.backgroundImage = `url(../images/beth.png)`
		card.appendChild(front)

		const back = createElement('div', 'face back')
		back.style.backgroundImage = 'url(../images/back.png)'
		card.appendChild(back)
	})
}

const createElement = (tag, className) => {
	const element = document.createElement(tag)
	element.className = className
	return element
}

const timerToStart = () => {
	const ContainerCounter = document.querySelector('.counter-to-start')
	const counter = ContainerCounter.childNodes[3]
	let time = 3
	const timerInterval = setInterval(() => {
		counter.innerHTML = time

		if (time == 0) {
			const allCard = document.querySelectorAll('.card')

			allCard.forEach((card) => {
				card.addEventListener('click', revealCard)
			})

			ContainerCounter.style.display = 'none'

			timerCount()
			clearInterval(timerInterval)
			revealAllCards(1000) // miliseconds of cards exposed
		}

		time--
	}, 1000)
}

const timerCount = () => {
	const timer = document.querySelector('.timer')

	const interval = setInterval(() => {
		if (currentTime < 10) {
			timer.innerHTML = '0' + currentTime
		} else {
			timer.innerHTML = currentTime
		}
		currentTime++

		if (correctCards == 10) {
			clearInterval(interval)
			alert('Você ganhou!!')
		}
	}, 1000)
}

const revealAllCards = (time) => {
	const allCard = document.querySelectorAll('.card')
	allCard.forEach((card) => {
		card.classList.add('active')
	})
	setTimeout(() => {
		allCard.forEach((card) => {
			card.classList.remove('active')
		})
	}, time)
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

		attemptsCount()
		checkCard()
	}
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

const attemptsCount = () => {
	const attempts = document.querySelector('.attempts')

	count++
	if (count < 10) {
		attempts.innerHTML = '0' + count
	} else {
		attempts.innerHTML = count
	}
}

startGame()
