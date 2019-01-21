function initMagic22( m ){
	m.width = 40;
	m.height = 40;
	m.x = m.tx;
	m.y = m.ty;
	m.time = 0;
};

function initMagic27( m ){
	m.width = 40;
	m.height = 40;
	m.x = m.tx;
	m.y = m.ty;
	m.time = 50;
};

function moveMagic22( m, particle ){
	m.time++;
	
	if( m.time == 80 ){
		newParticle( particle, m.x, m.y, 4, 11, 
					 40, 40, 
					 1.0, 0.0, 
					 45, 0, 
					 Math.random()*6.28, Math.random()*3, 20 );
		newParticle( particle, m.x-20, m.y, 4, 11, 
					 30, 30, 
					 1.0, 0.0, 
					 45, 0, 
					 Math.random()*6.28, Math.random()*3, 20 );
		newParticle( particle, m.x+20, m.y, 4, 11, 
					 30, 30, 
					 1.0, 0.0, 
					 45, 0, 
					 Math.random()*6.28, Math.random()*3, 20 );
		newParticle( particle, m.x, m.y-25, 4, 11, 
					 30, 30, 
					 1.0, 0.0, 
					 45, 0, 
					 Math.random()*6.28, Math.random()*3, 20 );
		newParticle( particle, m.x, m.y-45, 4, 11, 
					 20, 20, 
					 1.0, 0.0, 
					 45, 0, 
					 Math.random()*6.28, Math.random()*3, 20 );
		newParticle( particle, m.x-35, m.y-15, 4, 11, 
					 20, 20, 
					 1.0, 0.0, 
					 0, 0, 
					 Math.random()*6.28, Math.random()*3, 20 );
		newParticle( particle, m.x+35, m.y-15, 4, 11, 
					 20, 20, 
					 1.0, 0.0, 
					 0, 0, 
					 Math.random()*6.28, Math.random()*3, 20 );
		newParticle( particle, m.x, m.y-67, 4, 11, 
					 10, 10, 
					 1.0, 0.0, 
					 45, 0, 
					 Math.random()*6.28, Math.random()*3, 20 );
		newParticle( particle, m.x-50, m.y-30, 4, 11, 
					 10, 10, 
					 1.0, 0.0, 
					 0, 0, 
					 Math.random()*6.28, Math.random()*3, 20 );
		newParticle( particle, m.x+50, m.y-30, 4, 11, 
					 10, 10, 
					 1.0, 0.0, 
					 0, 0, 
					 Math.random()*6.28, Math.random()*3, 20 );
	}
	else{
		newParticle( particle, m.x, m.y, 2, 11, 
					 40, 40, 
					 1.0, 1.0, 
					 45, 0, 
					 0, 0, 2);
		if( m.time > 3 ){
			newParticle( particle, m.x-20, m.y, 2, 11, 
						 30, 30, 
						 1.0, 1.0, 
						 45, 0, 
						 0, 0, 2);
			newParticle( particle, m.x+20, m.y, 2, 11, 
						 30, 30, 
						 1.0, 1.0, 
						 45, 0, 
						 0, 0, 2);
			newParticle( particle, m.x, m.y-25, 2, 11, 
						 30, 30, 
						 1.0, 1.0, 
						 45, 0, 
						 0, 0, 2);
		}
		if( m.time > 6 ){
			newParticle( particle, m.x, m.y-45, 2, 11, 
						 20, 20, 
						 1.0, 1.0, 
						 45, 0, 
						 0, 0, 2);
			newParticle( particle, m.x-35, m.y-15, 2, 11, 
						 20, 20, 
						 1.0, 1.0, 
						 0, 0, 
						 0, 0, 2);
			newParticle( particle, m.x+35, m.y-15, 2, 11, 
						 20, 20, 
						 1.0, 1.0, 
						 0, 0, 
						 0, 0, 2);
		}
		if( m.time > 9 ){
			newParticle( particle, m.x, m.y-67, 2, 11, 
						 10, 10, 
						 1.0, 1.0, 
						 45, 0, 
						 0, 0, 2);
			newParticle( particle, m.x-50, m.y-30, 2, 11, 
						 10, 10, 
						 1.0, 1.0, 
						 0, 0, 
						 0, 0, 2);
			newParticle( particle, m.x+50, m.y-30, 2, 11, 
						 10, 10, 
						 1.0, 1.0, 
						 0, 0, 
						 0, 0, 2);
		}
	}
	if( m.time >= 80 ){
		return true;
	}
	return false;
};

