function initMagic6( m ){
	m.width = 0;
	m.height = 0;
	m.x = m.tx;
	m.y = m.ty + 20;
	m.time = 0;
};

function moveMagic6( m, particle ){	
	m.time++;

	if( m.time % 3 == 0 ){
		newParticle( particle, m.x+Math.random()*20-10, m.y, 2, 9, 
 					 25, 7, 
					 0.4, 0.0, 
					 0, Math.random()*30-15, 
					 Math.random()*1-2.1, 3, 20 );
	}
				 
	if( m.time >= 30 ){
		return true;
	}
	return false;
};