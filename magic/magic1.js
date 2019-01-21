function initMagic1( m ){
	m.width = 40;
	m.height = 40;
};

function moveMagic1( m, particle ){	
	m.x = m.ox + m.r * Math.cos( m.theta );
	m.y = m.oy + m.r * Math.sin( m.theta );
	m.r += 7;
/*	newParticle( particle, x, y, type, color, 
				 sScale, eScale, 
				 sAlpha, eAlpha, 
				 sAngle, dAngle, 
				 theta, spd, time ); */
	newParticle( particle, m.x + Math.random()*16-8, m.y + Math.random()*20-10, 2, 12, 
				 20, 0, 
				 1.0, 0.0, 
				 0, 0, 
				 0, 0.1, 10 );
	newParticle( particle, m.x + Math.random()*16-8, m.y + Math.random()*20-10, 2, 12, 
				 20, 0, 
				 1.0, 0.0, 
				 0, 0, 
				 0, 0.1, 10 );
	newParticle( particle, m.x, m.y+5, 2, 14, 
				 15, 15, 
				 1.0, 1.0, 
				 m.r*2, 0, 
				 0, 0, 2 );
};