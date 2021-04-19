console.log('Menu v1.0.0 freecodecampg.org by Jesus')

const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./assets/images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./assets/images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./assets/images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./assets/images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./assets/images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./assets/images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./assets/images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./assets/images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./assets/images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 22.99,
    img: "./assets/images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const sectionMenu = document.querySelector('.menu__items')
const buttonsContainer = document.querySelector('.menu__buttons')


function renderItems(itemArray){
		let displayMenu = itemArray.map(item => {
		
		return `<article class="item">
				<div class="item__image">
					<img src="${item.img}" alt="Foto del platillo" class="item__photo">
				</div>
				<div class="item__description">
					<header class="item__header">
						<h2 class="item__title">${item.title}</h2>
						<h3 class="item__price">$ ${item.price}</h3>
					</header>
						<p class="item__text">${item.desc}</p>
				</div>
			</article>`
	})

	displayMenu = displayMenu.join('')

	sectionMenu.innerHTML = displayMenu;
}

function renderButtons(){
	let categories = menu.reduce((category, item)=> {
		
		if(!category.includes(item.category)){
			category.push(item.category)
		}

		return category

	}, ['all'])

	let displayButtons = categories.map(item=> {
		return `<button class="menu__button" data-filter="${item}">${item}</button>`
	})

	displayButtons = displayButtons.join('')

	buttonsContainer.innerHTML = displayButtons
}

//filter function
function filterItems(id){

	let filter = menu.filter(item => item.category===id)

	renderItems(filter)
}

//load items on start 
window.addEventListener('DOMContentLoaded', ()=>{
	renderItems(menu)
	renderButtons()

	const filterButtons = document.querySelectorAll('.menu__button')

	filterButtons.forEach((btn)=>{
		btn.addEventListener('click', (e)=>{

			let category = e.target.dataset.filter;
			
			if(e.target.dataset.filter === 'all'){
				renderItems(menu)
			}

			else {
				filterItems(category)
			}
		})
	})

})







