function initEnemy( enemy ){
	enemy[0] = new Object();
	
	enemy[0].n = 0;
};
function setEnemy( enemy, level, isReal ){
	var i;
	
	for( ; enemy[0].n >= 1; ){
		delEnemy( enemy, enemy[0].n );
	}
	
	// 110 ~ 270
	switch( level ){
		case 1:
			if( !isReal ){
				enemy[0].n = 5;
				
				enemy[1] = new Object();enemy[1].x = 1350;enemy[1].y = 120;enemy[1].type = 1;
				enemy[2] = new Object();enemy[2].x = 1280;enemy[2].y = 170;enemy[2].type = 1;
				enemy[3] = new Object();enemy[3].x = 1420;enemy[3].y = 170;enemy[3].type = 1;
				enemy[4] = new Object();enemy[4].x = 1315;enemy[4].y = 250;enemy[4].type = 1;
				enemy[5] = new Object();enemy[5].x = 1385;enemy[5].y = 250;enemy[5].type = 1;
			}
			else{
				enemy[0].n = 5;
				
				enemy[1] = new Object();enemy[1].x = 1420;enemy[1].y = 120;enemy[1].type = 1;
				enemy[2] = new Object();enemy[2].x = 1280;enemy[2].y = 170;enemy[2].type = 1;
				enemy[3] = new Object();enemy[3].x = 1560;enemy[3].y = 170;enemy[3].type = 1;
				enemy[4] = new Object();enemy[4].x = 1350;enemy[4].y = 250;enemy[4].type = 1;
				enemy[5] = new Object();enemy[5].x = 1490;enemy[5].y = 250;enemy[5].type = 1;
			}
			break;
		case 2:
			if( !isReal ){
				enemy[0].n = 5;
				
				enemy[1] = new Object();enemy[1].x = 1350;enemy[1].y = 120;enemy[1].type = 1;
				enemy[2] = new Object();enemy[2].x = 1280;enemy[2].y = 170;enemy[2].type = 1;
				enemy[3] = new Object();enemy[3].x = 1420;enemy[3].y = 170;enemy[3].type = 1;
				enemy[4] = new Object();enemy[4].x = 1315;enemy[4].y = 250;enemy[4].type = 1;
				enemy[5] = new Object();enemy[5].x = 1385;enemy[5].y = 250;enemy[5].type = 1;
			}
			else{
				enemy[0].n = 9;
				
				enemy[1] = new Object();enemy[1].x = 1420;enemy[1].y = 120;enemy[1].type = 2;
				enemy[2] = new Object();enemy[2].x = 1630;enemy[2].y = 120;enemy[2].type = 2;
				enemy[3] = new Object();enemy[3].x = 1770;enemy[3].y = 120;enemy[3].type = 2;
				enemy[4] = new Object();enemy[4].x = 1280;enemy[4].y = 170;enemy[4].type = 2;
				enemy[5] = new Object();enemy[5].x = 1560;enemy[5].y = 170;enemy[5].type = 2;
				enemy[6] = new Object();enemy[6].x = 1840;enemy[6].y = 170;enemy[6].type = 2;
				enemy[7] = new Object();enemy[7].x = 1350;enemy[7].y = 250;enemy[7].type = 2;
				enemy[8] = new Object();enemy[8].x = 1490;enemy[8].y = 250;enemy[8].type = 2;
				enemy[9] = new Object();enemy[9].x = 1700;enemy[9].y = 250;enemy[9].type = 2;
			}
			break;
		case 3:
			if( !isReal ){
				enemy[0].n = 5;
				
				enemy[1] = new Object();enemy[1].x = 1350;enemy[1].y = 120;enemy[1].type = 1;
				enemy[2] = new Object();enemy[2].x = 1280;enemy[2].y = 170;enemy[2].type = 1;
				enemy[3] = new Object();enemy[3].x = 1420;enemy[3].y = 170;enemy[3].type = 1;
				enemy[4] = new Object();enemy[4].x = 1315;enemy[4].y = 250;enemy[4].type = 1;
				enemy[5] = new Object();enemy[5].x = 1385;enemy[5].y = 250;enemy[5].type = 1;
			}
			else{
				enemy[0].n = 12;
				
				enemy[1] = new Object();enemy[1].x = 1350;enemy[1].y = 120;enemy[1].type = 1;
				enemy[2] = new Object();enemy[2].x = 1280;enemy[2].y = 170;enemy[2].type = 1;
				enemy[3] = new Object();enemy[3].x = 1420;enemy[3].y = 170;enemy[3].type = 1;
				enemy[4] = new Object();enemy[4].x = 1315;enemy[4].y = 250;enemy[4].type = 1;
				enemy[5] = new Object();enemy[5].x = 1385;enemy[5].y = 250;enemy[5].type = 1;
				enemy[6] = new Object();enemy[6].x = 1350;enemy[6].y = 120;enemy[6].type = 1;
				enemy[7] = new Object();enemy[7].x = 1280;enemy[7].y = 170;enemy[7].type = 1;
				enemy[8] = new Object();enemy[8].x = 1315;enemy[8].y = 250;enemy[8].type = 1;
				enemy[9] = new Object();enemy[9].x = 1385;enemy[9].y = 250;enemy[9].type = 1;
				enemy[10] = new Object();enemy[10].x = 1350;enemy[10].y = 120;enemy[10].type = 1;
				enemy[11] = new Object();enemy[11].x = 1280;enemy[11].y = 170;enemy[11].type = 1;
				enemy[12] = new Object();enemy[12].x = 1420;enemy[12].y = 170;enemy[12].type = 1;
			}
			break;
	}

	for( i = 1; i <= enemy[0].n; i++ ){
		switch( enemy[i].type ){
			case 1:
				initGoblin( enemy[i] );
				break;
			case 2:
				initMadgoblin( enemy[i] );
				break;
		}
	}
};

function delEnemy( enemy, i ){
	var j;
	for( j = i; j < enemy[0].n; j++ ){
		enemy[j] = enemy[j+1];
	}
	enemy[ enemy[0].n ] = null;
	enemy[0].n--;
};

function moveEnemy( enemy, stone ){
	var i;
	
	for( i = 1; i <= enemy[0].n; i++ ){
		var e = enemy[i], isHit = false;
		
		switch( enemy[i].type ){
			case 1:
				isHit = moveGoblin( e );
				break;
			case 2:
				isHit = moveMadgoblin( e );
				break;
		}
		
		if( isHit ){
			stone.disthp -= e.dmg;
		}
	}
};

function rotateContext( x, y, angle, context ){
	context.translate( x, y );
	context.rotate( angle * Math.PI/180 );
	context.translate( x * -1, y * -1 );
};

function printEnemy( enemy, scr, img, context ){
	var i;
	
	for( i = 1; i <= enemy[0].n; i++ ){
		var e = enemy[i];
		if( e.x - scr.x < -50 || e.x - scr.x > 690 || e.y - scr.y < -50 || e.y - scr.y > 410 ) continue;
		switch( e.type ){
			case 1:
				printGoblin( e, scr, img.enemy[1], context );
				break;
			case 2:
				printMadgoblin( e, scr, img.enemy[2], context );
				break;
		}
		var hp = Math.floor(e.hp);
		var maxhp = Math.floor(e.maxhp);
		context.fillStyle = "rgb(216, 216, 216)";
		context.fillRect( e.x - 10 - scr.x, e.y + 30 - scr.y, 20, 4 );
		context.fillStyle = "rgb(255, 0, 0)";
		context.fillRect( e.x - 10 - scr.x, e.y + 30 - scr.y, hp/maxhp*20, 4 );
	}
};