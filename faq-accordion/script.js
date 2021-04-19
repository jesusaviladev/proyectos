console.log('corriendo')
const listElement = document.getElementById('faq');
const articlesContainer = document.querySelectorAll('.question__container');

function removeClass(targetElement){
	for (item of articlesContainer){
		if(item != targetElement){
			item.classList.remove('question__container--show')
			item.parentElement.firstElementChild.classList.remove('question__title--active')
		}
	}

	targetElement.classList.toggle('question__container--show')
}

listElement.addEventListener('click', (e)=>{
	if(e.target.classList.contains('question__title')){
		removeClass(e.target.nextElementSibling)
		e.target.classList.toggle('question__title--active')
	} 

})