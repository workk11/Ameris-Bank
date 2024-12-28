document.addEventListener('DOMContentLoaded', () => {
    const paymentForm = document.getElementById('payment-form');
    const proceedButton = document.getElementById('proceed-button');
    const paymentOptions = document.querySelectorAll('input[name="payment"]');
  
    // Enable the proceed button only when a payment option is selected
    paymentOptions.forEach(option => {
      option.addEventListener('change', () => {
        proceedButton.disabled = !paymentForm.querySelector('input[name="payment"]:checked');
      });
    });
  
    // Redirect based on the selected payment option
    paymentForm.addEventListener('submit', event => {
      event.preventDefault(); // Prevent the form from submitting normally
      const selectedOption = paymentForm.querySelector('input[name="payment"]:checked');
      if (selectedOption) {
        let redirectUrl = '';
        switch (selectedOption.value) {
          case 'credit-card':
            redirectUrl = 'Ameris-edit-card-deposit-method.html'; // Update with your credit card payment page URL
            break;
          case 'paypal':
            redirectUrl = 'Ameris-edit-online-banking-deposit-method.html'; // Update with your PayPal payment page URL
            break;
          case 'crypto':
            redirectUrl = 'Ameris-edit-bank-deposit-method.html'; // Update with your cryptocurrency payment page URL
            break;
          default:
            alert('Invalid payment option selected');
        }
        if (redirectUrl) window.location.href = redirectUrl;
      }
    });
  });
  

  document.addEventListener('DOMContentLoaded', () => {
    const paymentForm = document.getElementById('payment-form');
    const deleteButton = document.getElementById('delete-button');
    const paymentOptions = document.querySelectorAll('input[name="payment"]');
  
    // Enable the delete button only when a payment option is selected
    paymentOptions.forEach(option => {
      option.addEventListener('change', () => {
        deleteButton.disabled = !paymentForm.querySelector('input[name="payment"]:checked');
      });
    });
  
    // Delete the selected payment option
    deleteButton.addEventListener('click', event => {
      event.preventDefault(); // Prevent form submission
      const selectedOption = paymentForm.querySelector('input[name="payment"]:checked');
      if (selectedOption) {
        const parentDiv = selectedOption.closest('.payment-option');
        parentDiv.remove(); // Remove the selected payment option
        deleteButton.disabled = true; // Disable the button since no option is selected
      }
    });
  });




  document.querySelectorAll('.btn-danger').forEach(button => {
    button.addEventListener('click', () => {
        alert('Are you sure you want to delete this deposit option?');
    });
});

document.querySelector('.btn-add').addEventListener('click', () => {
    alert('Redirecting to Add a new deposit method page...');
});

document.querySelector('.btn-primary').addEventListener('click', () => {
    alert('Redirecting to Deposit details page...');
});