var myGamePiece;
var myGameCoin;
var score;

//enstantiates the game
function startGame() {
	myGameArea.start();
	
	//creates player with width, height, colour and coordinates
	myGamePiece = new component(50, 50, "purple", 100, 200);
	myGameCoin = new componentCoin(10, 10, "Yellow", 400, 400);
	score = 0;
	

}

//starts the canvas and sets its size, as well as set up the the frame rate and key commands
var myGameArea = {
	canvas : document.createElement("canvas"),
	start : function() {
		//sets canvas width
		this.canvas.width = screen.width;
		//sets canvas height
		this.canvas.height = screen.height;
		
		this.context = this.canvas.getContext("2d");
		
		document.body.insertBefore(this.canvas, 
document.body.childNodes[0]);
		this.interval = setInterval(updateGameArea, 20);
		window.addEventListener('keydown', function (e) {
			myGameArea.key = e.keyCode;
		})
		window.addEventListener('keyup', function (e) {
			myGameArea.key = false;
		})
	},
	clear : function() {
		this.context.clearRect(0,0, this.canvas.width,
this.canvas.height);
	}
}

function componentCoin(width, height, color, x, y) {
	this.gamearea = myGameArea;
	this.width = width;
	this.height = height;
	this.speedX = 0;
	this.speedY = 0;
	this.x = x;
	this.y = y;
	this.update = function(){
		ctx = myGameArea.context;
		ctx.fillStyle = color;
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}
	this.newPos = function() {
		this.x += this.speedX;
		this.y += this.speedY;
	}
	
}

//sets up starting variables for the player
function component(width, height, color, x, y) {
	this.gamearea = myGameArea;
	this.width = width;
	this.height = height;
	this.speedX = 0;
	this.speedY = 0;
	this.x = x;
	this.y = y;
	this.color = color;
	//can be used to change the color of the object
	this.update = function (newColor){
		this.color = newColor;
		ctx = myGameArea.context;
		ctx.fillStyle = newColor;
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}
	this.newPos = function() {
		this.x += this.speedX;
		this.y += this.speedY;
	}
	
	
}
// Sets up 

//Game controller for the arrow keys
function updateGameArea() {
	myGameArea.clear()
	myGamePiece.speedX = 0;
	myGamePiece.speedY = 0;
//keys now use W,A,S,D keys to move the player
// https://codepen.io/tomhodgins/pen/vXmJdw website shows which keycodes for WASD keys
//changed speed from -1,1,-1,1 to ,-10,10,-10,10 to make player move faster/smoother
	if (myGameArea.key && myGameArea.key == 65) {myGamePiece.speedX =
-10; }
	if (myGameArea.key && myGameArea.key == 68) {myGamePiece.speedX =
10; }
	if (myGameArea.key && myGameArea.key == 87) {myGamePiece.speedY =
-10; }
	if (myGameArea.key && myGameArea.key == 83) {myGamePiece.speedY =
10; }
	myGamePiece.newPos();
	myGamePiece.update(myGamePiece.color);
	myGameCoin.update();
	//calls collision between the two objects
	if (hitBox(myGamePiece, myGameCoin)==true){
		//placeholder test for collision
		myGamePiece.update("white")
		score=score+100;
	}
}

//detects when the player character object overlaps with the coin 
function hitBox(source, object){ {
	//gets the edges of the player object
		//the left side is where X is measured from for some reason
		var playerLeft = source.x;
		//the right side is left+width
		var playerRight = source.x + (source.width);
		//top is where Y is measured from
		var playerTop = source.y;
		//bottom is Y + height
		var playerBottom = source.y + (source.height);
		//gets the dimentions of the coin
		//measurements for the coin are done the same as for the player
		var objectLeft = object.x;
		var objectRight = object.x + (object.width);
		var objectTop = object.y;
		var objectBottom = object.y + (object.height);
		//if there is a collision this is true
		var collision = true;
		//parameters under which collision is false
		if ((playerBottom < objectTop) ||
			(playerTop > objectBottom) ||
			(playerRight < objectLeft) ||
			(playerLeft > objectRight)) {
			collision = false;
		}
		return collision;
	}
}