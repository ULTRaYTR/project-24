class Stone {
    constructor(x, y) {
      var options = {
        'density':12,
        'friction': 0.9,
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
    
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("red");
			//draw the ellipse here to display the rubber ball
			rect(0,0,this.w,this.h)
			pop()


    }
}