function initMagic55( m ){
	m.width = 120;
	m.height = 60;
	m.x = m.tx;
	m.y = m.ty;
	m.time = 0;
};

function moveMagic55( m, particle ){
	m.time++;
	
	if( m.time % 3 == 0 ){
		newParticle( particle, m.x+Math.random()*20-10, m.y+30, 6, 15, 
 					 7, 25, 
					 1.0, 0.0, 
					 0, Math.random()*30-15, 
					 Math.random()*3.14, 1, 60 );
		/*
		newParticle( particle, m.x+Math.random()*20-10, m.y, 2, 15, 
 					 7, 25, 
					 1.0, 0.0, 
					 0, Math.random()*30-15, 
					 Math.random()*1-2.1, 3, 30 );
		*/
	}
	
	if( m.time >= 120 ){
		return true;
	}
	return false;
};