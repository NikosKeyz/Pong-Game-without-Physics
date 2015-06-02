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
			
				// if hit on right player
				if ( (this.y + this.height/2) > game.rPlayer.y 
				  && (this.y + this.height/2) < (game.rPlayer.y + game.rPlayer.height) 
				  && (this.x + this.width ) > (canvas.width - 40) ) {
					this.direction = UP_LEFT;
					this.hitSound.play();
				} else if ( this.y < 0 ){ // hit top border
					this.direction = DOWN_RIGHT;
				} else if ( this.x > canvas.width - this.width/2 ) { // hit right border
					this.scoreSound.play();
					game.lPlayer.addScore();
					game.init();
				}
				
				break;
			case UP_LEFT:
			
				// if hit on left player
				if ( (this.y + this.height/2) > game.lPlayer.y 
				  && (this.y + this.height/2) < (game.lPlayer.y + game.lPlayer.height) 
				  && this.x < 40 ) {
					this.direction = UP_RIGHT;
					this.hitSound.play();
				} else if ( this.y < 0 ) { // hit top border
					this.direction = DOWN_LEFT;
				} else if ( this.x + this.width/2 < 0 ) { // hit left border
					this.scoreSound.play();
					game.rPlayer.addScore();
					game.init();
				}
				
				break;
			case DOWN_RIGHT:
			
				// if hit on right player
				if ( (this.y + this.height/2) > game.rPlayer.y 
				  && (this.y + this.height/2) < (game.rPlayer.y + game.rPlayer.height) 
				  && (this.x + this.width ) > (canvas.width - 40) ) {
					this.direction = DOWN_LEFT;
					this.hitSound.play();
				} else if ( this.y > canvas.height - this.height ) {// hit bottom border
					this.direction = UP_RIGHT;
				} else if ( this.x > canvas.width - this.width/2 ) { // hit right border
					this.scoreSound.play();
					game.lPlayer.addScore();
					game.init();
				}

				break;
			case DOWN_LEFT:
			
				// if hit on left player
				if ( (this.y + this.height/2) > game.lPlayer.y 
				  && (this.y + this.height/2) < (game.lPlayer.y + game.lPlayer.height) 
				  && this.x < 40 ) {
					this.direction = DOWN_RIGHT;
					this.hitSound.play();
				} else if ( this.y > canvas.height - this.height ) {// hit bottom border
					this.direction = UP_LEFT;
				} else if ( this.x + this.width/2 < 0 ) { // hit left border
					this.scoreSound.play();
					game.rPlayer.addScore();
					game.init();
				}
					
				break;	
		}
	}
}