let model3D;
let font;

function preload() {
  model3D = loadModel("assets/heartChain.obj", true);
  font = loadFont("assets/NotoSansSC-VariableFont_wght.ttf"); // your .ttf file here
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  pixelDensity(1);

  fill(255);
  textFont(font);
  textSize(400);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(0);

  // Spinning 3D model
  push();
  scale(3);
  rotate(PI);
  rotateY(millis() / 1000);
  // rotateX(millis() / 1000);
  //rotateZ(millis() / 1000);
  ambientLight(255);
  directionalLight(255, 255, 255, 0.5, 1, 0);
  ambientMaterial(255, 0, 0);
  noStroke();
  model(model3D);
  pop();

  // Scrolling 3D Text
  push();

  let txt = "艺术工人  520 Art Workers 520             ";
  let textW = textWidth(txt) / 2.5;

  // Total scroll distance: from (width + textW) ➝ -textW
  let totalScroll = width + textW * 2;
  let scrollX = width + textW - ((frameCount * 2) % totalScroll);

  translate(scrollX, -height / 4, 0);
  text(txt, 0, 0);
  pop();
}
