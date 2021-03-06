var bird;
var pipes = [];
var lives = lives - 1
var mike = 0
function setup() {
  createCanvas(600, 600);
  bird = new Bird();
  pipes.push(new Pipe());
}

function draw() {
  background(3,46,9);

	//pipe information/display on canvas 
  for (var i = pipes.length-1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

		//red flash when bird hits pipe
    if (pipes[i].hits(bird)) {
			console.log("HIT");
    }
    if (pipes[i].offscreen()) {
				
      pipes.splice(i, 1);
    }
  }
//show bird
  bird.update();
  bird.show();
  if (frameCount % 100 == 0) {
    pipes.push(new Pipe());
  }
	
}

//bird moves with mouse click
function mousePressed() {
   {
    bird.up();
    //console.log("SPACE");
  }
}

//bird information/display on canvas 
function Bird() {
  this.y = height/2;
  this.x = 62;

  this.gravity = 0.6;
  this.lift = -15;
  this.velocity = 0;

  this.show = function() {
    fill(34,7, 89);
    ellipse(this.x, this.y, 32, 32);
  }

  this.up = function() {
    this.velocity += this.lift;
  }

  this.update = function() {
    this.velocity += this.gravity;
    this.velocity *= 0.9;
    this.y += this.velocity;

    if (this.y > height) {
      this.y = height;
      this.velocity = 0;
    }

    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }
  }
}

function Pipe() {
  this.top = random(height/2);
  this.bottom = random(height/2);
  this.x = width;
  this.w = 20;
  this.speed = 2;

  this.highlight = false;

	//when the bird hits the pipes 
  this.hits = function(bird) {
    if (bird.y < this.top || bird.y > height - this.bottom) {
      if (bird.x > this.x && bird.x < this.x + this.w) {
        this.highlight = true;
        return true;
      }
    }
    this.highlight = false;
    return false;
  }

  this.show = function() {
    fill(255);
    if (this.highlight) {
			background(255);
      fill(0);
			stroke=0;
			strokeWeight = 0;
			text("GAME OVER", 90,170);
			textSize(40)
			this.speed = 0;
			bird.lift = 0;
			
    }
		
		var lives = lives - 1

		var mike = 0
		
		

    rect(this.x, 0, this.w, this.top);
    rect(this.x, height-this.bottom, this.w, this.bottom);
  }

  this.update = function() {
    this.x -= this.speed;
  }

  this.offscreen = function() {
    if (this.x < -this.w) {
      return true;
    } else {
      return false;
    }
  }
}


