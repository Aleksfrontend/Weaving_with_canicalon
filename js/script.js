// Burger Menu Popup
document.addEventListener('DOMContentLoaded', function() {
	const burgerBtn = document.getElementById('burger');
	const burgerPopup = document.getElementById('burgerPopup');
	const popupLinks = document.querySelectorAll('.burger-popup__link, .burger-popup__contact-link');

	// Toggle popup when burger button is clicked
	if (burgerBtn) {
		burgerBtn.addEventListener('click', function(e) {
			e.preventDefault();
			burgerPopup.classList.toggle('active');
		});
	}

	// Close popup when a link is clicked
	popupLinks.forEach(link => {
		link.addEventListener('click', function() {
			burgerPopup.classList.remove('active');
		});
	});

	// Close popup when clicking outside
	document.addEventListener('click', function(e) {
		if (!burgerPopup.contains(e.target) && e.target !== burgerBtn) {
			burgerPopup.classList.remove('active');
		}
	});

	// Close popup on Escape key
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Escape') {
			burgerPopup.classList.remove('active');
		}
	});
});
