/*

4 ELEMENTS TO GET STARTED:
    - A scene that will contain object
        - Like a container
        - We put objects, models, lights, etc...
        - At some point we ask Three.js to render that scene

    - Some Objects
        - Primitive geometries
        - Imported models - from 3D Programs
        - Particles
        - Lights
        - Etc...

    - A camera
        - Verical vision angle(video-1.mp4)
        - In degrees
        - Also called fov
    - A renderer


*/

// Variables
const canvas = document.querySelector(".webgl");

// Creating Scene
const scene = new THREE.Scene();
// We need to create a Mesh - Combination of a geometry(the shape) and a material (how it looks)

//OBJECTS
// Creating Red cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "#ff0000" });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Camera
//THE FILED OF VIEW
// THE ASPECT RATIO - The width of the render divided by the height of the render
const sizes = {
  width: 800,
  height: 600,
};

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);
