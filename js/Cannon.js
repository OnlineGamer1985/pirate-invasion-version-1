class Cannon {
  //Constructor is used for creating objects
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.canon_image=loadImage("assets/canon.png")
    this.cannonbase_image=loadImage("assets/cannonBase.png")                                                
  }
  display(){
    push()
    translate(this.x,this.y)
    imageMode(CENTER)
    //for to create cannon top
    image(this.canon_image,0,10,this.width,this.height,)
    //to create the cannon bottom
    image(this.cannonbase_image,10,20,200,200)
    pop()
  }
  
  
}