function moveMagic27( m, particle ){
	m.time++;
	
	if( m.time == 80 ){
		newParticle( particle, m.x, m.y, 4, 11, 
					 30, 30, 
					 1.0, 0.0, 
					 45, 0, 
					 Math.random()*6.28, Math.random()*3, 20 );
					 
		newParticle( particle, m.x-15, m.y, 4, 11, 
					 16, 16, 
					 1.0, 0.0, 
					 45, 0, 
					 Math.random()*6.28, Math.random()*3, 20 );
		newParticle( particle, m.x+15, m.y, 4, 11, 
					 16, 16, 
					 1.0, 0.0, 
					 45, 0, 
					 Math.random()*6.28, Math.random()*3, 20 );
		newParticle( particle, m.x, m.y-20, 4, 11, 
					 16, 16, 
					 1.0, 0.0, 
					 45, 0, 
					 Math.random()*6.28, Math.random()*3, 20 );
					 
		newParticle( particle, m.x, m.y-35, 4, 11, 
					 10, 10, 
					 1.0, 0.0, 
					 45, 0, 
					 Math.random()*6.28, Math.random()*3, 20 );
		newParticle( particle, m.x-25, m.y-10, 4, 11, 
					 10, 10, 
					 1.0, 0.0, 
					 0, 0, 
					 Math.random()*6.28, Math.random()*3, 20 );
		newParticle( particle, m.x+25, m.y-10, 4, 11, 
					 10, 10, 
					 1.0, 0.0, 
					 0, 0, 
					 Math.random()*6.28, Math.random()*3, 20 );
					 
		newParticle( particle, m.x, m.y-45, 4, 11, 
					 5, 5, 
					 1.0, 0.0, 
					 45, 0, 
					 Math.random()*6.28, Math.random()*3, 20 );
		newParticle( particle, m.x-35, m.y-15, 4, 11, 
					 5, 5, 
					 1.0, 0.0, 
					 0, 0, 
					 Math.random()*6.28, Math.random()*3, 20 );
		newParticle( particle, m.x+35, m.y-15, 4, 11, 
					 5, 5, 
					 1.0, 0.0, 
					 0, 0, 
					 Math.random()*6.28, Math.random()*3, 20 );
	}
	else{
		newParticle( particle, m.x, m.y, 2, 11, 
					 30, 30, 
					 1.0, 1.0, 
					 45, 0, 
					 0, 0, 2);
		if( m.time > 53 ){
			newParticle( particle, m.x-15, m.y, 2, 11, 
						 16, 16, 
						 1.0, 1.0, 
						 45, 0, 
						 0, 0, 2);
			newParticle( particle, m.x+15, m.y, 2, 11, 
						 16, 16, 
						 1.0, 1.0, 
						 45, 0, 
						 0, 0, 2);
			newParticle( particle, m.x, m.y-20, 2, 11, 
						 16, 16, 
						 1.0, 1.0, 
						 45, 0, 
						 0, 0, 2);
		}
		if( m.time > 56 ){
			newParticle( particle, m.x, m.y-35, 2, 11, 
						 10, 10, 
						 1.0, 1.0, 
						 45, 0, 
						 0, 0, 2);
			newParticle( particle, m.x-25, m.y-10, 2, 11, 
						 10, 10, 
						 1.0, 1.0, 
						 0, 0, 
						 0, 0, 2);
			newParticle( particle, m.x+25, m.y-10, 2, 11, 
						 10, 10, 
						 1.0, 1.0, 
						 0, 0, 
						 0, 0, 2);
		}
		if( m.time > 59 ){
			newParticle( particle, m.x, m.y-45, 2, 11, 
						 5, 5, 
						 1.0, 1.0, 
						 45, 0, 
						 0, 0, 2);
			newParticle( particle, m.x-35, m.y-15, 2, 11, 
						 5, 5, 
						 1.0, 1.0, 
						 0, 0, 
						 0, 0, 2);
			newParticle( particle, m.x+35, m.y-15, 2, 11, 
						 5, 5, 
						 1.0, 1.0, 
						 0, 0, 
						 0, 0, 2);
		}
	}
	if( m.time >= 80 ){
		return true;
	}
	return false;
};