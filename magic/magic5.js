function initMagic5( m ){
	m.width = 40;
	m.height = 40;
};

function moveMagic5( m, particle ){	
	m.x = m.ox + m.r * Math.cos( m.theta );
	m.y = m.oy + m.r * Math.sin( m.theta );
	m.r += 15;
	newParticle( particle, m.x, m.y, 2, 15, 
				 15+m.r/10, 15+m.r/10, 
				 0.5, 0.0, 
				 m.r*3, 45, 
				 0, 0, 6 );
	newParticle( particle, m.x, m.y, 2, 15, 
				 15+m.r/10, 15+m.r/10, 
				 0.5, 0.5, 
				 m.r*3, 0, 
				 0, 0, 2 );
};