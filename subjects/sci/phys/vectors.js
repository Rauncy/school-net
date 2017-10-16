function Vector(mag, ang){
  console.log("ner");
  this.magnitude = mag;
  this.angle = ang;

  this.getComponents = function(){
    return [mag*Math.cos(ang), mag*Math.sin(ang)];
  }

  this.toString = function(){
    let comp = this.getComponents();
    return `Magnitude: ${this.magnitude} Angle: ${this.angle}, X Component: ${comp[0]} Y Component: ${comp[1]}`
  }
}
