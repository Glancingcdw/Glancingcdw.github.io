// Get the button element
const volunteerButton = document.getElementById('volunteer-button');

// Get the form element
const volunteerForm = document.getElementById('volunteer-form');

// Add event listener to the button
volunteerButton.addEventListener('click', () => {
    // Display the form when the button is clicked
    volunteerForm.style.display = 'block';
});
