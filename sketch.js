
let linkKingCharles;
let error;
let errorSound;
let kingCharles
var canvas;
let soundLoadedFlag = false;
let webcam;



function preLoad() {
  //kingCharles = loadImage('kingcharles.png', 'King Charles');
  error = loadImage('error.png', 'ERROR');
  errorSound = loadSound('error.mp3', soundLoaded);
}

function soundLoaded(){
  console.log('sound loaded');
  soundLoadedFlag = true;

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight) //updates window width and height
}

function setup() {

  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0); //p5 sketch as bg for website
  canvas.style('z-index','-1'); //-1 makes it go behind the html

  alert('I warned you.');

  webcam = createCapture(VIDEO);
  webcam.size(600, 500);
  
  

}

function draw() {
  background(255);


  
  linkKingCharles = createA('', 'THE PERSON READING THIS IS A LOSER!','_blank'); 
  linkKingCharles.position(800,200);

  

}


function mousePressed() {
  if (linkKingCharles.elt.getBoundingClientRect().top <= mouseY && mouseY <= linkKingCharles.elt.getBoundingClientRect().bottom &&
  linkKingCharles.elt.getBoundingClientRect().left <= mouseX && mouseX <= linkKingCharles.elt.getBoundingClientRect().right) {

console.log('link is pressed');
/*if (errorSound.isLoaded()) {
  errorSound.play(); // Play the sound only if it's loaded
} else {
  console.log('Error: Sound not loaded yet!');
} */

error = createImg('error.png', 'ERROR');
error.style('z-index', '1'); // Make it go in front of other images
error.position(400, 400);

  let noiseX = noise(frameCount*0.01)*width;
  let noiseY = noise(frameCount*0.01+100)*height;
  error.position(noiseX, noiseY);
}

  //let noiseX = noise(frameCount*0.01)*width;
  //let noiseY = noise(frameCount*0.01+100)*height;
  //error.position(noiseX, noiseY);
  //image(error, x, y, random(width*0.1), random(height*0.1) );
  }