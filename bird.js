class Bird {
    constructor(x,y){
    
        var options = {
         restitution:1
    
        }
        this.body = Bodies.rectangle(x,y,40,40,options)
        this.width = 40;
        this.height = 40;
        World.add(myworld,this.body);
    
    }
    display(){
    var pos = this.body.position
    pos.x = mouseX
    pos.y = mouseY
    push();
    translate(pos.x,pos.y)
    rotate(this.body.angle)
    fill("red")
    rectMode(CENTER);
    rect(0,0,this.width,this.height)
    
    pop()
    }
    
    }