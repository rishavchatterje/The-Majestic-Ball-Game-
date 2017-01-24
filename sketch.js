var bird;
var pipes;
var f;
var xt, time, ctr;
var str;

function setup() {
	bird;
	pipes = [];
	f = false;
	xt = 0, time = 0, ctr = 0;
	str = "SPACE/CLICK";
	noStroke();
	createCanvas(windowWidth*0.85, windowHeight*0.85);
	bird = new Bird();
	bird.velocity = 0; bird.gravity = 0;
	if(ctr==1)
		pipes.push(new Pipe());
}

function draw() {
	background(200,100);
	fill(0);
	textSize(30);
	text(""+str, width*0.3, height*0.5);
	for(var i=pipes.length-1; i>=0; i--) {
		f = pipes[i].hits(bird);
		pipes[i].flux = 0.5*sin(frameCount/10);
		if(f==true) {
			bird.gravity = 0;
			bird.lift = 0;
			bird.velocity = 0;
		
		for(var j=0; j<pipes.length; j++) {
				pipes[j].speed = 0;
				pipes[j].flux = 0;
				pipes[j].show();
				pipes[j].update();
			}

			fill(255)
			textSize(50);
			text(xt, (width/2), (height/2));
			fill(0)
			textSize(35);
			text("SPACE/CLICK", 10, 100);
			break;
		}

		else {
			f=false;
			pipes[i].show();
			pipes[i].update();
		}	
		
		if(pipes[i].offscreen()) {
				pipes.splice(i,1);
				xt++;
		}
	}
	
	bird.update();
	bird.show();
	
	if(f==false) {
		if(frameCount%60 == 0) {
			if(ctr==1)
				time++;
		}
		if(frameCount % 80 == 0) {
			if(ctr==1)
				pipes.push(new Pipe());
		}
	}
	fill(0,0,0,255);
	textSize(24);
	text(xt, width-20, 50);
	text("Time:" +time, 10, 50);
}
	
function keyPressed() {
	if(f==false) {
		if(key==' ') {
		if(ctr==0) {
			ctr = 1;
			bird.velocity += bird.lift*0.6; bird.gravity = 1;
			str = " ";
		}
		bird.up();
		console.log("space");
		console.log(xt);
		}
	}
	else {
		if(key==' ') {
			setup();
			console.log("space");
			//console.log("HIT")
		}
	}
}	

function mouseClicked() {
	if(f==false) {
		if(ctr==0) {
			ctr = 1;
			bird.velocity += bird.lift*0.6; bird.gravity = 1;
			str = " "
		}
		bird.up();
		console.log("click");
		console.log(xt);
	}
	
	else {
		setup();
		console.log("click");
		console.log("HIT")
	}
}	