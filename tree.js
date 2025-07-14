import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(3, 1.5, 1);
camera.position.set(-33.89, 16.43, 6.48);
// camera.position.set(28, 27, 4);

var ip = document.querySelector('.ip');
var test = getComputedStyle(ip);
var [w, h] = [parseInt(test.width), parseInt(test.height)];

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let obj;

// Create a loading manager to control the loading process
const loadingManager = new THREE.LoadingManager();

// Track progress of the loading
// loadingManager.onStart = function (url, itemsLoaded, itemsTotal) {
//   console.log(`Started loading ${url}. Loaded ${itemsLoaded} of ${itemsTotal} files.`);
// };

// loadingManager.onLoad = function () {
//   console.log('All assets loaded');
// };

// loadingManager.onProgress = function (url, itemsLoaded, itemsTotal) {
//   console.log(`Loading ${url}. ${itemsLoaded} of ${itemsTotal} files loaded.`);
// };

// loadingManager.onError = function (url) {
//   console.error(`There was an error loading ${url}`);
// };

// Initialize the GLTF loader with Draco compression
const loader = new GLTFLoader(loadingManager).setPath('tejory-card/');
const dracoloader = new DRACOLoader();
dracoloader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');
dracoloader.setDecoderConfig({ type: 'js' });
loader.setDRACOLoader(dracoloader);

// Load the model asynchronously
loader.load('tejory-card.gltf', function (gltf) {
  obj = gltf.scene;
  scene.add(obj);
});

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(w, h, false);

ip.appendChild(renderer.domElement);

// Set up lighting
const topLight = new THREE.DirectionalLight(0xffffff, 10);
topLight.position.set(10, 6, 1);
topLight.castShadow = true;
scene.add(topLight);

const backLight = new THREE.DirectionalLight(0xffffff, 10);
backLight.position.set(-1, -1, -1);
backLight.castShadow = true;
scene.add(backLight);

const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

// Set up the orbit controls
let controls = new OrbitControls(camera, renderer.domElement);
controls.autoRotate = true;
controls.maxDistance = 10;
controls.minDistance = 40;
controls.autoRotateSpeed = 1;

function animate() {
  requestAnimationFrame(animate);

    // Apply continuous rotation to the pivot (not the object directly)
    if (obj) {
      // Rotate the pivot point around the Y-axis
      obj.parent.rotation.x += 0.005; // This rotates the pivot (and thus the object) around the Y-axis
      obj.parent.rotation.y += 0.005; // This rotates the pivot (and thus the object) around the Y-axis
      obj.parent.rotation.z += 0.005; // This rotates the pivot (and thus the object) around the Y-axis
    }

  controls.update();

  renderer.render(scene, camera);
}

animate();
