window.addEventListener('resize', function changeText(event) {
  // Guardando en una variable el elemento h2 de la sección footer.  
  var text = document.getElementById('footer-text');
  // Guardando en una variable el tamaño de window
  var screenSize = window.outerWidth;
  // Condicionando cuando cambia el tamaño de la ventana
  if (screenSize <= 992 && screenSize > 769) {
    text.textContent = '';     
    text.textContent = 'is playing';
  } else if (screenSize <= 768) {
    text.textContent = ''; 
    text.textContent = 'is sleeping';
  } else {
    text.textContent = ''; 
    text.textContent = 'is waking up';
  }
});