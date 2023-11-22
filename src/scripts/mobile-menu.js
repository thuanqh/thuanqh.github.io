function toggleMobileMenu() {
	const menu = document.getElementById('menu')
	menu.classList.toggle('hidden')
	
	const burger = document.getElementById('burger')
	burger.classList.toggle('hidden')

	const burgerClose = document.getElementById('burger-close')
	burgerClose.classList.toggle('hidden')

	const page = document.getElementsByTagName('main')[0]
	// Hide / show section
	if (page.style.display === 'none') {
		page.style.display = 'flex'
	} else {
		page.style.display = 'none'
	}
}

function goHome() {
	const menu = document.getElementById('menu')
	if (!menu.classList.contains('hidden')) {
		menu.classList.toggle('hidden')
		document.getElementsByTagName('main')[0].style.display = 'flex'
		this.menuOpen ? (this.menuOpen = false) : (this.menuOpen = true)
	}
}

document.getElementById('nav-link-mobile').addEventListener('click', toggleMobileMenu)
document.getElementById('burger').addEventListener('click', toggleMobileMenu)
document.getElementById('burger-close').addEventListener('click', toggleMobileMenu)
