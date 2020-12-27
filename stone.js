class Stone  {
    constructor(x, y) {
      var options = {
        isStatic:false,
        restitution:0,
        friction:1,
        density:1.2
      }
      this.body = Bodies.circle(x, y,25, options);
      this.radius = 50
      this.image=loadImage("stone.png")
      World.add(world, this.body);
    }
    display(){
      push()
      translate(this.body.position.x,this.body.position.y)
      strokeWeight(5)
      stroke('blue')
      fill('red')
      imageMode(CENTER)
      image(this.image,0,0,this.radius,this.radius)
      pop()
    }
  }