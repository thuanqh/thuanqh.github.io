function open(elementId) {
	const element = document.getElementById(elementId);
	const arrow = element.querySelector('.arrow');
	const links = element.querySelector('#links');

	if (links.style.display === 'block') {
		links.style.display = 'none';
		arrow.style.transform = 'rotate(0deg)';
	} else {
		links.style.display = 'block';
		arrow.style.transform = 'rotate(90deg)';
	}
}

const contacts = document.getElementById('contacts');
const contactTitle = contacts.querySelector('.title');
contactTitle.addEventListener('click', (e) => open('contacts'));

const findMe = document.getElementById('find-me-in');
const findMeTitle = findMe.querySelector('.title');
findMeTitle.addEventListener('click', (e) => open('find-me-in'));
