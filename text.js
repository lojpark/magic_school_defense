function initText( text ){
	text[0] = new Object();
	text[0].n = 0;
};

function newText( text, x, y, type, value ){
	text[0].n++;
	text[ text[0].n ] = new Object();
	
	var t = text[ text[0].n ];
	
	t.x = x;
	t.y = y;
	t.type = type;
	t.value = value;
	t.time = 0;
	if( type == 3 ) t.alpha = 0.0;
};

function delText( text, i ){
	var j;
	for( j = i; j < text[0].n; j++ ){
		text[j] = text[j+1];
	}
	text[ text[0].n ] = null;
	text[0].n--;
};

function moveText( text ){
	var i;
	for( i = 1; i <= text[0].n; i++ ){
		text[i].time++;
		if( text[i].type <= 2 ){
			text[i].y--;
			if( text[i].time >= 25 ){
				delText( text, i );
				i--;
				continue;
			}
		}
		if( text[i].type == 3 ){
			if( text[i].time < 25 ) text[i].alpha += 0.04;
			if( text[i].time > 80 ) text[i].alpha -= 0.04;
			if( text[i].alpha <= 0 ){
				delText( text, i );
				i--;
				continue;
			}
		}
	}
};

function printText( text, scr, context ){
	var i;
	for( i = 1; i <= text[0].n; i++ ){
		if( text[i].type == 1 ){
			context.font = "12px helvetica";
			context.fillStyle = "rgb(255,0,0)";
			context.fillText( text[i].value, text[i].x - scr.x - 8, text[i].y - scr.y );
		}
		if( text[i].type == 2 ){
			context.font = "12px helvetica";
			context.fillStyle = "rgb(0,0,255)";
			context.fillText( text[i].value, text[i].x - scr.x - 8, text[i].y - scr.y );
		}
		if( text[i].type == 3 ){
			context.font = "32px helvetica";
			context.fillStyle = "rgba(255,255,255," + text[i].alpha + ")";
			context.fillText( text[i].value, text[i].x, text[i].y );
		}
	}
};