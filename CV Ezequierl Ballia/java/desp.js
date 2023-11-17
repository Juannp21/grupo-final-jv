document.getElementById('cambiarColorBtn').addEventListener('click', function() {
    cambiarColor();
  });
  let competencias = document.getElementById('competencias');
  competencias.addEventListener('mouseover', function() {
    competencias.style.color = '#FF5733'; 
  });

  competencias.addEventListener('mouseout', function() {
    competencias.style.color = ''; 
  });
  function cambiarColor() {
    let header = document.querySelector('header');
    let footer = document.querySelector('footer');

    
    let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);

    
    header.style.backgroundColor = randomColor;
    footer.style.backgroundColor = randomColor;
  }
