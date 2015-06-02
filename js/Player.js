var LEFT = 0;
var RIGHT = 1;
var UP = -1;
var DOWN = 1;


function Player( side ) {
	
	this.x;
	this.y;
	this.height = 90;
	this.width = 30;
	this.moving = 0;
	this.speed = 18;
	this.side = side;
	this.score = 0;
	
	if ( this.side == LEFT )
		this.x = 10;
	else // RIGHT
		this.x = canvas.width-40;

	this.init = function() {	
		this.y = canvas.height/2 - this.height/2;
	}
	
	this.draw = function() {
		
		if ( this.side == LEFT ) {
			ctx.drawImage( game.bgImg, 
						   // crop at
						   canvas.width - 100, this.y, 
						   // crop dimensions
						   this.width, this.height,
						   // draw at
						   this.x, this.y,
						   // draw dimensions
						   this.width, this.height);
		} else { // RIGHT
			ctx.drawImage( game.bgImg, 
						   // crop at
						   100, this.y, 
						   // crop dimensions
						   this.width, this.height,
						   // draw at
						   this.x, this.y,
						   // draw dimensions
						   this.width, this.height);
		}
		
		/* Add a frame around player image */
		ctx.strokeRect( this.x - 1, this.y,
							this.width, this.height);

	}
	
	this.addScore = function() {
		this.score++;
	}
	
	this.updateY = function() {
		
		if ( this.moving == UP && this.y > 0 ) {
			this.y -= this.speed;
		} else if ( this.moving == DOWN && this.y < canvas.height - this.height) {
			this.y += this.speed;
		}
	}
}