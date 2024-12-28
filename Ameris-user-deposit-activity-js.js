// Pagination Logic (optional dynamic example)
document.addEventListener('DOMContentLoaded', () => {
    const rows = document.querySelectorAll('table tbody tr');
    const paginationButtons = document.querySelectorAll('.pagination button');
    let rowsPerPage = 5;
  
    function displayRows(startIndex) {
      rows.forEach((row, index) => {
        row.style.display = index >= startIndex && index < startIndex + rowsPerPage ? '' : 'none';
      });
    }
  
    paginationButtons.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        displayRows(index * rowsPerPage);
      });
    });
  
    // Initial display
    displayRows(0);
  });
  