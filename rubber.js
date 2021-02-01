class Rubber {
    constructor(x,y){
        var options ={
            restitution:0.3,
            friction:5,
            density:1
        }
        this.body = Bodies.circle(x,y,50);
    World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        fill("yellow");
        circle(0, 0, 50);
        pop();
    }

}