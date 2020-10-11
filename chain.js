class Chain {

constructor(bodyA,bodyB){
var options={

    bodyA:bodyA,
    bodyB:bodyB,
    stiffness:0.04,
    length:10

}
this.chain=Constraint.create(options);
World.add(world,this.chain);
}
display(){
    strokeWeight(4)
    line(this.chain.bodyA.postition.x,this.chain.bodyA.postition.y,this.chain.bodyB.postition.x,this.chain.bodyB.postition.y)
}


}
