document.addEventListener('DOMContentLoaded', () => {
    const homeButton = document.getElementById('home-button');
  
    // Redirect to the homepage when the button is clicked
    homeButton.addEventListener('click', () => {
      window.location.href = '/'; // Update this URL to point to your homepage
    });
  });
  