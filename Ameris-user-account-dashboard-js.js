document.querySelectorAll('.btn-danger').forEach(button => {
    button.addEventListener('click', () => {
        alert('Are you sure you want to delete this payee?');
    });
});

document.querySelector('.btn-add').addEventListener('click', () => {
    alert('Add new payee form will appear here.');
});

document.querySelector('.btn-primary').addEventListener('click', () => {
    alert('Redirecting to payment setup...');
});
