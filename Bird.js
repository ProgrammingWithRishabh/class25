class Bird extends BaseClass {
  constructor(x, y) {
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
  } 
  display(){
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    super.display();
  }
    /*var options = {
      'density':1.5,
      'friction': 1.0,
      'restitution':0.5
    };
    this.body = Bodies.rectangle(x, y, 50, 50, options);
    this.width = 50;
    this.height = 50;
    this.image = loadImage("sprites/bird.png");
    World.add(world, this.body);
  };
  display(){
    var pos = this.body.position;
    pos.x = mouseX;
    pos.y = mouseY;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    strokeWeight(3);
    stroke('blue')
    fill('red')
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height);
    pop();
  };*/
};