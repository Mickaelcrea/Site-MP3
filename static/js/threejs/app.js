
//1.toutes les varaibles pour le setup 

//C'est dans le container que l'on va injecter les éléments
//cette variable sera recuperer dans la fonction init (là où il y aura toute la scene)
var container;

//Comme dans Blender, il faut une camera. On la crée
var camera;

//Comme dans Blender, pas de "render" pas de rendu
var renderer;

//l'espace 3d. LA scene où se trouve tous mes éléménts

var scene;

//la varaible maison
var house;



//fontion qui initialise ma scene Three JS
// grace a queryselector je vais cherche la div a la classe scene
//et balance toute la scene three js dedans
function init(){
  //Déclaration+ Affecta
    container =  document.querySelector('.scene');

    // To actually be able to display anything with three.js, we need three things: scene, camera and renderer, so that we can render the scene with camera.
    
    //creeons la scene en Affectant à la varaible deja creer plus haut la fonction Three JS
    scene = new THREE.Scene();


    //parametre de camera
      //fov:field of view = champ de vision
    var fov = 35;
    var aspect = container.clientWidth / container.clientHeight;
    var near = 0.1;
    var far = 500;

    //camera set up
    //equivalent camera  properties Blender

    camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    //la position Z de la camera position correspond à la position sur l'axe des Z cad le gros plan pour resume
    camera.position.set(7, 1, 30);
    camera.rotation.set(.2,0,.1);
    scene.rotation.set(0,63.2,.2);
    scene.position.set(1,-1,1);


    //lumiere
  
    var ambient = new THREE.AmbientLight(0x404040, 2);
    scene.add(ambient);



    var light = new THREE.DirectionalLight(0xffffff, 2);
    light.position.set(50, 50, 100);
    scene.add(light);

    var light2 = new THREE.DirectionalLight(0xfff222, 0.4);
    light.position.set(-150, 50, 100);
    scene.add(light2);

  //Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  container.appendChild(renderer.domElement);
  
    //Load Model
    var loader = new THREE.GLTFLoader();
    loader.load('./3d/scene.gltf', function(gltf){
      scene.add(gltf.scene);
      renderer.render(scene, camera);
      // la variable house me permet de selectionner l'element a animer
      house = gltf.scene;
      // house = gltf.scene.children[0];
      animate();
    });
  }

  // Animation
  var step = 0
  function animate() {
  requestAnimationFrame(animate);
  step += 0.006;
  house.position.y = 3 * Math.abs(Math.sin(step));
  // console.log(2*Math.abs(Math.sin(step)))
  house.rotation.y = Math.sin(step) * (Math.abs(Math.cos(step / 5) / 5));
  renderer.render(scene, camera);

}
  

init();