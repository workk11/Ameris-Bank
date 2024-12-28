document.getElementById('sign-in-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const userId = document.getElementById('user-id').value;
    const code = document.getElementById('security-code').value;

    if (userId && code) {
        alert('Security Code Submitted Successfully.');
    } else {
        alert('Please fill out all fields.');
    }
});

document.getElementById('cancel-btn').addEventListener('click', function () {
    alert('Sign-in Cancelled.');
});


document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('sign-in-form');
    const errorMessage = document.getElementById('error-message');
  
    // Hardcoded credentials for sign-in
    const validUserId = "amerissavingsuser99";
    const validSecurityCode = "Svin3312";
  
    form.addEventListener('submit', (event) => {
      event.preventDefault();
  
      // Get user input
      const userId = document.getElementById('user-id').value.trim();
      const securityCode = document.getElementById('security-code').value.trim();
  
      // Validate credentials
      if (userId === validUserId && securityCode === validSecurityCode) {
        // Redirect to the dashboard if credentials are valid
        window.location.href = "Ameris-user-account-dashboard.html";
      } else {
        // Display error message if credentials are invalid
        errorMessage.textContent = "Invalid User ID or Security Code. Please try again.";
      }
    });
  });
  