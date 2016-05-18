var UP_RIGHT = 0;
var UP_LEFT = 1;
var DOWN_RIGHT = 2;
var DOWN_LEFT = 3;			

function Ball() {
	
	this.x;
	this.y;
	this.direction;
	this.speed = 15;
	this.animation;
	this.animationCounter = 0;
	this.width = 40;
	this.height = this.width;

	this.hitSound = new Audio("audio/hit.wav");
	this.scoreSound = new Audio("audio/point.wav");
	
	this.draw = function() {	

		ctx.save();
		ctx.globalAlpha = 0.9;
		ctx.drawImage( this.animation[this.animationCounter], this.x, this.y);
		ctx.restore();

		if ( this.animationCounter < 3 )
			this.animationCounter++;
		else
			this.animationCounter = 0;
	}
	
	this.init = function() {
		this.x = canvas.width/2 - this.width/2;
		this.y = canvas.height/2 - this.height/2;
		
		this.direction = Math.floor(Math.random() * 4) ;
	}
	
	this.loadAnimation = function () {
		
		this.animation = [];
		
		for ( var i=0; i<4; i++)
			this.animation.push( new Image() );
		
		for ( var i=0; i<4; i++)
			this.animation[i].src = "img/ball" + i + ".png";
	}
	
	this.update = function() {
		
		switch( this.direction ) {
			case UP_RIGHT:
				this.x += this.speed;
				this.y -= this.speed;
				break;
			case UP_LEFT:
				this.x -= this.speed;
				this.y -= this.speed;
				break;
			case DOWN_RIGHT:
				this.x += this.speed;
				this.y += this.speed;
				break;
			case DOWN_LEFT:
				this.x -= this.speed;
				this.y += this.speed;
				break;	
		}
		
	}
	
	
	this.checkCollision = function() {
	
		switch( this.direction ) {
			case UP_RIGHT:
				/* Hit TOP border */
				if ( this.y < 0 ) {
					this.direction = DOWN_RIGHT;
				}
				/* Hit Right-Player */
				else if ( this.y > game.rPlayer.y && this.y < (game.rPlayer.y + game.rPlayer.height) // ball.y between lPlayer's height
					  &&  (this.x + this.width) > game.rPlayer.x 
					  && (this.x + this.width) < (game.rPlayer.x + game.rPlayer.width) ) // ball.x in front of lPlayer
				{ 
					this.direction = UP_LEFT;
					this.hitSound.play();
				}
				/* Hit Right border - Left Player scores  */
				else if ( (this.x + this.width) > canvas.width ) 
				{
					this.scoreSound.play();
					game.lPlayer.addScore();
					game.init();
				}

				break;
			case UP_LEFT:
				/* Hit TOP border */
				if ( this.y < 0 ) 
				{
					this.direction = DOWN_LEFT;
				}
				/* Hit Left-Player */
				else if ( this.y > game.lPlayer.y && this.y < (game.lPlayer.y + game.lPlayer.height) // ball.y between lPlayer's height
					  &&  this.x > game.lPlayer.x && this.x < (game.lPlayer.x + game.lPlayer.width) ) // ball.x in front of lPlayer
				{ 
					this.direction = UP_RIGHT;
					this.hitSound.play();
				}
				/* Hit Left border - Right Player scores  */
				else if ( this.x < 0 ) 
				{
					this.scoreSound.play();
					game.rPlayer.addScore();
					game.init();
				}
				break;
			case DOWN_RIGHT:
				/* Hit BOTTOM border */
				if ( this.y + this.height > canvas.height ) {
					this.direction = UP_RIGHT;
				}
				/* Hit Left-Player */
				else if ( this.y > game.rPlayer.y && this.y < (game.rPlayer.y + game.rPlayer.height) // ball.y between lPlayer's height
					  &&  (this.x + this.width) > game.rPlayer.x 
					  && (this.x + this.width) < (game.rPlayer.x + game.rPlayer.width) ) // ball.x in front of lPlayer
				{ 
					this.direction = DOWN_LEFT;
					this.hitSound.play();
				}
				/* Hit Right border - Left Player scores  */
				else if ( (this.x + this.width) > canvas.width ) 
				{
					this.scoreSound.play();
					game.lPlayer.addScore();
					game.init();
				}
				break;
			case DOWN_LEFT:

				/* Hit BOTTOM border */
				if ( this.y + this.height > canvas.height ) 
				{
					this.direction = UP_LEFT;
				}
				/* Hit Left-Player */
				else if ( this.y > game.lPlayer.y && this.y < (game.lPlayer.y + game.lPlayer.height) // ball.y between lPlayer's height
					  &&  this.x > game.lPlayer.x && this.x < (game.lPlayer.x + game.lPlayer.width) ) // ball.x in front of lPlayer
				{ 
					this.direction = DOWN_RIGHT;
					this.hitSound.play();
				}
				/* Hit Left border - Right Player scores  */
				else if ( this.x < 0 ) 
				{
					this.scoreSound.play();
					game.rPlayer.addScore();
					game.init();
				}
					
				break;	
		}
	}
}
