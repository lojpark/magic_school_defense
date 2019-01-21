function initMagic3( m ){
	m.width = 40;
	m.height = 40;
	m.count = 0;
};

function moveMagic3( m, particle ){	
	var j;
	for( j = 0; j <= 100; j++ ){
		m.x = m.ox + m.r * Math.cos( m.theta );
		m.y = m.oy + m.r * Math.sin( m.theta );
		m.r += 10;
		
		newParticle( particle, m.x + Math.random()*6-3, m.y + Math.random()*6-3, 2, 14, 
				 10, 0, 
				 1.0, 0.0, 
				 j*5, 5, 
				 j, 1.5, 10 );
				 
		if( Math.abs( m.x - m.tx ) + Math.abs( m.y - m.ty ) <= 20 ){
			break;
		}
	}
	/*
	for( j = 1; j <= enemy[0].n; j++ ){
		var e = enemy[j];
		if( Math.abs( m.x - e.x ) < 200 && e.atkBy != 3 ){
			newMagic( magic, 3, magic[i], enemy[j] );
			//break;
		}
	}*/
};