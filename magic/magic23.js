function initMagic23( m ){
	m.width = 40;
	m.height = 40;
	m.tx = m.x;
	m.ty = m.y - 30;
	m.theta = Math.atan2( m.ty - m.oy, m.tx - m.ox );
	m.time = 0;
};

function moveMagic23( m, magic, enemy, particle ){
	var j;
	m.time++;
	
	if( m.time <= 1 ){
		for( j = -60; j <= 60; j += 30 ){
			if( j == 0 ) continue;
			magic[0].n++;
			magic[ magic[0].n ] = new Object();
			var m2 = magic[ magic[0].n ];
			
			m2.type = 23;
			m2.x = m.x;
			m2.y = m.y;
			m2.tx = m.tx;
			m2.ty = m.ty;
			m2.ox = m.ox;
			m2.oy = m.oy;
			m2.theta = m.theta + j*3.14/180;
			m2.r = 0;
			m2.width = 40;
			m2.height = 40;
			m2.dmg = m.dmg;
			m2.time = 1;
		}
		return;
	}
	
	if( m.time <= 8 ){
		m.x = m.ox + m.r * Math.cos( m.theta );
		m.y = m.oy + m.r * Math.sin( m.theta );
		m.r += 10;
	}
	if( m.time == 50 ){
		var minv = 2147483647, index = 0;
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
			m.ox = m.x;
			m.oy = m.y;
			m.r = 0;
			m.theta = Math.atan2( m.ty - m.oy, m.tx - m.ox );
		}
	}
	if( m.time >= 50 && m.r >= 0 ){
		m.x = m.ox + m.r * Math.cos( m.theta );
		m.y = m.oy + m.r * Math.sin( m.theta );
		m.r += 20;
	}
	
	newParticle( particle, m.x, m.y, 2, 15, 
				 15, 0, 
				 0.75, 0.0, 
				 45, 0, 
				 0, 0, 10 );
	newParticle( particle, m.x, m.y, 2, 11, 
				 20, 20, 
				 1.0, 1.0, 
				 45, 0, 
				 0, 0, 2 );
	
	if( m.time % 2 == 0 ){
		var alpha = 0;
		if( m.time > 50 ) alpha = 1.0;
		else alpha = 1 - (50 - m.time)/50;
		
		if( Math.random()*3 <= 1 ){
			newParticle( particle, m.x + Math.random()*20-10, m.y + Math.random()*20-10, 4, 14, 
					 10, 0, 
					 alpha, 0.0, 
					 Math.random()*180, 5, 
					 Math.random()*6.28, 1.5, 20 );
		}
		else{
			newParticle( particle, m.x + Math.random()*20-10, m.y + Math.random()*20-10, 2, 14, 
					 10, 0, 
					 alpha, 0.0, 
					 Math.random()*180, 5, 
					 Math.random()*6.28, 1.5, 10 );
		}
	}
	
	if( m.time >= 80 ){
		return true;
	}
	return false;
};