function Pipe() 
{
	this.gap = 80;
	this.top = random(height-this.gap);
	this.bottom = height-this.top-this.gap;
	this.x = width;
	this.w = 50;
	this.speed = 5;
	this.flag = false;
	this.highlight = false;
	this.flux = 0;
	
	this.hits = function(bird) {
		
		if(bird.x > this.x && bird.x < this.x+this.w) {
			
			if(bird.y < this.top || bird.y > height - this.bottom) {
				this.highlight = true;	
				this.speed = 0;
				this.update();
				
				flag = true;
				flux = 0;
				return flag;
			}
		}	
		else if(bird.y==height) {
			this.highlight = false;	
			this.speed = 0;
			this.update();
			
			flag = true;
			flux = 0;
			return flag;
		}
		
		else {
			flag = false;
			return flag;
		}
	}
	
	this.show = function() {
		fill(100,100);
		rect(this.x+5, 0, this.w, this.top-5);
		rect(this.x+5, height-this.bottom+5, this.w, this.bottom);
		fill(100);
		if(this.highlight)
			fill(255, 0, 0);
		rect(this.x, 0, this.w, this.top);
		rect(this.x, height-this.bottom, this.w, this.bottom);
			
		
	}
		
	this.update = function() {
		this.x -= this.speed;
		this.top += this.flux;
		this.bottom += this.flux;
	}
	
	this.offscreen = function()	{
		if(this.x < -this.w) {
			return true;
			count++;
		}
		
		else
			return false;
	}
}
