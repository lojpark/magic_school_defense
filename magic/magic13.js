function initMagic13( m ){
	m.width = 160;
	m.height = 160;
	m.x = m.tx;
	m.y = m.ty;
	m.time = 0;
};

function moveMagic13( m, particle ){	
	m.time++;
	
	if( m.time % 2 == 0 ){
		var sc = 60;
		if( m.time <= 20 ) sc = 60;
		else if( m.time <= 30 ) sc = 50;
		else sc = 40;
		newParticle( particle, m.x + Math.random()*160-80, m.y + Math.random()*100-50, 2, 12, 
					 sc, sc/2, 
					 1.0, 0.0, 
					 Math.random()*10-5, 0,
					 Math.random()*6.28, 2, 10 );
		newParticle( particle, m.x + Math.random()*100-50, m.y + Math.random()*60-30, 2, 12, 
					 sc, sc/2, 
					 1.0, 0.0, 
					 Math.random()*10-5, 0,
					 Math.random()*6.28, 2, 10 );
		newParticle( particle, m.x + Math.random()*80-40, m.y + Math.random()*60-30, 2, 14, 
					 sc-20, sc-20, 
					 1.0, 0.0, 
					 0, Math.random()*10-5, 
					 Math.random()*6.28, 2, 10 );
	}
	if( m.time >= 40 ){
		return true;
	}
	return false;
};