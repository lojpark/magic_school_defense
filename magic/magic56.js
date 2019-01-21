function initMagic56( m ){
	m.width = 40;
	m.height = 40;
	m.time = 0;
};

function moveMagic56( m, magic, particle ){
	m.time++;
	
	if( m.time <= 1 ){
		var j;
		for( j = -80; j <= 80; j += 20 ){
			if( j == 0 ) continue;
			magic[0].n++;
			magic[ magic[0].n ] = new Object();
			var m2 = magic[ magic[0].n ];
			
			m2.type = 56;
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
			m2.time = 1;
			m2.dmg = m.dmg;
		}
		return;
	}
	
	m.x = m.ox + m.r * Math.cos( m.theta );
	m.y = m.oy + m.r * Math.sin( m.theta );
	m.r += 20;
	
	newParticle( particle, m.x, m.y, 2, 15, 
				 10, 0, 
				 0.75, 0.0, 
				 45, 0, 
				 0, 0, 3 );
	newParticle( particle, m.x, m.y, 2, 4, 
				 15, 15, 
				 1.0, 1.0, 
				 45, 0, 
				 0, 0, 2 );
};