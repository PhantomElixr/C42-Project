class Umbrella {
    constructor(x,y){
        var options ={
            isStatic : true
        }
    this.image = loadImage('images/Walking Frame/walking_1.png');
    this.body = Bodies.circle(x,y,30,options);
    World.add(world , this.body);
    }

    display(){
    image(this.image,200-90,425-80,205,300)
    }
}