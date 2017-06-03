function Pipe() {
	this.top = random(height / 2);
	this.bottom = random(height / 2);

	this.x = width;
	this.width = 20;
	this.speed = 6;
	this.highlight = false;

	this.show = function() {
		this.highlight ? fill(255, 0, 0) : fill(255);
		rect(this.x, 0, this.width, this.top);
		rect(this.x, height - this.bottom, this.width, this.bottom);
	}

	this.update = function() {
		this.x -= this.speed;
	}

	this.isOutScreen = function() {
		return this.x < -this.width;
	}

	this.hit = function(bird) {
		if (bird.y < this.top || bird.y > height - this.bottom) {
			if (bird.x > this.x && bird.x < this.x + this.width) {
				return true;
			}
		}
		return false;
	}
}