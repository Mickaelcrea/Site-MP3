// Texte qui s'affiche progressivement
const texte = document.getElementById('texte1').innerHTML;
const texte2 = document.getElementById('texte2').innerHTML;
let i = 0;
let j = 0;
document.getElementById('texte1').innerHTML = '';
document.getElementById('texte2').innerHTML = '';

const interval1 = setInterval(function() {
  if (i < texte.length) {
    document.getElementById('texte1').innerHTML += texte.charAt(i);
    i++;
  } else {
    clearInterval(interval1);
    document.getElementById('texte2').style.display = 'block';
    
    const interval2 = setInterval(function() {
      if (j < texte2.length) {
        document.getElementById('texte2').innerHTML += texte2.charAt(j);
        j++;
        document.getElementById('texte1').style.display = 'none';
      } else {
        clearInterval(interval2);
      }
    }, 50);
  }
}, 50);



  setTimeout(function() {
    // Crée un nouvel élément DIV avec une classe pour l'animation
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');

    // Ajoute le dégradé de couleur noir vers transparent, la propriété z-index élevée et la position relative à la div overlay
    overlay.style.background = "transparent";
    overlay.style.transition = "background-color 2s ease";
    overlay.style.position = "relative";
    overlay.style.zIndex = "1000000";
    overlay.style.display = "block";
    document.body.appendChild(overlay);

    // Obtenez la hauteur totale de la page
    var height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    // Obtenez la largeur totale de la page
    var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

    // Modifiez la taille de la div overlay en utilisant les dimensions calculées
    overlay.style.width = width + "px";
    overlay.style.height = height + "px";

    setTimeout(function() {
        overlay.style.backgroundColor = "black";
      }, 1000);
  }, 7500);

// // Transition vers une autre page après 10 secondes
setTimeout(function() {
  window.location.href = 'z-histoire_act_1.html';
}, 10000);
