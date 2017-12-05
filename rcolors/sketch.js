// For red, green, and blue color variables
	var r, g, b; 

function setup() { 
  createCanvas(800,800);
	background(255); 
	//pick colors randomly
	r = random(255); 
	g = random(255); 
	b = random(255); 
}

function draw() { 
	//ellipse 
	strokeWeight(2);
	stroke(r, g, b); 
	fill(r, g, b);
	ellipse(mouseX, mouseY, 25, 25);
	ellipse(mouseX, mouseY, 50, 50); 
} 

function mouseWheel() {
	background(255);
}

function mousePressed() {
	var d = dist(mouseX, mouseY, 65, 65);
	//Pick new random color values
	r = random(255);
  g = random(255);
  b = random(255);
}

