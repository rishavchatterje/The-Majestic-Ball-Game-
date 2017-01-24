function Bird() {
	this.y = height/2;
	this.x = 70;
	this.gravity = 1;
	this.lift = -20;
	this.velocity = 0;
	
	this.show = function() {
		fill(0);
		ellipse(this.x, this.y, 23+1*sin(frameCount*0.1), 23+1*sin(frameCount*0.1));
	}
	
	this.up = function() {
		this.velocity += this.lift;
	}
	
	this.update = function() {
		this.velocity += this.gravity;
		this.velocity *= 0.95;
		this.y += this.velocity;
		
		if(this.y > height) 
		{
				this.y = height;
				this.velocity = 0;
		}
		
		if(this.y < 0) 
		{
				this.y = 0;
				this.velocity = 0;
		}
	}
}
