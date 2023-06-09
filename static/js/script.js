// Initialisation de la scène
const scene = new THREE.Scene();


// Chargement de l'objet 3D
const loader = new THREE.GLTFLoader();
loader.load('./3d/scene.gltf', function (gltf) {
  scene.add(gltf.scene);

  // Positionnement de l'objet
  gltf.scene.position.set(0, -5, 0);

//   // Initialisation de l'interface graphique
//   const gui = new dat.GUI();

//   // Contrôle de la position de l'objet
//   const position = gui.addFolder('Position');
//   position.add(gltf.scene.position, 'x', -100, 10);
//   position.add(gltf.scene.position, 'y', -100, 10);
//   position.add(gltf.scene.position, 'z', -100, 10);
//   position.open();


//     // Contrôle de la rotation de l'objet
//     const rotation = gui.addFolder('Rotation');
//     rotation.add(gltf.scene.rotation, 'x', -10, 10);
//     rotation.add(gltf.scene.rotation, 'y', -10, 10);
//     rotation.add(gltf.scene.rotation, 'z', -10, 10);
//     rotation.open();
  
//   // Contrôle de la taille de l'objet
//   const scale = gui.addFolder('Scale');
//   scale.add(gltf.scene.scale, 'x', 0, 2);
//   scale.add(gltf.scene.scale, 'y', 0, 2);
//   scale.add(gltf.scene.scale, 'z', 0, 2);
//   scale.open();
  
});

// Création de la caméra
const camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 40;
camera.position.y = 0;
camera.position.x = 0;
camera.lookAt(scene.position);

// Création des lumières
const ambientLight = new THREE.AmbientLight(0xffffff, .4);
scene.add(ambientLight);

const pointLight1 = new THREE.PointLight(0xffffff);
pointLight1.position.set(0, 10, 0); // positionne la lumière en haut de la scène
scene.add(pointLight1);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(1, 1, 1);
scene.add(directionalLight);

const spotLight = new THREE.SpotLight(0xffffff, 0.5);
spotLight.position.set(0, 10, 0);
spotLight.target.position.set(0, 0, 0);
scene.add(spotLight);
scene.add(spotLight.target);



// Initialisation du rendu
const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('#canvas') });
renderer.setClearColor(0xffffff, 0);
renderer.setSize(window.innerWidth, window.innerHeight);

// Ajout de la gestion des contrôles de la caméra
const controls = new THREE.OrbitControls(camera, renderer.domElement);

controls.minPolarAngle = Math.PI / 2; // Limite l'angle vertical minimum de la caméra
controls.maxPolarAngle = Math.PI / 2; // Limite l'angle vertical maximum de la caméra

// Désactivation du mouvement vertical de la caméra
controls.enablePan = false;
controls.enableZoom = false;

// Ajout des lumières
const pointLight2 = new THREE.PointLight(0xffffff, 0.8);
pointLight2.position.set(0, 5, 0);
scene.add(pointLight2);

const pointLight3 = new THREE.PointLight(0xffffff, 0.8);
pointLight3.position.set(0, -5, 0);
scene.add(pointLight3);

// Fonction d'animation
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  controls.update();
}

// Appel de la fonction animate
animate();

// Gestion de la redimensionnement de la fenêtre
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});


// Cette fonction affiche progressivement le contenu d'un élément HTML
const texte = document.getElementById('texte1').innerHTML;
let i = 0;
document.getElementById('texte1').innerHTML = '';

setInterval(function() {
  if (i < texte.length) {
    document.getElementById('texte1').innerHTML += texte.charAt(i);
    i++;
  }
}, 5);



// Transition de page
const contactLink = document.querySelector('#contact-link');

contactLink.addEventListener('click', function (event) {
  event.preventDefault(); // Empêche le comportement de lien par défaut

  // Crée un nouvel élément DIV avec une classe pour l'animation
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');

  // Ajoute la couleur d'arrière-plan noire, la propriété z-index élevée et la position relative à l'élément body
  document.body.style.overflow = "hidden"
  overlay.style.background = "transparent";
  overlay.style.transition = "background-color 0.5s ease";
  overlay.style.position = "absolute";
  overlay.style.zIndex = "1000000";
  overlay.style.display = "block";
  overlay.style.width = "400vh";
  document.body.appendChild(overlay);

  
  setTimeout(function() {
    overlay.style.backgroundColor = "#161617";
  }, 500);
  // Redirige l'utilisateur vers la nouvelle page après la transition
  setTimeout(function () {
    window.location.href = "transition_arg.html";
  }, 1000);
});
