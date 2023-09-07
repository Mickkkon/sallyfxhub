window.onload = function () {
	window.addEventListener('scroll', function (e) {
		if (window.pageYOffset > 100) {
			document.querySelector("header").classList.add('is-scrolling');
		} else {
			document.querySelector("header").classList.remove('is-scrolling');
		}
	});
}



document.addEventListener("DOMContentLoaded", function () {
	const menuBtn = document.querySelector('.hamburger');
	const mobileMenu = document.querySelector('.mobile-nav');
	const mobileNavLinks = document.querySelectorAll('.mobile-nav-link'); // Added
  
	menuBtn.addEventListener('click', function () {
	  menuBtn.classList.toggle('is-active');
	  mobileMenu.classList.toggle('is-active');

	});
  
	// Add a click event listener to each mobile-nav link
	mobileNavLinks.forEach(function (link) {
	  link.addEventListener('click', function () {
		menuBtn.classList.remove('is-active'); // Close the menu
		mobileMenu.classList.remove('is-active'); // Close the menu
	  });
	});
  });
  

    // Back to Top Functionality
	const backToTopButton = document.getElementById('back-to-top');

	window.addEventListener('scroll', () => {
	  if (document.documentElement.scrollTop > 300) {
		backToTopButton.style.display = 'block';
	  } else {
		backToTopButton.style.display = 'none';
	  }
	});
	
	backToTopButton.addEventListener('click', () => {
	  document.documentElement.scrollTo({
		top: 0,
		behavior: 'smooth'
	  });
	});
	