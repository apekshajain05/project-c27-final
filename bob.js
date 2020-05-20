class bob {
    constructor(diameter) {
      var options = {
          density:1.0,
          restitution:1.2
          
      }
      this.body = Bodies.circle(220,200,diameter,options);
      this.diameter=diameter;
      World.add(world, this.body);
    }
    display(){
      var pos=this.body.position;
      pos.x=mouseX;
       pos.y=mouseY;
      
      fill("blue");
      ellipseMode(RADIUS);
      ellipse(pos.x, pos.y, this.diameter);
    }
   
  }