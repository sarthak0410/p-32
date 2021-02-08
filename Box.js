class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.visibility=255
      
    }
  
    display(){
    if(this.body.speed<3) {
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect( 0, 0, this.width, this.height);
        pop();
    } 
    else{
        World.remove(world,this.body)
        push()
        this.visibility=this.visibility -5
    } 
    }

    score(){
      if(this.Visiblity<0&&this.Visiblity>-1005){
        score++}
        block1.score();
    block2.score();
    block3.score();
    block4.score(); 
    block5.score(); 
    block6.score();
    block7.score();
    block8.score();
    block9.score(); 
    }
}