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
  if (window.location.href.endsWith("z-histoire_act_1.html")) {
    clickableDiv.addEventListener("click", function() {
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
  }
  
  const clickableImages = document.getElementsByClassName("b2");

  if (window.location.href.endsWith("z-histoire_act_2.html")) {
    let invertPercent = 0;
    let blurAmount = 65;
  
    for (let i = 0; i < clickableImages.length; i++) {
      clickableImages[i].addEventListener("click", function() {
        const backgroundImage = document.getElementById("background-image");
        
        // Augmente l'inversion de 10% à chaque clic
        invertPercent += 2;
        backgroundImage.style.filter = `blur(${blurAmount}px) invert(${invertPercent}%)`;
        
        // Baisse le flou de 1px à chaque clic
        blurAmount -= 2;
        if (blurAmount < 0) {
          blurAmount = 0;
        }
        backgroundImage.style.filter = `blur(${blurAmount}px) invert(${invertPercent}%)`;
      });
    }
  }
  
  const lunette = document.getElementsByClassName("lunette");
  const button = document.querySelector(".lunette .button h3");
  const image = document.querySelector("#image-container img");
  
  if (window.location.href.endsWith("z-histoire_act_8.html")) {
    lunette[0].addEventListener("click", function() {
      // Change le texte du bouton "Prendre les lunettes"
      button.textContent = "regarder vos lunette";
      
      // Change l'image
      image.src = "static/image/act8.png";
      
      // Créez un élément div pour contenir la pop-up
      const popup = document.createElement("div");
      popup.classList.add("popup");
    
      // Ajoutez le code HTML de la pop-up à l'élément div
      popup.innerHTML = `<div class="sketchfab-embed-wrapper" style="width: 70%; height: 70%; position: absolute;z-index: 10; top: 15%; left: 15%;"> <iframe style="width: 100%; height: 100%;" title="Splinter Cell - Night Vision Goggles" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/ae91bf14efd441c3bebed81c82dae876/embed?autostart=1&camera=0"> </iframe> </div> <div class="popout" style="width: 300vh;position: absolute;z-index: 5;top: 0; height: 300vh;"></div>`;
    
      // Ajoutez la pop-up à la page
      document.body.appendChild(popup);
    
      // Ajoutez un écouteur d'événement pour fermer la pop-up lorsque l'utilisateur clique en dehors de celle-ci
      popup.addEventListener("click", function(event) {
        if (event.target === popup) {
          popup.remove();
        }
      });
  
      // Ajoutez un écouteur d'événement pour fermer la pop-up lorsque l'utilisateur clique sur la div popout
      const popout = popup.querySelector('.popout');
      popout.addEventListener('click', function(event) {
        popup.remove();
      });
  
      // Ajoutez un écouteur d'événement pour fermer la pop-up lorsque l'utilisateur clique en dehors de l'iframe
      const iframe = popup.querySelector('iframe');
      iframe.addEventListener('click', function(event) {
        event.stopPropagation();
      });
    });
  }
  
  
  
