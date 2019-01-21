function initMagic15( m ){
	m.width = 40;
	m.height = 40;
};

function moveMagic15( m, particle ){	
	m.x = m.ox + m.r * Math.cos( m.theta );
	m.y = m.oy + m.r * Math.sin( m.theta );
	m.r += 10;
	newParticle( particle, m.x + Math.random()*16-8, m.y + Math.random()*20-10, 2, 12, 
				 30+m.r/10, 0, 
				 0.75, 0.0, 
				 0, 0, 
				 0, 0.1, 10 );
	newParticle( particle, m.x, m.y+5, 2, 14, 
				 20+m.r/10, 20, 
				 0.75, 0.75, 
				 m.r*2, 0, 
				 0, 0, 2 );
};