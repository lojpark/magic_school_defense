function initMagic24( m ){
	m.width = 120;
	m.height = 240;
	m.tx -= 10;
	m.vy = -15;
};

function moveMagic24( m, particle ){	
	m.y += m.vy;
	if( m.vy < 0 && m.vy+2 >= 0 ) m.x = m.tx;
	m.vy += 0.5;
	m.r += 15;
	
	var sc = 40;
	if( m.vy < 0 ) sc = 25;
	
	newParticle( particle, m.x, m.y, 2, 11, 
				 sc-10, sc-20, 
				 0.5, 0.0, 
				 m.r, 0, 
				 Math.random()*10-5, 3, 20 );
	newParticle( particle, m.x, m.y, 2, 11, 
				 sc, sc, 
				 1.0, 1.0, 
				 45, 0, 
				 0, 0, 2 );
	if( m.y >= m.ty ){
		return true;
	}
	return false;
};