class Divisions {
 constructor(x, y, w, h){
     options={
        isStatic: true
     }
    this.body = Bodies.rectangle(x, y, w, h, options);
    World.add(world, this.body)
 }

 display(){
     var pos = this.body.position;
     rectMode(CENTER);
     stroke("white");
     fill("white");
     rect(pos.x, pos.y, w, h);
 }
}