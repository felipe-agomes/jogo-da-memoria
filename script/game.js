const card = document.querySelector('.card')

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


            /* working */

const revealCard = ({target}) => {
    console.log(target);
}

startGame()