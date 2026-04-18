document.getElementById('miForm').addEventListener('submit', function(e) {
  e.preventDefault();
  this.reset();
  document.getElementById('mensaje-ok').style.display = 'block';
});