/*Santino Xavier Contrera, TP1, comisión 3.
Video: https://www.youtube.com/watch?v=5UdVeRtzIOM
Instrucciones de teclas:
Mantener espacio y mover el mouse para movimiento
Presionar W y S para variar distancia X de lineas
Presionar R para reiniciar valores*/

let patron;
let colorZona0, colorZona1, colorZona2, colorZona3;
let animar = false;
let desplazamiento = 0;
let separarLineas = 17;

function preload() {
  patron = loadImage("zigzag.jpg");
}

function setup() {
  createCanvas(800, 400);
  colorZona0 = color(230);
  colorZona1 = color(230);  
  colorZona2 = color(230);
  colorZona3 = color(230);
}

function draw() {
  noStroke();
  fill(colorZona0); rect(400, 0, 400, 100);
  fill(colorZona1); rect(400, 100, 400, 100);
  fill(colorZona2); rect(400, 200, 400, 100);
  fill(colorZona3); rect(400, 300, 400, 100);
  stroke(1);
  
  for ( let x = 315; x <= 830; x += separarLineas ){
   for ( let y = 0-30; y < 400; y += 110 ) {
   dibujarZigzag (x + desplazamiento, y , 50 , 110);
  }              //ciclo for anidado
 }
  
  if (animar) {
   let velocidad = calcularVelocidad(mouseX);
   desplazamiento += velocidad;
   desplazamiento%=50;
 }
 image(patron, 0, 0, 400, 400);
}

function mousePressed() {
  if (mouseX > 400) {
  let zona = (mouseY / 100) >> 0;

  if (zona == 0) colorZona0 = color(random(255), random(255), random(255));
  if (zona == 1) colorZona1 = color(random(255), random(255), random(255));
  if (zona == 2) colorZona2 = color(random(255), random(255), random(255));
  if (zona == 3) colorZona3 = color(random(255), random(255), random(255));
 console.log("Velocidad de animación:", dist(mouseX, mouseY, 0, height/2));
  }
 }
function keyPressed() {
  if (key == ' ') {animar = true;} 
  if (key == 'w') {separarLineas += 3;}
  if (key == 's') {separarLineas -= 3;}
  if (key == 'r') {
   colorZona0 = color(230);
   colorZona1 = color(230);
   colorZona2 = color(230);
   colorZona3 = color(230);
   desplazamiento = 0;
   separarLineas = 17;}
}
function keyReleased(){
  if (key == ' ') {animar = false;
}}

function calcularVelocidad(posMouseX) {
  return map(posMouseX, 0, width, 0, 5);
}
