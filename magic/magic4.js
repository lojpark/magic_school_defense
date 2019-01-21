function initMagic4( m ){
	m.width = 60;
	m.height = 60;
	m.tx -= 10;
	m.vy = -17;
};

function moveMagic4( m, particle ){	
	m.y += m.vy;
	if( m.vy < 0 && m.vy+1.5 >= 0 ) m.x = m.tx;
	m.vy += 1.5;
	m.r += 15;
	var sc = 30;
	if( m.vy < 0 ) sc = 25;
	newParticle( particle, m.x, m.y, 2, 7, 
				 sc, sc-10, 
				 0.5, 0.0, 
				 m.r, 0, 
				 0, 0, 6 );
	newParticle( particle, m.x, m.y, 2, 7, 
				 sc, sc, 
				 1.0, 1.0, 
				 m.r, 0, 
				 0, 0, 2 );
	if( m.y >= m.ty ){
		return true;
	}
	return false;
};