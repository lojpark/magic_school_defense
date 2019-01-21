function initMagic35( m ){
	m.width = 40;
	m.height = 40;
	m.y -= 40;
	m.oy -= 40;
	m.sc = 6;
	m.time = 0;
};

function moveMagic35( m, enemy, particle ){
	var j, k;
	if( m.sc <= 40 ){
		m.sc += 0.6;
	}
	else if( m.r >= 0 ){
		var minv = 2147483647, index = 0;
		for( j = 1; j <= enemy[0].n; j++ ){
			var e = enemy[j];
			if( Math.abs(e.x-m.x) + Math.abs(e.y-m.y) < minv ){
				minv = Math.abs(e.x-m.x) + Math.abs(e.y-m.y);
				index = j;
			}
		}
		if( index != 0 ){
			m.ox = m.x;
			m.oy = m.y;
			m.tx = enemy[index].x;
			m.ty = enemy[index].y;
			m.theta = Math.atan2( m.ty - m.oy, m.tx - m.ox );
			m.r = 15;
		}
		
		m.x = m.ox + m.r * Math.cos( m.theta );
		m.y = m.oy + m.r * Math.sin( m.theta );
	}
	
	for( j = 1; j <= m.sc/5; j++ ){
		var x, y;
		for( k = 1; k < 100; k++ ){
			x = m.x + Math.random()*m.sc-m.sc/2;
			y = m.y + Math.random()*m.sc-m.sc/2;
			if( (x-m.x)*(x-m.x) + (y-m.y)*(y-m.y) <= (m.sc/2)*(m.sc/2) ){
				break;
			}
		}
		if( Math.random()*3 <= 1 ){
			newParticle( particle, x, y, 4, 14, 
					 10, 0, 
					 1.0, 0.0, 
					 Math.random()*180, 5, 
					 Math.random()*6.28, 1.5, 20 );
		}
		else{
			newParticle( particle, x, y, 2, 14, 
					 10, 0, 
					 1.0, 0.0, 
					 Math.random()*180, 5, 
					 Math.random()*6.28, 1.5, 10 );
		}
	}
	
	m.time++;
	
	if( m.time >= 110 ) return true;
	return false;
};