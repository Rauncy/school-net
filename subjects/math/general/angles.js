//Requires /math/general/basicmath.js

function degToRad(deg){
  let frac = new Fraction(deg, 180);
  frac.numDeco = "&pi;";
  frac.simplify();
  return frac;
}

function degToGrad(deg){
}

function radToDeg(rad){
  //(rad/pi)*180
  var frac = new Fraction(parseInt(rad)*180, 1);
  frac.numDeco = rad.replace(/[0-9]|./);
  frac.denDeco = "&pi;"
  frac.simplify();

}

function radToGrad(rad){

}

function gradToDeg(grad){

}

function gradToRad(grad){

}
