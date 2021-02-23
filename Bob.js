class Bob{
    constructor(x,y,radius){
        var options={
           restitution:0.8,
           friction:1,
            density:1
         //isStatic:false
        }
        this.body=Bodies.circle(x,y,10,options);
        this.radius=20;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        
        ellipseMode(RADIUS);
        strokeWeight(2);
        stroke("black");
        fill("red");
        ellipse(0,0,30);
        pop();
    }
}