class Mango {
    constructor(x, y) {
      var options = {
        isStatic:true,
        friction:1,
        restitution:0,
        density:1.2
      }
      this.body = Bodies.circle(x, y,25, options);
      this.radius = 50
      this.image=loadImage("mango.png")
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