var bird;
function setup() {
	createCanvas(400, 600);
	bird = new Bird();
}

function draw() {
	// ellipse(50, 50, 80, 80);
	background(0);
	bird.update();
	bird.show();
}

function keyPressed() {
	if (key == " ") {
		bird.up();
	}
}