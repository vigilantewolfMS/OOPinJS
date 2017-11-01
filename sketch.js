let bubbles = [];


function setup() { // built-in P5.JS function -=- this runs once
	createCanvas(600, 400); 
	for (let i = 0; i < 6 ; i++)
	{ 
		let x = random(width);
		let y = random (height);
		let r = random (50,100);
	bubbles[i] = new Bubble (x, y, r);
}
}

function mousePressed(){
	for (let i=0 ;  i < bubbles.length ; i++)
		bubbles[i].clicked(mouseX, mouseY);
}

function draw() { // built-in P5.JS function -=-  automatic loop that repeats forever
	background(0); // give the canvas a black background
	for (let i = 0; i < bubbles.length ; i++)
	{
		bubbles[i].move();
		bubbles[i].display();
	}
	
}

class Bubble{
	constructor(x, y, r,){
		this.x = x;
		this.y= y;
		this.r= r;
		this.brightness = 0;

	}
	
	clicked(px, py){
		let d = dist(px, py, this.x, this.y);
		if(d < this.r){
			this.brightness = 255;
		}
	}
	
	move() {
		this.x = this.x + random(-5,5);
		this.y = this.y + random(-5,5);
        }
		
	display() {
	stroke(255); // white outline
	strokeWeight(4); // line width
	fill(this.brightness, 125);
	ellipse(this.x, this.y, this.r, this.r ); // draw an ellipse/circle
}
}




