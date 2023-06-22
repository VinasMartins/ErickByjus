class Ground{
    constructor(x,y,w,h){
       var opitions = {
        isStatic:true

       } 

       this.w = w;
       this.h = h;
       this.body = Bodies.rectangle(x,y,w,h,opitions);

       World.add(world,this.body);

    }

    display(){
        var pos = this.body.position;
        Matter.Body.rotate(this.body,angle);
        push();
        rectMode(CENTER);
        fill("red");
        translate(pos.x,pos.y);
        rotate(angle);
        rect(0,0,this.w,this.h);
        pop();
        angle +=0.1;

    }

}
