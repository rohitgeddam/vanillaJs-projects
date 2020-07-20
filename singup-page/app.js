const sidebarBtn = document.querySelector('.sidebar-btn');
const sidebar = document.querySelector('nav');
const signupBtn = document.querySelector('.signupBtn');
const modal = document.querySelector('.modal-container');
const modalClose = document.querySelector('.modal-close');
sidebarBtn.addEventListener('click', () => {
	sidebar.classList.toggle('nav-display');
});

signupBtn.addEventListener('click', () => {
	modal.classList.toggle('display-modal');
});

modalClose.addEventListener('click', () => {
	modal.classList.toggle('display-modal');
});
