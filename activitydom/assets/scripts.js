document.addEventListener("DOMContentLoaded", function() {
    let colorDisplay = document.getElementById('div-body');
    let buttons = document.querySelectorAll('.btn');
    buttons.forEach(function(button) {
      button.addEventListener('click', function() {
        colorDisplay.style.backgroundColor = getComputedStyle(this).getPropertyValue('background-color');
      });
    });
  });