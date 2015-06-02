var MOVE_UP = 0;
var MOVE_DOWN = 1;

var UP_ARROW = 38;
var DOWN_ARROW = 40;
var ESC_KEY = 27;
var NOTE_KEY = 192;

document.addEventListener("keydown", keyPressed, true);
document.addEventListener("keyup",   keyReleased, true);

function keyPressed(e) {
		
		switch (e.keyCode) {
			case UP_ARROW: // Up R
				game.rPlayer.moving = UP;
				break;
			case ESC_KEY: // Up L
				game.lPlayer.moving = UP;
				break;
			case DOWN_ARROW: // Down R
				game.rPlayer.moving = DOWN;	 
				break;
			case NOTE_KEY: // Down L
				game.lPlayer.moving = DOWN;
				break;
		}

};

function keyReleased(e) {
	
	switch (e.keyCode) {
		case UP_ARROW: // Up R
			game.rPlayer.moving = 0;
			break;
		case ESC_KEY: // Up L
			game.lPlayer.moving = 0;
			break;
		case DOWN_ARROW: // Down R
			game.rPlayer.moving = 0;	 
			break;
		case NOTE_KEY: // Down L
			game.lPlayer.moving = 0;
			break;
	}
}