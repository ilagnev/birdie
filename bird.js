function Bird() {
	this.y = height / 2;
	this.x = 64;

	this.gravity = 0.6;
	this.velocity = 0;
	this.lift = -12;

	this.show = function() {
		fill(102, 217, 239);
		ellipse(this.x, this.y, 32, 32);
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
		}
	}

	this.up = function(){
		this.velocity += this.lift;
	}
}