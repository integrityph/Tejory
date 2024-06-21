import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { ColladaLoader } from 'three/addons/loaders/ColladaLoader.js';
import { FBXLoader } from 'three/addons/loaders/FBXLoader.js';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(3,1.5,1);
camera.position.set(2, 1, 1);

var ip = document.querySelector('.ip')
var test = getComputedStyle(ip)
var [w, h] = [parseInt(test.width), parseInt(test.height)]; 

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let obj;

const loader = new ColladaLoader().setPath('tejor/');

loader.load(
  'Tejory.dae',

  function (gltf) {
    obj = gltf.scene;
    scene.add(obj)
  }
)

const renderer = new THREE.WebGLRenderer({ alpha: true  });
renderer.setSize(w, h, false);

ip.appendChild(renderer.domElement); 


const topLight = new THREE.DirectionalLight(0xffffff, 10);
topLight.position.set(10, 6, 1)
topLight.castShadow = true;
scene.add(topLight);

const backLight = new THREE.DirectionalLight(0xffffff, 10);
backLight.position.set(-1, -1, -1)
backLight.castShadow = true;
scene.add(backLight);

const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight)

// scene.background = new THREE.Color(0x212529);

let controls = new OrbitControls(camera, renderer.domElement);
controls.autoRotate = true;
controls.maxDistance = 1;
controls.minDistance = 5;
controls.enablePan = false;
controls.enableRotate = false;
controls.autoRotateSpeed = 4;
console.log(controls)

function animate() {
  requestAnimationFrame(animate);

  controls.update();

  renderer.render(scene, camera);
}

animate();