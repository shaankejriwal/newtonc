class Rope{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 10
        }
        this.bodyB = bodyB;
        this.Rope = Constraint.create(options);
        World.add(world, this.sling);
    }

    display(){

        if(this.sling.bodyA){
            var pointA = this.Rope.bodyA.position;
            var pointB = this.bodyB;
            stroke("green");
                strokeWeight(7);
                line(pointA.x-20, pointA.y, pointB.x-15, pointB.y);
        }
    }
    
}