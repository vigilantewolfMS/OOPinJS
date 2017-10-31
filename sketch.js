let bubbles = [];


function setup() { // built-in P5.JS function -=- this runs once
	createCanvas(600, 400); 
	for (let i = 0; i < 6 ; i++)
	{ 
		let x = random(width);
		let y = random (height);
		let r = random (10,40);
	bubbles[i] = new Bubble (x, y, r);
}
}


function draw() { // built-in P5.JS function -=-  automatic loop that repeats forever
	background(0); // give the canvas a black background
	for (let i = 0; i < 6 ; i++)
	{
		bubbles[0].move();
		bubbles[0].display();
	}
	
}

class Bubble{
	constructor(x, y, r,){
		this.x = x;
		this.y= y;
		this.r= r;

	}
	move() {
		this.x = this.x + random(-5,5);
		this.y = this.y + random(-5,5);
        }
	display() {
	stroke(255); // white outline
	strokeWeight(4); // line width
	noFill();
	ellipse(this.x, this.y, this.r ); // draw an ellipse/circle
}
}




