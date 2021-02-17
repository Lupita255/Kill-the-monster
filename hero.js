class Hero {
    constructor(x,y,r){
        var options={
            density:0.08,
            frictionAir:1

        }
        this.body=Bodies.rectangle(x,y,r,r,options)
        this.r=r;
        this.image=loadImage("Superhero-01.png");
        
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        var angle=this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        imageMode(RADIUS)
        image(this.image,0,0,this.r,this.r)
        pop()
    }
}
