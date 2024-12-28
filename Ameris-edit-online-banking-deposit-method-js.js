document.addEventListener('DOMContentLoaded', () => {
    const cryptoOption = document.getElementById('crypto-option');
    const cryptoDetails = document.querySelector('.crypto-details');
  
    // Show crypto wallet fields when the radio button is selected
    cryptoOption.addEventListener('click', () => {
      cryptoDetails.style.display = 'block';
    });
  
    document.querySelectorAll('input[name="payment"]').forEach((radio) => {
      radio.addEventListener('change', (e) => {
        if (e.target !== cryptoOption.querySelector('input')) {
          cryptoDetails.style.display = 'none';
        }
      });
    });
  
    const submitButton = document.getElementById('submit-btn');
    submitButton.addEventListener('click', () => {
      alert('Deposit Method Edited Successfully!');
    });
  });
  