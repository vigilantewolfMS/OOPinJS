let bubbles = [];
let bubblenum = 6;
let timer = 150;
let score = 0;

function setup() { // built-in P5.JS function -=- this runs once
	createCanvas(900, 800); 
	drawbubbles();

	
}

function mousePressed(){
	for (let i=0 ;  i < bubbles.length ; i++)
		bubbles[i].clicked(mouseX, mouseY);
		score++;
}

function drawbubbles(){
	
	bubblenum = random(7,20);
		for (let i = 0; i < bubblenum ; i++){ 
		let x = random(width);
		let y = random (height);
		let r = random (50,100);
		bubbles[i] = new Bubble (x, y, r);
	}
}

function timerdecrease(){
	timer--;
}
function draw() { // built-in P5.JS function -=-  automatic loop that repeats forever
	background(0); // gifve the canvas a black background
	
	textSize(32);
	text("Time:", 20, 50);
	text(timer, 100,50);
	text("Score:",20,100);
	text(score,120,100)
	timerdecrease();

	for (let i = 0; i < bubbles.length ; i++)
	{
		bubbles[i].move();
		bubbles[i].display();
	}
	
	if(timer < 0){
		background(0);
		text("You lose", 300,400);
	}
	if(score == 9)
	{
		background(0);
		text("You win!",300,400);
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
	







