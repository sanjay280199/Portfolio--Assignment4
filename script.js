// Hamburger menu toggle (already present)
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// AOS initialization
AOS.init({
  duration: 1000,  // animation duration (ms)
  once: true       // only animate once when scrolling down
});

// Form success Message
document.getElementById('contact').addEventListener('submit', function (e) {
  e.preventDefault(); // prevent actual form submission

  // Show success message
  document.getElementById('formMessage').style.display = 'block';

  // Optionally clear form fields
  this.reset();
});
