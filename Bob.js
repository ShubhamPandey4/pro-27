class Bob{
    constructor(x,y,r){
        var options={
            restitution:0.3,
            isStatic:true,
            friction:0.5,
            density:1.2
        }
    this.x=x;
    this.y=y;
    this.r=r;
    this.body=Bodies.circle(this.x, this.y,this.r, options)
    World.add(world, this.body);
    }
    display()
    {
        var bobpos=this.body.position;
        push()
        translate(bobpos.x, bobpos.y);
        ellipseMode(RADIUS);
        strokeWeight(3);
        fill(255,0,255);
        ellipse(0,0,this.r,this.r);
        pop()
    }
}