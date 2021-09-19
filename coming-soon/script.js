console.log('Corriendo')

const form = document.querySelector('.card__form')
const container = document.querySelector('.card__field')
const emailRegExp = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

form.addEventListener('submit', (e)=>{	

	if(e.target.email.value.trim() === '' || !emailRegExp.test(form.email.value)){
		e.preventDefault()
		container.classList.add('card__field--error')
	}
})

form.email.addEventListener('focus', (e)=>{
	container.classList.remove('card__field--error')
})