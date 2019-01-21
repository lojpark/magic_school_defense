function initMagic26( m ){
	m.width = 40;
	m.height = 40;
	m.x = m.tx;
	m.y = m.ty;
	m.time = 0;
};

function moveMagic26( m, enemy, particle ){	
	var j, minv = 2147483647, index = 0;
	for( j = 1; j <= enemy[0].n; j++ ){
		var e = enemy[j];
		if( Math.abs(e.x-m.x) + Math.abs(e.y-m.y) < minv ){
			minv = Math.abs(e.x-m.x) + Math.abs(e.y-m.y);
			index = j;
		}
	}
	if( index != 0 ){
		m.x = enemy[index].x;
		m.y = enemy[index].y + 4;
		enemy[index].deSpd = 0.5;
		if( m.time >= 119 ) enemy[index].deSpd = 1.0;
	}
	
	m.time++;
	
	if( m.time % 3 == 0 ){
		newParticle( particle, m.x+Math.random()*20-10, m.y, 2, 11, 
 					 25, 7, 
					 1.0, 0.0, 
					 0, Math.random()*30-15, 
					 Math.random()*1-2.1, 3, 20 );
	}
	
	if( m.time >= 120 ){
		return true;
	}
	return false;
};