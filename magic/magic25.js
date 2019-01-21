function initMagic25( m ){
	m.width = 60;
	m.height = 60;
	m.sc = 30;
	m.time = 0;
};

function moveMagic25( m, magic, particle ){
	m.time++;
	
	if( m.time <= 1 && m.sc == 30 ){
		var j;
		for( j = -30; j <= 30; j += 30 ){
			if( j == 0 ) continue;
			magic[0].n++;
			magic[ magic[0].n ] = new Object();
			var m2 = magic[ magic[0].n ];
			
			m2.type = 25;
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
			m2.sc = 30;
			m2.time = 1;
			m2.dmg = m.dmg;
		}
		return;
	}
	
	m.x = m.ox + m.r * Math.cos( m.theta );
	m.y = m.oy + m.r * Math.sin( m.theta );
	m.r += 20;
	
	newParticle( particle, m.x, m.y, 2, 15, 
				 m.sc*0.66, 0, 
				 0.75, 0.0, 
				 45, 0, 
				 0, 0, 5 );
	newParticle( particle, m.x, m.y, 2, 11, 
				 m.sc, 20, 
				 1.0, 1.0, 
				 45, 0, 
				 0, 0, 2 );
};