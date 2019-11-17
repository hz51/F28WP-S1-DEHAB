var myGamePiece;
var myGameCoin;

//enstantiates the game
function startGame() {
	myGameArea.start();
	
	//creates player with width, height, colour and coordinates
	myGamePiece = new component(50, 50, "purple", 100, 200);
	myGameCoin = new componentCoin(10, 10, "Yellow", 200, 200);
	

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
	hitBox(myGamePiece, myGameCoin);
}

//detects when the player character object overlaps with the coin 
function hitBox(source, object){
	//calls getDistance, compares that to the respective sizes of the shapes (is it less than width+width or height+height)
	if (getDistance(source.x, source.y, object.x, object.y) < (object.width + source.width) && getDistance(source.x, source.y, object.x, object.y) < (object.height+source.height)){
		myGamePiece.update('white'); //placeholder effect to signify it works
	}
}

//gets the distance between two objects via pythagoras theorem
function getDistance (x1, y1, x2, y2){
	let xDist = x2-x1;
	let yDist = y2-y1;
	return Math.sqrt( Math.pow(xDist,2) + Math.pow(yDist,2))
}