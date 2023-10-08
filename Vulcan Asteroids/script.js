// Get the menu toggle button and navigation links
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

// Add a click event listener to the menu toggle button
menuToggle.addEventListener('click', () => {
    // Toggle the 'show' class on the navigation links
    navLinks.classList.toggle('show');
});