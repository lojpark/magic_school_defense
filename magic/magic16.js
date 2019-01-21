function initMagic16( m, w ){
	m.width = 0;
	m.height = 0;
	m.x = m.tx;
	m.y = m.ty+20;
	m.target = w.target;
	m.time = 0;
};

function moveMagic16( m, wizard, particle ){	
	m.time++;
	
	if( m.time % 3 == 0 ){
		newParticle( particle, m.x+Math.random()*20-10, m.y, 2, 12, 
 					 25, 7, 
					 0.4, 0.0, 
					 0, Math.random()*30-15, 
					 Math.random()*1-2.1, 3, 20 );
	}
				 
	if( m.time >= 400 ){
		wizard[ m.target ].buffDmg = 1.0;
		return true;
	}
	return false;
};