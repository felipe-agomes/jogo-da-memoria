const card = document.querySelector('.card')
const metter = document.querySelector('.meter')
const timer = document.querySelector('.timer')
let endGame = false

let firstCard = ''
let secondCard = ''
let count = 0

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

const createElement = (tag, className) => {
	const element = document.createElement(tag)
	element.className = className
	return element
}

const createCard = (characters) => {
	const cardGrid = document.querySelector('.card-grid')

	characters.forEach((character) => {
		const card = createElement('div', 'card')
		card.setAttribute('character', 'beth')
		cardGrid.appendChild(card)

		const front = createElement('div', 'face front')
		// front.style.backgroundImage = `url(../images/${character}.png)`
		front.style.backgroundImage = `url(../images/beth.png)`
		card.appendChild(front)

		const back = createElement('div', 'face back')
		back.style.backgroundImage = 'url(../images/back.png)'
		card.appendChild(back)

		// card.addEventListener('click', revealCard)
		card.addEventListener('click', revealCard)
	})
}

const checkCard = () => {
	const firstCharacter = firstCard.getAttribute('character')
	const secondCharacter = secondCard.getAttribute('character')
	
	if (firstCharacter == secondCharacter) {
		firstCard = ''
		secondCard = ''
		return
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
		count++
		timerCount()
		meterCount()
		
		checkCard()
	}
	
	if (count == 10) {
		endGame = true
		alert('You won!!')
	}
}

startGame()

/* working */

const timerCount = () => {
	const currentTime = 0
	while (endGame == false) {
		setInterval(() => {
			if (count < 10) {
				timer.innerHTML = '0' + currentTime
			} else {
				timer.innerHTML = currentTime
			}
			currentTime++
		}, 1000)
	}
}
