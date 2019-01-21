function initStone( stone ){
	stone.x = 70;
	stone.y = 170;
	stone.oy = 170;
	stone.theta = 0;
	stone.width = 86;
	stone.height = 190;
	stone.hp = stone.maxhp = stone.disthp = 200;
	stone.n = 4;
};

function moveStone( stone ){
	stone.theta += 2;
	stone.y = stone.oy + 6 * Math.sin( stone.theta*Math.PI/180 );
	if( stone.theta >= 360 ) stone.theta = 0;
	
	if( stone.hp > stone.disthp ){
		stone.hp -= 0.5;
	}
};

function printStone( stone, scr, img, context ){
	var s = stone;
	context.drawImage( img.stone, 0, 0, s.width, s.height, s.x - s.width/2 - scr.x, s.y - s.height/2 - scr.y, s.width, s.height );
	
	var hp = Math.floor(s.hp);
	var maxhp = Math.floor(s.maxhp);	
	var disthp = Math.floor(s.disthp);
	if( s.disthp < s.hp ){
		context.fillStyle = "rgb(216, 216, 216)";
		context.fillRect( s.x - 40 - scr.x, s.oy + 110 - scr.y, 80, 8 );
		context.fillStyle = "rgb(255, 128, 128)";
		context.fillRect( s.x - 40 - scr.x, s.oy + 110 - scr.y, hp/maxhp*80, 8 );
		context.fillStyle = "rgb(255, 0, 0)";
		context.fillRect( s.x - 40 - scr.x, s.oy + 110 - scr.y, disthp/maxhp*80, 8 );
	}
	else{
		context.fillStyle = "rgb(216, 216, 216)";
		context.fillRect( s.x - 40 - scr.x, s.oy + 110 - scr.y, 80, 8 );
		context.fillStyle = "rgb(255, 0, 0)";
		context.fillRect( s.x - 40 - scr.x, s.oy + 110 - scr.y, hp/maxhp*80, 8 );
	}
};
