// TOGGLE HAMBURGER MENU FUNCTION
let MenuItems = document.getElementById('MenuItems');
MenuItems.style.maxHeight = '0px';
function menutoggle() {
	if (MenuItems.style.maxHeight == '0px') {
		MenuItems.style.maxHeight = '200px';
	} else {
		MenuItems.style.maxHeight = '0px';
	}
}

// LOCALIZATION
const toggleSwitch = document.querySelector('select');

// PROTUGUESE LOCALIZATION
function languagePT() {
	document.getElementById('lang-btn-txt').innerHTML = `Idioma`;
	document.getElementById('nav-item-inicio').innerHTML = `Início`;
	document.getElementById('nav-item-contato').innerHTML = `Contato`;
	document.getElementById(
		'main-menu-pesquisar'
	).innerHTML = `Pesquisar produtos`;
	document.getElementById('main-menu-lançamentos').innerHTML = `Lançamentos`;
	document.getElementById('main-menu-carrinho').innerHTML = `Carrinho`;
	document.getElementById('main-menu-contato').innerHTML = `Contato`;
}

// ENGLISH LOCALIZATION
function languageEN() {
	document.getElementById('lang-btn-txt').innerHTML = `Language`;
	document.getElementById('nav-item-inicio').innerHTML = `Home`;
	document.getElementById('nav-item-contato').innerHTML = `Contact`;
	document.getElementById('main-menu-pesquisar').innerHTML = `Search products`;
	document.getElementById('main-menu-lançamentos').innerHTML = `New releases`;
	document.getElementById('main-menu-carrinho').innerHTML = `Cart`;
	document.getElementById('main-menu-contato').innerHTML = `Contact`;
}

// Switch Language Theme Dynamically
function switchTheme(event) {
	if (event.target.value === 'PT-BR') {
		localStorage.setItem('theme', event.target.value);
		document.getElementById('flag').setAttribute('src', './img/flag-br.svg');
		languagePT();
	} else {
		document.documentElement.setAttribute('data-theme', 'EN-US');
		localStorage.setItem('theme', event.target.value);
		document.getElementById('flag').setAttribute('src', './img/flag-us.svg');
		languageEN();
	}
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// Set local storage and check Local Storage For selected language on load
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
	document.documentElement.setAttribute('data-theme', currentTheme);
	if (currentTheme === 'PT-BR') {
		toggleSwitch.selected === 'PT-BR';
		document.getElementById('flag').setAttribute('src', './img/flag-br.svg');
		languagePT();
	} else {
		toggleSwitch.selected === 'EN-US';
		document.getElementById('flag').setAttribute('src', './img/flag-us.svg');
		languageEN();
	}
}
