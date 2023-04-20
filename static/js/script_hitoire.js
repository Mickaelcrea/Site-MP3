setTimeout(function() {
 const begin = document.getElementById('begin');

 document.body.style.overflow = "hidden"
 begin.style.background = "black";
 begin.style.transition = "background-color 0.2s ease";
 begin.style.position = "absolute";
 begin.style.zIndex = "1000000";
 begin.style.display = "block";
 begin.style.width = "400vh";
 begin.style.height = "400vh";
 begin.style.pointerEvents = "none";
 begin.style.top = "0";
 
 setTimeout(function() {
    begin.style.backgroundColor = "transparent";
 }, 250);

 setTimeout(function() {
    begin.style.display = "none";
  }, 400);
  },);


  
  if (window.location.href.endsWith("z-histoire_act_2.html")) {
   const images = [
      "static/image/act2A.png",
      "static/image/act2.png",
   ];
 
   const image = document.getElementById("acttransi");
   let currentIndex = 0;
 
   function transitionImage() {
      currentIndex++;
      if (currentIndex >= images.length) {
         return;
      }
      image.style.opacity = 0;
      setTimeout(() => {
         image.src = images[currentIndex];
         image.style.opacity = 1;
         image.addEventListener("transitionend", transitionImageOnce);
      }, );
   }
 
   function transitionImageOnce() {
      image.removeEventListener("transitionend", transitionImageOnce);
   }
 
   setTimeout(transitionImage, 1000);
 }

const clickableDiv = document.getElementById("click1");
clickableDiv.addEventListener("click1", function() {

   fetch("z-histoire_act_2.html");
 // Crée un nouvel élément DIV avec une classe pour l'animation
 const overlay = document.createElement('div');
 overlay.classList.add('overlay');

 // Ajoute la couleur d'arrière-plan noire, la propriété z-index élevée et la position relative à l'élément body
 document.body.style.overflow = "hidden"
 overlay.style.background = "transparent";
 overlay.style.transition = "background-color 0.2s ease";
 overlay.style.position = "absolute";
 overlay.style.zIndex = "1000000";
 overlay.style.display = "block";
 overlay.style.width = "400vh";
 overlay.style.height = "400vh";
 overlay.style.top = "0";
 document.body.appendChild(overlay);

 
 setTimeout(function() {
   overlay.style.backgroundColor = "black";
 }, 800);
 // Redirige l'utilisateur vers la nouvelle page après la transition
 setTimeout(function () {
   window.location.href = "z-histoire_act_2.html";
 }, 1000);
});

