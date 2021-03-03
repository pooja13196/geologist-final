class Rubber {

    constructor(x,y){

        var options={
            'restitution':0,
            'friction':5,
            'density':1
           

        }
        this.body=Matter.Bodies.circle(x,y,25,options);
        this.radius=20;

        World.add(world,this.body);
    }


    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        strokeWeight(2);
        stroke("white");
        fill("yellow");
        ellipse(0,0,this.radius);
        pop();
    }

}