class chain{
    constructor(bodyA,bodyB){
        var options={
            stiffness:0.004,
            bodyA:bodyA,
            bodyB:bodyB,
            length:100
        }
        this.chain=Matter.Constraint.create(options);
        World.add(world,this.chain);
        
    }
    display(){
      var A=this.chain.bodyA.position;
      var B=this.chain.bodyB.position;
      //strokeWeight(5.0);
      //stroke("black");
      line(A.x,A.y,B.x,B.y);
    }
}