class Plinko{
    constructor(x, y, r){
        options={
            isStatic: false
        }

    this.body = Bodies.circle(x, y, r, options);
    this.color(random(0, 255), random(0, 255), random(0, 255));
    World.add(world, this.body);
    }

    display(){
     pos = this.body.position;
     circleMode(CENTER);
     circle(x, y, r)   
    }
}