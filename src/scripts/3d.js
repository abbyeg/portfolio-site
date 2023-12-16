import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';

const scene = new THREE.Scene();
var raycaster = new THREE.Raycaster();
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath( 'draco/gltf/' );

var mouse = new THREE.Vector2();
scene.background = new THREE.Color( 0x999999 );
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const directionalLight1 = new THREE.DirectionalLight( 0xffffff, 1 );
directionalLight1.position.set( 1, 1, 0 );
const directionalLight2 = new THREE.DirectionalLight( 0xffffff, 1 );
directionalLight2.position.set( 0, 1, 1);
const directionalLight3 = new THREE.DirectionalLight( 0xffffff, 1 );
directionalLight3.position.set( 1, 1, 1);
camera.add( directionalLight1 );
camera.add( directionalLight2 );
camera.add( directionalLight3 );
scene.add( camera );
scene.background = null;

const renderer = new THREE.WebGLRenderer({
  antialias: false,
  alpha:true
});
renderer.setClearColor( 0x000000, 0 );
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
// const hlp = new THREE.AxesHelper(1);
// scene.add(hlp);

const controls = new OrbitControls( camera, renderer.domElement );
			controls.target.set( 0, 0.5, 0 );
			controls.update();
			controls.enablePan = false;
			controls.enableDamping = true;

camera.position.z = 5;

const loader = new GLTFLoader();
loader.setDRACOLoader( dracoLoader );

loader.load('websitedemo.glb', function ( gltf ) {
  console.log(gltf);
  const model = gltf.scene;
  // model.scale.set( 2.1, 2.1, 2.1 );
  
  let sphere = model.children[0];
  let cube = model.children[1];
  let textHome = model.children[2];
  sphere.callback = function() { 
    console.log( this.name );
    let curVal = document.getElementById('sphere-counter').innerHTML;
    document.getElementById('sphere-counter').innerHTML = parseInt(curVal) + 1;
  }
  cube.callback = function() { 
    console.log( this.name );
    let curVal = document.getElementById('cube-counter').innerHTML;
    document.getElementById('cube-counter').innerHTML = parseInt(curVal) + 1;
  }
  var material = new THREE.MeshStandardMaterial({ side: THREE.DoubleSide, color: new THREE.Color( 0x6495ED ) });
  sphere.material = material;

  var textMaterial = new THREE.MeshStandardMaterial({ side: THREE.DoubleSide, color: new THREE.Color( 0x000000 ) });
  textHome.material = textMaterial;
  scene.add(model );
  renderer.render(scene, camera);
  function animate() {
    requestAnimationFrame( animate );
    model.rotation.x -= 0.0001;
    model.rotation.y -= 0.001;
    
    controls.update();
    renderer.render( scene, camera );
  }
  animate();
  
}, undefined, function ( error ) {
  console.log('Error loading gltf');
  console.error( error );
});

function onDocumentMouseDown( event ) {

  event.preventDefault();

  mouse.x = ( event.clientX / renderer.domElement.clientWidth ) * 2 - 1;
  mouse.y = -( event.clientY / renderer.domElement.clientHeight ) * 2 + 1;

  raycaster.setFromCamera( mouse, camera );

  var intersects = raycaster.intersectObjects( scene.children ); 

  if ( intersects.length > 0 ) {
      intersects[0].object.callback();
  }

}

var clickEvent = (function() {
  if ('ontouchstart' in document.documentElement === true)
    return 'touchstart';
  else
    return 'click';
})();

window.addEventListener(clickEvent, onDocumentMouseDown, false);

window.onresize = function () {

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize( window.innerWidth, window.innerHeight );

};

