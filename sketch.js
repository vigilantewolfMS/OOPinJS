let bubbles = [];

let fish1 ={
	
		x:200,
		y:600,
		r:0
	
}

function setup() { // built-in P5.JS function -=- this runs once
	createCanvas(900, 800); 
	
	for (let i = 0; i < 9 ; i++)
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
	background(0); // gifve the canvas a black background
	
	textSize(32);
	text("Time:", 20, 50);
	
	displayfish();
	checkInput();

	
	
	
	
	
	for (let i = 0; i < bubbles.length ; i++)
	{
		bubbles[i].move();
		bubbles[i].display();
	}
	
}
function checkInput(){
	
	if (keyIsDown(LEFT_ARROW))
		fish1.x-=5;
	if (keyIsDown(RIGHT_ARROW))
		fish1.x+=5;
	if (keyIsDown(UP_ARROW))
		fish1.y-=3;
	if (keyIsDown(DOWN_ARROW))
		fish1.y+=3;
	
	if(fish1.x>width)
	{
		fish1.x=width;
	}else if (fish1.x<0){
		fish1.x=0
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


	

	function displayfish(){
		stroke(255);
		strokeWeight(1);
		fill(204,101,192,127)
		 // An ellipse
		ellipse(fish1.x, fish1.y, 50, 30);
		// A triangle
		triangle(200, 130, 220, 115, 200, 100);
	}
	







