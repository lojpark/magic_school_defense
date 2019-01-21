function initPlayer( player ){
	player.todo = 0;
	player.todoMotion = 0;
	player.money = 0;
	player.inMoney = 0;
	player.outMoney = 0;
	player.killEnemy = 0;
};

function printMoney( value, x, y, context ){
	context.font = "12px helvetica";
	
	context.fillStyle = "rgb(0,0,0)";
	if( value <= 999 ) context.fillText( value, x, y );
	else if( value <= 999999 ){
		if( value % 1000 <= 9 ) context.fillText( Math.floor(value / 1000) + ",00" + value % 1000, x, y );
		else if( value % 1000 <= 99 ) context.fillText( Math.floor(value / 1000) + ",0" + value % 1000, x, y );
		else if( value % 1000 <= 999 ) context.fillText( Math.floor(value / 1000) + "," + value % 1000, x, y );
	}
	else{
		if( Math.floor( value / 1000 ) % 1000 <= 9 ){
			if( value % 1000 <= 9 ){
				context.fillText( Math.floor(value / 1000000) + ",00" + Math.floor( value / 1000 ) % 1000 + ",00" + value % 1000, x, y );
			}
			else if( value % 1000 <= 99 ){
				context.fillText( Math.floor(value / 1000000) + ",00" + Math.floor( value / 1000 ) % 1000 + ",0" + value % 1000, x, y );
			}
			else if( value % 1000 <= 999 ){
				context.fillText( Math.floor(value / 1000000) + ",00" + Math.floor( value / 1000 ) % 1000 + "," + value % 1000, x, y );
			}
		}
		else if( Math.floor( value / 1000 ) % 1000 <= 99 ){
			if( value % 1000 <= 9 ){
				context.fillText( Math.floor(value / 1000000) + ",0" + Math.floor( value / 1000 ) % 1000 + ",00" + value % 1000, x, y );
			}
			else if( value % 1000 <= 99 ){
				context.fillText( Math.floor(value / 1000000) + ",0" + Math.floor( value / 1000 ) % 1000 + ",0" + value % 1000, x, y );
			}
			else if( value % 1000 <= 999 ){
				context.fillText( Math.floor(value / 1000000) + ",0" + Math.floor( value / 1000 ) % 1000 + "," + value % 1000, x, y );
			}
		}
		else if( Math.floor( value / 1000 ) % 1000 <= 999 ){
			if( value % 1000 <= 9 ){
				context.fillText( Math.floor(value / 1000000) + "," + Math.floor( value / 1000 ) % 1000 + ",00" + value % 1000, x, y );
			}
			else if( value % 1000 <= 99 ){
				context.fillText( Math.floor(value / 1000000) + "," + Math.floor( value / 1000 ) % 1000 + ",0" + value % 1000, x, y );
			}
			else if( value % 1000 <= 999 ){
				context.fillText( Math.floor(value / 1000000) + "," + Math.floor( value / 1000 ) % 1000 + "," + value % 1000, x, y );
			}
		}
	}
};