const hamburgerBtn = document.getElementById('hamburger-btn');
const navMenu = document.getElementById('nav-menu');

// Toggle menu when clicking on burger boton
if (hamburgerBtn && navMenu) {
  hamburgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });
}

const navLinks = navMenu.querySelectorAll('a');

// Add listener to close menu for each link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('show');
  });
});

