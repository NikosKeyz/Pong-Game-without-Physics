function Game( ) {
	
	this.bgImg = new Image();
	this.bgImg.src = "img/bg800.jpg";
	
	this.bgSound = new Audio("audio/bg1.wav");
	this.bgSound.loop = true;
	
	this.lPlayer = new Player( LEFT );
	this.rPlayer = new Player( RIGHT );
	
	this.ball = new Ball();
	this.ball.loadAnimation();
	
	this.init = function() {
		this.ball.init();
		this.lPlayer.init();
		this.rPlayer.init();
		
		this.bgSound.play();
	}
	
	this.draw = function() {
		
		ctx.drawImage( this.bgImg, 0, 0 );
		
		ctx.strokeText( this.lPlayer.score, 
					  canvas.width/4 - ctx.measureText(this.lPlayer.score).width/2,
					  90);
		ctx.strokeText( this.rPlayer.score, canvas.width/4*3, 90);
		
		this.ball.draw();
		
		this.lPlayer.draw();
		this.rPlayer.draw();
		
	}
	
	this.updateBall = function() {
		this.ball.update();
	}
	
	this.updatePlayers = function() {
		
		if ( this.lPlayer.moving != 0 )
			this.lPlayer.updateY();
		if ( this.rPlayer.moving != 0 )
			this.rPlayer.updateY();
	}
}