class Drop{
    constructor(x,y){
        var options = {
            isStatic: false
        }
        this.body = Bodies.rectangle(x,y,4,4,options);
        this.width = 4;
        this.height = 4;
        World.add(world,this.body);
    }
    display(){
        push();
        ellipseMode(RADIUS);
        strokeWeight(3);
            fill("blue");
        ellipse(this.body.position.x, this.body.position.y, this.width, this.height);
      pop();
    }
    update(){
        if(this.body.position.y>height||this.body.position.x>400||this.body.position.x<0){
            Body.setPosition(this.body, {x: random(-100,400), y: random(-100,200)})
        }
    }
}