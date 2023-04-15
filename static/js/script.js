// Initialisation de la scène
const scene = new THREE.Scene();


// Chargement de l'objet 3D
const loader = new THREE.GLTFLoader();
loader.load('./3d/scene.gltf', function (gltf) {
  scene.add(gltf.scene);

  // Positionnement de l'objet
  gltf.scene.position.set(0, 0, 0);

  // Initialisation de l'interface graphique
  const gui = new dat.GUI();

  // Contrôle de la position de l'objet
  const position = gui.addFolder('Position');
  position.add(gltf.scene.position, 'x', -100, 10);
  position.add(gltf.scene.position, 'y', -100, 10);
  position.add(gltf.scene.position, 'z', -100, 10);
  position.open();


    // Contrôle de la rotation de l'objet
    const rotation = gui.addFolder('Rotation');
    rotation.add(gltf.scene.rotation, 'x', -10, 10);
    rotation.add(gltf.scene.rotation, 'y', -10, 10);
    rotation.add(gltf.scene.rotation, 'z', -10, 10);
    rotation.open();
  
  // Contrôle de la taille de l'objet
  const scale = gui.addFolder('Scale');
  scale.add(gltf.scene.scale, 'x', 0, 2);
  scale.add(gltf.scene.scale, 'y', 0, 2);
  scale.add(gltf.scene.scale, 'z', 0, 2);
  scale.open();
  
});

// Création de la caméra
const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 3;
camera.position.y = 200;
camera.position.x = 0;
camera.lookAt(scene.position);

// Création des lumières
const ambientLight = new THREE.AmbientLight(0xffffff, .4);
scene.add(ambientLight);

const pointLight1 = new THREE.PointLight(0xffffff);

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

