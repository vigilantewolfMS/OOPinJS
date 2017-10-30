let bubbles = [];

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
	ellipse(this.x, this.y, this.r * 2); // draw an ellipse/circle
}
}

function setup() { // built-in P5.JS function -=- this runs once
	createCanvas(600, 400); 
	bubbles[0] = new Bubble (200, 200, 40);
}

function draw() { // built-in P5.JS function -=-  automatic loop that repeats forever
	background(0); // give the canvas a black background
	bubbles[0].move();
	bubbles[0].display();
}




