let idTO
let champ = document.getElementById("codesecret")



window.addEventListener("load", () => {    
    document.body.addEventListener("keydown",(event) => {
        console.log(event) 

        
        champ.value += event.key // Modifier la valeur du champ
        console.log(champ.value); // voir ;la valeur dans le champ

        // if idto est different de undenifed, je fais un clearTimeOut
        if(idTO > 0 && idTO !== undefined) {
            clearTimeout(idTO)
        }
        
        if(champ.value !== '0246') {
            idTO = setTimeout((p) => { // set timeout
                
                console.log("Time out : " + p); // voir le time out
                champ.value = "" // vide le champ
                

            }, 1000, event.key ); // duree du timeout en millisecondes
        } else {
            window.location.href = "transition_fin.html";
        }
    })
});


// Fonction pour mettre à jour le texte toutes les secondes
function updateCountdown() {
    // Récupération de l'élément span
    var countdown = document.getElementById("countdown");

    // Récupération de la valeur actuelle
    var currentValue = parseInt(countdown.innerHTML);

    // Mise à jour de la valeur
    if (currentValue > 1) {
      countdown.innerHTML = currentValue - 1;
    } else {
      // Redirection vers une autre page après 20 secondes
      window.location.href = "transition_fin.html";
    }
  }

  // Appel de la fonction toutes les secondes
  setInterval(updateCountdown, 1000);