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