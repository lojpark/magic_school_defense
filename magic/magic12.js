function initMagic12( m ){
	m.width = 40;
	m.height = 40;
};

function moveMagic12( m, particle ){
	m.x = m.ox + m.r * Math.cos( m.theta );
	m.y = m.oy + m.r * Math.sin( m.theta );
	m.r += 18;
	newParticle( particle, m.x, m.y, 2, 9, 
				 15+m.r/10, 15+m.r/10, 
				 1.0, 0.0, 
				 m.r*3, 45, 
				 0, 0, 10 );
	newParticle( particle, m.x, m.y, 2, 9, 
				 15+m.r/10, 15+m.r/10, 
				 1.0, 1.0, 
				 m.r*3, 0, 
				 0, 0, 2 );
};