var INGAME = 0;
var MAIN_MENU = 1;
var SETTINGS = 2;
var STATS = 3;

gameState = INGAME;

game = new Game();

window.onload = function() { // when window has load and our assets are ready
	game.init();
	setInterval( update, 50 ); // start update-draw our canvas every 50ms
};

function update() {
	
	switch (gameState) {
		case INGAME:
			game.draw();
			game.ball.checkCollision();
			game.updateBall();
			game.updatePlayers();
			break;
	}
	
}
