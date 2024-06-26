class CannonBall {
    constructor(x, y,) {
        var options = {
            isStatic: true
        }
        this.r = 30;
        this.image = loadImage("./assets/cannonball.png")
        this.trajectory = [];
        this.body = Bodies.circle(x, y, this.r, options);
        this.speed = 0.05;
        this.animation = [this.image];
        this.isSink = false;
        World.add(world, this.body);
    }

    animate(){
        this.speed +=0.05;
    }

    remove(index){
        this.isSink = true;
        Matter.Body.setVelocity(this.body,{x: 0,y: 0});

        if(balls [index].body.position.x >=width){
            this.animation = waterAnimation;
            this.speed = 0.05;
            this.r = 150;
            delete balls[index];

        } else {
            this.animation = waterAnimation;
            this.speed = 0.05;
            this.r = 150;
            setTimeout(() => {
                Matter.World.remove(world,this.body);
                delete balls[index];
            }, 1000);
        }
    }

    shoot() {
        var newAngle = cannon.angle - 28;
        newAngle = newAngle * (3.14 / 180);
        var velocity = p5.Vector.fromAngle(newAngle);
        velocity.mult(0.5);
        Matter.Body.setStatic(this.body, false)
        Matter.Body.setVelocity(this.body, { x: velocity.x * (180 / 3.14), y: velocity.y * (180 / 3.14) })
    }

    display() {
        if (this.body.velocity.x > 0 && this.body.position.x > 300 && !this.isSink) {
            var position = [this.body.position.x, this.body.position.y];
            this.trajectory.push(position);
            for (var i = 0; i < this.trajectory.length; i++) {
                image(this.image, this.trajectory[i][0], this.trajectory[i][1], 5, 5)
            }

        }
        var pos = this.body.position;
        var index = floor(this.speed %this.animation.length);
        push();
        imageMode(CENTER);
        image(this.animation[index], pos.x, pos.y, this.r, this.r);
        pop();
    }
}