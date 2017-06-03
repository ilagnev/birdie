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

	// update pipes position in reverse mode to be able mutate target array
	pipes.slice().reverse().forEach(function(p, i, target){
		p.update();
		p.show();
		if (p.isOutScreen()) {
			pipes.splice(target.length - 1 - i, 1);
		}

		if (p.hit(bird)) {
			console.log("HIT");
			p.highlight = true;
		} else {
			p.highlight = false;
		}
	});
}

function keyPressed() {
	if (key == " ") {
		bird.up();
	}
}