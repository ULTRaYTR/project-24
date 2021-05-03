class Iron {
    constructor(x, y) {
      var options = {
        'density':30,
        'friction': 3,
        'restitution': 0.8
      }

      this.x=x;
		this.y=y;
      this.w=100;
      this.h=50
		this.body=Bodies.rectangle(this.x, this.y, 100,50, options)
		World.add(world, this.body);

    }

    display(){
    
			var Ironpos=this.body.position;		
			push()
			translate(Ironpos.x, Ironpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("white");
			rect(0,0,this.w,this.h)
			pop()


    }
}