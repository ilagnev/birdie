var bird, pipes = [];
function setup() {
	createCanvas(400, 600);
	bird = new Bird();
}

function draw() {
	// ellipse(50, 50, 80, 80);
	background(0);
	
	bird.update();
	bird.show();

	if (frameCount % 60 == 0) {
		pipes.push(new Pipe());
	}

	pipes.forEach(function(p){
		p.update();
		p.show();
	});
}

function keyPressed() {
	if (key == " ") {
		bird.up();
	}
}