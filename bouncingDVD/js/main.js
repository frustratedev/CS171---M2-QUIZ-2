const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera();

const renderer = new THREE.WebGLRenderer();
renderer.setSize( 800, 800 );
document.body.appendChild( renderer.domElement );

const dvd_geometry = new THREE.CircleGeometry(0.25, 0.20);
const dvd_material = new THREE.MeshBasicMaterial( { color: 0x00FFFF } );
const dvd = new THREE.Mesh( dvd_geometry, dvd_material );
scene.add( dvd );

camera.position.z = 15;

let x = 0.0050;
let y = 0.0050;
let bounce = 0;

dvd.position.x=0;
dvd.position.y=0;

function animate() {
    requestAnimationFrame( animate );
    
    dvd.position.x += x;
    dvd.position.y += y;

   if(dvd.position.x > 0.85 && bounce < 9){
       x = -0.0025;
       dvd.material.color.setRGB(Math.random(256),Math.random(256),Math.random(256));
       dvd.scale.x -= 0.1;
       dvd.scale.y -= 0.1;

       bounce++;
   }
   if(dvd.position.x < -0.85 && bounce < 9){
       x = 0.0025;
       dvd.material.color.setRGB(Math.random(256),Math.random(256),Math.random(256));
       dvd.scale.x -= 0.1;
       dvd.scale.y -= 0.1;

       bounce++;
   }
   if(dvd.position.y > 0.9 && bounce < 9){
       y = -0.0035;
       dvd.material.color.setRGB(Math.random(256),Math.random(256),Math.random(256));
       dvd.scale.x -= 0.1;
       dvd.scale.y -= 0.1;

       bounce++;
   }
   if(dvd.position.y < -0.9 && bounce < 9){
       y = 0.0035;
       dvd.material.color.setRGB(Math.random(256),Math.random(256),Math.random(256));
       dvd.scale.x -= 0.1;
       dvd.scale.y -= 0.1;

       bounce++;
   }
   if(bounce==8) {
       dvd.scale.x -= 0.1;
       dvd.scale.y -= 0.1;

       if(dvd.scale.x <=0 && dvd.scale.y <=0){
           dvd.visible=false;
       }
   }
    renderer.render( scene, camera );

};

animate();