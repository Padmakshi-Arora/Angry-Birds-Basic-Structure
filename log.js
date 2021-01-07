class Log{

    constructor(x,y,height,angle){

       var options = {
            restitution:0.8,
            density:0.8,
            friction:2
        }

        this.body = Bodies.rectangle(x,y,15,height,options);
        this.width=15;
        this.height=height;
        Body.setAngle(this.body,angle);
        World.add(world,this.body);
    }

    display(){

        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("red");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }

}