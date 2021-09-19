console.log('Corriendo')

const displayFieldError = (fieldId) => {

	const fieldElement = document.getElementById(fieldId)
	fieldElement.classList.add('form__field--error')

}

const validateFormInputs = (input) =>{
	const emailRegExp = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	
	if (input.value.trim() === '') {
		return false
	}

	else if (input.name == 'email' && input.value.trim() !== ''){
		const validMail = emailRegExp.test(input.value)
			if(!validMail){
				return false 
			}

			else {
				return true
			}
		}

	else {

		return true

	}
}

const handleSubmit = (form) =>{
	
	const inputElements = form.querySelectorAll('.form__input')
	const formIsValid = {
		name: false,
		lastname: false,
		email: false,
		password: false
	}

	inputElements.forEach(input => {

		input.addEventListener('focus', ()=>{
			input.parentElement.classList.remove('form__field--error')
		})

		if(validateFormInputs(input)){
			input.parentElement.classList.remove('form__field--error')
			formIsValid[input.name] = true 
		}

		else {
			displayFieldError(input.parentElement.id)
		}
	})

	const formValues = Object.values(formIsValid)
	const valid = formValues.findIndex(value => value === false)
	if(valid == -1) form.submit()
}

signupForm.addEventListener('submit', (e) => {
	e.preventDefault()
	handleSubmit(e.target)
})