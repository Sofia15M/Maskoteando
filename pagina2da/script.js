let scrollTop = document.querySelector('.scroll-top-btn');

window.addEventListener('scroll', function () {
	if (window.pageYOffset > 70) {
		scrollTop.classList.add('active');
	} else {
		scrollTop.classList.remove('active');
	}
});