function initParticle( particle ){
	particle[0] = new Object();
	
	particle[0].n = 0;
};

function newParticle( particle, x, y, type, color, sScale, eScale, sAlpha, eAlpha, sAngle, dAngle, theta, spd, time ){
	particle[0].n++;
	particle[ particle[0].n ] = new Object();
	var p = particle[ particle[0].n ];
	
	p.x = p.ox = x;
	p.y = p.oy = y;
	p.r = 0;
	p.type = type;
	p.color = color;
	p.scale = sScale;
	p.dScale = ( eScale - sScale ) / time;
	p.alpha = sAlpha;
	p.dAlpha = ( eAlpha - sAlpha ) / time;
	p.angle = sAngle;
	p.dAngle = dAngle;
	p.theta = theta;
	p.spd = spd;
	p.vy = -4;
	p.time = time;
};

function delParticle( particle, i ){
	var j;
	for( j = i; j < particle[0].n; j++ ){
		particle[j] = particle[j+1];
	}
	particle[ particle[0].n ] = null;
	particle[0].n--;
};

function clearParticle( particle ){
	for( i = 1; i <= particle[0].n; i++ ){
		delParticle( particle, i );
	}
};

function moveParticle( particle ){
	var i;
	
	for( i = 1; i <= particle[0].n; i++ ){
		var p = particle[i];
		
		if( p.type == 3 || p.type == 4 ){
			p.x = p.ox + p.r * Math.cos( p.theta );
			p.y += p.vy;
			p.vy += 1;
		}
		else if( p.type == 5 || p.type == 6 ){
			p.x = p.ox + p.r * Math.cos( p.theta );
			p.y -= 1.5;
			p.theta += 0.5;
		}
		else{
			p.x = p.ox + p.r * Math.cos( p.theta );
			p.y = p.oy + p.r * Math.sin( p.theta );
		}
		p.r += p.spd;
		
		p.scale += p.dScale;
		p.alpha += p.dAlpha;
		p.angle += p.dAngle;
		
		p.time--;
		if( p.time <= 0 || p.x < -50 || p.x > 1490 || p.y < -200 || p.y > 560 ){
			delParticle( particle, i );
			continue;
		}
	}
};

function setColor( color, alpha, context ){
	switch( color ){
		case 0: context.fillStyle = "rgba(0,0,0," + alpha + ")"; break;
		case 1: context.fillStyle = "rgba(0,16,112," + alpha + ")"; break;
		case 4: context.fillStyle = "rgba(0,120,0," + alpha + ")"; break;
		case 7: context.fillStyle = "rgba(150,94,36," + alpha + ")"; break;
		case 9: context.fillStyle = "rgba(32,128,255," + alpha + ")"; break;
		case 10: context.fillStyle = "rgba(181,230,29," + alpha + ")"; break;
		case 11: context.fillStyle = "rgba(132,231,255," + alpha + ")"; break;
		case 12: context.fillStyle = "rgba(255,0,0," + alpha + ")"; break;
		case 14: context.fillStyle = "rgba(255,255,0," + alpha + ")"; break;
		case 15: context.fillStyle = "rgba(255,255,255," + alpha + ")"; break;
	}
};

function printParticle( particle, scr, img, context ){
	var i, j, k;
	for( i = 1; i <= particle[0].n; i++ ){
		var p = particle[i];
		if( p.x - scr.x < -50 || p.x - scr.x > 690 || p.y - scr.y < -50 || p.y - scr.y > 410 ) continue;
		
		setColor( p.color, p.alpha, context );
		
		context.save();
		rotateContext( p.x - scr.x, p.y - scr.y, p.angle, context );
		
		if( p.type == 1 || p.type == 3 || p.type == 5 ){
			context.beginPath();
			context.arc( p.x - scr.x, p.y - scr.y, p.scale, 0, Math.PI*2, false);
			context.closePath();
			context.fill();
		}
		else if( p.type == 2 || p.type == 4 || p.type == 6 ){
			context.fillRect( p.x - p.scale/2 - scr.x, p.y - p.scale/2 - scr.y, p.scale, p.scale );
		}
		
		context.restore();
	}
	
	/* 빛 */
	for( i = 1; i <= particle[0].n; i++ ){
		var p = particle[i];
		if( p.type != 7 ) continue;
		
		setColor( p.color, p.alpha, context );
		
		context.fillRect( 0, 0, 640, 360 );
	}
	
	/* 화면 전환 */
	for( i = 1; i <= particle[0].n; i++ ){
		var p = particle[i];
		if( p.type < 10 ) continue;
		
		setColor( p.color, p.alpha, context );
		
		for( j = 30; j <= 640; j += 60 ){
			for( k = 30; k <= 330; k += 60 ){
				context.save();
				rotateContext( j, k, p.angle, context );
				
				var sc = 0;
				if( p.type == 10 ){
					sc = 190 - p.time*6 - Math.floor((640-j)/10);
					if( sc > 0 ) context.fillRect( j - sc/2, k - sc/2, sc, sc );
				}
				if( p.type == 11 ){
					sc = p.time*6 - Math.floor(j/10);
					if( sc > 0 ) context.fillRect( j - sc/2, k - sc/2, sc, sc );
				}
				
				context.restore();
			}
		}
	}
};
