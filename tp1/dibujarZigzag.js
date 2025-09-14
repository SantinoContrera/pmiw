function dibujarZigzag( x_, y_,ancho_,alto_){
  push();
  translate(x_, y_);
  strokeWeight(6);
  line(0, 0, ancho_, alto_ / 2);
  line(ancho_, alto_ / 2, 0, alto_);
  pop();
}
