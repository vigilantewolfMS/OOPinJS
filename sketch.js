var bubble = {
	x: 300,
	y: 200,
}

function setup() { // built-in P5.JS function -=- this runs once
	createCanvas(600, 400); 
}

function draw() { // built-in P5.JS function -=-  automatic loop that repeats forever
	background(0); // give the canvas a black background
	move();
	display();
}

function display() {
	stroke(255); // white outline
	strokeWeight(4); // line width
	noFill();
	ellipse(bubble.x, bubble.y, 24, 24); // draw an ellipse/circle
}

function move() {
	bubble.x = bubble.x + random(-5,5);
	bubble.y = bubble.y + random(-5,5);
}