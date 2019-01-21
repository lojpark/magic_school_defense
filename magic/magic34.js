function initMagic34( m ){
	m.width = 40;
	m.height = 40;
	m.vx = 0;
	m.vy = 0;
	m.sc = 40;
	m.time = 0;
};

function moveMagic34( m, enemy, particle ){
	var j, minv = 2147483647, index = 0;
	for( j = 1; j <= enemy[0].n; j++ ){
		var e = enemy[j];
		if( Math.abs(e.x-m.x) + Math.abs(e.y-m.y) < minv ){
			minv = Math.abs(e.x-m.x) + Math.abs(e.y-m.y);
			index = j;
		}
	}
	if( index != 0 ){
		m.tx = enemy[index].x;
		m.ty = enemy[index].y;
	}
	
	if( m.x < m.tx ){
		if( m.vx < 0 ) m.vx += 0.53;
		else m.vx += 0.47;
	}
	else{
		if( m.vx < 0 ) m.vx -= 0.47;
		else m.vx -= 0.53;
	}
	if( m.y < m.ty ){
		if( m.vy < 0 ) m.vy += 0.53;
		else m.vy += 0.47;
	}
	else{
		if( m.vy < 0 ) m.vy -= 0.47;
		else m.vy -= 0.53;
	}
	
	m.x += m.vx;
	m.y += m.vy;
	
	m.r += 5;
	
	newParticle( particle, m.x, m.y, 2, 14, 
				 m.sc, m.sc-10, 
				 0.5, 0.0, 
				 m.r, 0, 
				 0, 0, 6 );
	newParticle( particle, m.x, m.y, 2, 7, 
				 m.sc, m.sc, 
				 1.0, 1.0, 
				 m.r, 0, 
				 0, 0, 2 );
				 
	m.time++;
	if( m.time >= 1000 || m.sc <= 20 ){
		return true;
	}
	return false;
};