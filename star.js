function initStar( star ){
	star[0] = new Object();
	
	star[0].n = 6;
	
	var i;
	for( i = 1; i <= 3; i++ ){
		star[i] = new Object();
		star[i].x = (i-1)*400;
		star[i].y = 100;
		star[i].width = 256;
		star[i].height = 256;
		star[i].angle = 0;
	}
	for( i = 4; i <= star[0].n; i++ ){
		star[i] = new Object();
		star[i].x = (i-4)*400+200;
		star[i].y = 400;
		star[i].width = 256;
		star[i].height = 256;
		star[i].angle = 0;
	}
};

function moveStar( star){
	var i;
	
	for( i = 1; i <= star[0].n; i++ ){
		var s = star[i];
		
		s.x -= 1;
		s.y -= 1;
		s.angle -= 0.2;
		
		if( s.y <= -128 ){
			s.x = 488 - s.y + s.x - 200;
			if( s.x <= -12 ){
				s.x = 1188;
			}
			s.y = 488;
		}
	}
};

function printStar( star, img, context ){
	var i;
	
	for( i = 1; i <= star[0].n; i++ ){
		var s = star[i];
		
		context.save();
		rotateContext( s.x, s.y, s.angle, context );
		
		context.drawImage( img.star, 0, 0, s.width, s.height, s.x - s.width/2, s.y - s.height/2, s.width, s.height );
		
		context.restore();
	}
};