console.log('Corriendo');

const cards = document.querySelectorAll('.card')
const arrows = document.getElementById('arrows')
let currentDirection = 'next'

function toggleSlider(direction){

	if(direction == 'next'){
		cards[0].classList.add('card--active')
		cards[1].classList.add('card--active')
		currentDirection = 'prev'
	}

	else if (direction == 'prev'){
		cards[0].classList.remove('card--active')
		cards[1].classList.remove('card--active')
		currentDirection = 'next'
	}

}

arrows.addEventListener('click', (e)=>{
	toggleSlider(e.target.dataset.dir)
})

window.addEventListener('keyup', (e)=>{
	if (e.key == 'ArrowRight'){
		toggleSlider('next')
	}

	else if (e.key == 'ArrowLeft'){
		toggleSlider('prev')
	}
})

setInterval(()=>{
	if(currentDirection == 'prev'){
		toggleSlider('prev')
	}

	else if (currentDirection == 'next'){
		toggleSlider('next')
	}

	console.log('interval')

	},	10000)