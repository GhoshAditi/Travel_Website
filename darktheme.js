// Select the toggle button
const toggleButton = document.querySelector('#toggle');

// Add an event listener to the button
toggleButton.addEventListener('click', function() {
  // Toggle the dark theme
  document.body.classList.toggle('dark-theme');
});