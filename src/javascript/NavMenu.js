const menu = document.querySelector('.menu')

const menuMain = menu.querySelector('.menu-main')
const goBack = menu.querySelector('.go-back')
const menuTrigger = document.querySelector('.mobile-menu-trigger')
const closeMenu = menu.querySelector('.mobile-menu-close')
let subMenu

menuMain.addEventListener('click', (e) => {
	console.log('cliced on menu')
	if (!menu.classList.contains('active')) {
		return
	}
	// console.log("cliced on menu2", e.target.closest(".menu-item-has-children"));
	if (e.target.closest('.menu-item-has-children')) {
		const hasChildren = e.target.closest('.menu-item-has-children')
		console.log('sub menu called')
		showSubMenu(hasChildren)
	}
})
goBack.addEventListener('click', () => {
	hideSubMenu()
})
menuTrigger.addEventListener('click', () => {
	toggleMenu()
})
closeMenu.addEventListener('click', () => {
	toggleMenu()
})
document.querySelector('.menu-overlay').addEventListener('click', () => {
	toggleMenu()
})
function toggleMenu() {
	menu.classList.toggle('active')
	document.querySelector('.menu-overlay').classList.toggle('active')
}
function showSubMenu(hasChildren) {
	console.log('submenu')
	subMenu = hasChildren.querySelector('.sub-menu')
	subMenu.classList.add('active')
	subMenu.style.animation = 'slideLeft 0.5s ease forwards'
	const menuTitle = hasChildren.querySelector('i').parentNode.childNodes[0].textContent
	menu.querySelector('.current-menu-title').innerHTML = menuTitle
	menu.querySelector('.mobile-menu-head').classList.add('active')
}

function hideSubMenu() {
	subMenu.style.animation = 'slideRight 0.5s ease forwards'
	setTimeout(() => {
		subMenu.classList.remove('active')
	}, 300)

	menu.querySelector('.current-menu-title').innerHTML = ''
	menu.querySelector('.mobile-menu-head').classList.remove('active')
}

// window.onresize = function(){
//     if(this.innerWidth >991){
//         if(menubar.classList.contains("active")){
//            toggleMenu();
//         }
//     }
// }
