document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('withdrawal-form');
    const errorMessage = document.getElementById('error-message');
  
    // Set minimum withdrawal amount and example balance
    const MIN_WITHDRAWAL_AMOUNT = 17000;
    const ACCOUNT_BALANCE = 15000; // Example balance; adjust as needed
  
    form.addEventListener('submit', (event) => {
      event.preventDefault();
  
      // Get user input
      const withdrawAmount = parseFloat(document.getElementById('withdraw-amount').value);
  
      // Validate the amount
      if (withdrawAmount < MIN_WITHDRAWAL_AMOUNT) {
        errorMessage.textContent = "Amount is not up to the minimum withdrawal amount ($17,000).";
      } else if (withdrawAmount > ACCOUNT_BALANCE) {
        errorMessage.textContent = "The balance in the account is not sufficient for this withdrawal.";
      } else {
        errorMessage.textContent = ""; // Clear error message
        alert("Withdrawal successful!");
        // Redirect to a confirmation or account dashboard page
        window.location.href = "dashboard.html";
      }
    });
  });