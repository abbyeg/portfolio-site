import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();
scene.background = new THREE.Color( 0x999999 );
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const directionalLight1 = new THREE.DirectionalLight( 0xffffff, 1 );
directionalLight1.position.set( 1, 1, 0 );
scene.add( directionalLight1 );
const directionalLight2 = new THREE.DirectionalLight( 0xffffff, 1 );
directionalLight2.position.set( 0, 1, 1);
scene.add( directionalLight2 );
const directionalLight3 = new THREE.DirectionalLight( 0xffffff, 1 );
directionalLight3.position.set( 1, 1, 1);
scene.add( directionalLight3 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
const hlp = new THREE.AxesHelper(1);
scene.add(hlp);

const controls = new OrbitControls( camera, renderer.domElement );
			controls.target.set( 0, 0.5, 0 );
			controls.update();
			controls.enablePan = false;
			controls.enableDamping = true;

camera.position.z = 5;

const loader = new GLTFLoader();

loader.load( 'websitedemo.glb', function ( gltf ) {
  console.log(gltf);
  console.log('Loading gltf');
  scene.add( gltf.scene );
  renderer.render(scene, camera); 
  let world = gltf.scene;
  let children = world.children;
  children[0].callback = function() { 
    console.log( this.name );
    let curVal = document.getElementById('sphere-counter').innerHTML;
    document.getElementById('sphere-counter').innerHTML = parseInt(curVal) + 1;
  }
  children[1].callback = function() { 
    console.log( this.name );
    let curVal = document.getElementById('cube-counter').innerHTML;
    document.getElementById('cube-counter').innerHTML = parseInt(curVal) + 1;
  }
  function animate() {
    requestAnimationFrame( animate );
    world.rotation.x += 0.0001;
    world.rotation.y += 0.001;
    
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



// const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


// const renderer = new THREE.WebGLRenderer();
// renderer.setSize( window.innerWidth, window.innerHeight );
// document.body.appendChild( renderer.domElement );





