function initTime( time ){
	time.n = 2;
};

function date( i ){
	switch( i ){
		case  1: return "16. 03. 02";
		case  2: return "16. 03. 06";
		case  3: return "16. 03. 11";
		case  4: return "16. 03. 24";
		case  5: return "16. 04. 05";
		case  6: return "16. 04. 12";
		case  7: return "16. 04. 16";
		case  8: return "16. 04. 27";
		case  9: return "16. 05. 01";
		case 10: return "16. 05. 08";
		case 11: return "16. 05. 14";
		case 12: return "16. 05. 20";
		case 13: return "16. 05. 24";
		case 14: return "16. 05. 28";
	}
};

function printTime( time, scr, img, context ){
	var i;
	
	context.fillStyle = "rgb(0,0,0)";
	context.font = "bold 20px helvetica";
	
	context.drawImage( img.time1, 0, 0, 162, 96, 0 - scr.x, 110 - scr.y, 162, 96 );
	
	for( i = 1; i < time.n; i++ ){
		context.drawImage( img.time2, 0, 0, 217, 117, 162 + (i-1) * 211 - scr.x, 124 - scr.y, 217, 117 );
		context.fillText( date( i ), 274 + (i-1) * 211 - scr.x, 186 - scr.y );
	}
	for( i = time.n; i <= time.n; i++ ){
		context.drawImage( img.time3, 0, 0, 217, 117, 162 + (i-1) * 211 - scr.x, 124 - scr.y, 217, 117 );
	}
};
