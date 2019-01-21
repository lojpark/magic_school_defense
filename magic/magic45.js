function initMagic45( m ){
	m.width = 40;
	m.height = 40;
	m.sc = 30;
};

function moveMagic45( m, particle ){	
	m.x = m.ox + m.r * Math.cos( m.theta );
	m.y = m.oy + m.r * Math.sin( m.theta );
	m.r += 15;
	m.sc += 2;
	newParticle( particle, m.x, m.y, 2, 15, 
				 m.sc-10, m.sc-20, 
				 0.5, 0.0, 
				 m.r, 0, 
				 Math.random()*10-5, 3, 20 );
	newParticle( particle, m.x, m.y, 2, 7, 
				 m.sc, m.sc, 
				 1.0, 1.0, 
				 m.r, 0, 
				 0, 0, 2 );
};