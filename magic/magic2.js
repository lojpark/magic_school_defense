function initMagic2( m ){
	m.width = 40;
	m.height = 40;
};

function moveMagic2( m, particle ){	
	m.x = m.ox + m.r * Math.cos( m.theta );
	m.y = m.oy + m.r * Math.sin( m.theta );
	m.r += 15;
	newParticle( particle, m.x, m.y, 2, 15, 
				 15, 0, 
				 0.75, 0.0, 
				 45, 0, 
				 0, 0, 10 );
	newParticle( particle, m.x, m.y, 2, 11, 
				 20, 20, 
				 1.0, 1.0, 
				 45, 5, 
				 0, 0, 2 );
};