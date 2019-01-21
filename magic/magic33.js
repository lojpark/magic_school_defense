function initMagic33( m ){
	m.width = 40;
	m.height = 40;
	m.x = m.tx + Math.random()*100-50;
	m.y = m.oy = -10;
	m.rtx = m.tx;
	m.rty = m.ty;
	m.time = 0;
};

function moveMagic33( m, particle ){
	var j;
	
	if( m.time == 0 ){
		m.time++;
		newParticle( particle, 0, 0, 7, 15, 
				 0, 0, 
				 1.0, 0.0, 
				 0, 0, 
				 0, 0, 2 );
		return false;
	}
	else if( m.time == 1 ){
		m.time++;
	}
	else if( m.time == 2 ){
		return true;
	}
	
	m.ty = m.y + 30;// + Math.random()*30;
	m.tx = m.x + Math.random()*60 - 30;
	m.theta = Math.atan2( m.ty - m.oy, m.tx - m.ox );
	for( j = 0; j <= j+1; j++ ){
		m.x = m.ox + m.r * Math.cos( m.theta );
		m.y = m.oy + m.r * Math.sin( m.theta );
		m.r += 10;
		
		newParticle( particle, m.x + Math.random()*6-3, m.y + Math.random()*6-3, 2, 14, 
				 10, 0, 
				 1.0, 0.0, 
				 j*5, 5, 
				 j, 1.5, 10 );
				 
		if( Math.abs( m.x - m.tx ) + Math.abs( m.y - m.ty ) <= 10 || j > 100 ){
			break;
		}
	}
	m.ox = m.x;
	m.oy = m.y;
	m.r = 0;
	
	m.ty = m.y + 30;// + Math.random()*30;
	m.tx = m.x + Math.random()*60 - 30;
	m.theta = Math.atan2( m.ty - m.oy, m.tx - m.ox );
	for( j = 0; j <= j+1; j++ ){
		m.x = m.ox + m.r * Math.cos( m.theta );
		m.y = m.oy + m.r * Math.sin( m.theta );
		m.r += 10;
		
		newParticle( particle, m.x + Math.random()*6-3, m.y + Math.random()*6-3, 2, 14, 
				 10, 0, 
				 1.0, 0.0, 
				 j*5, 5, 
				 j, 1.5, 10 );
				 
		if( Math.abs( m.x - m.tx ) + Math.abs( m.y - m.ty ) <= 10 || j > 100 ){
			break;
		}
	}
	m.ox = m.x;
	m.oy = m.y;
	m.r = 0;
	
	m.ty = m.y + 30;// + Math.random()*30;
	m.tx = m.x + Math.random()*60 - 30;
	m.theta = Math.atan2( m.ty - m.oy, m.tx - m.ox );
	for( j = 0; j <= j+1; j++ ){
		m.x = m.ox + m.r * Math.cos( m.theta );
		m.y = m.oy + m.r * Math.sin( m.theta );
		m.r += 10;
		
		newParticle( particle, m.x + Math.random()*6-3, m.y + Math.random()*6-3, 2, 14, 
				 10, 0, 
				 1.0, 0.0, 
				 j*5, 5, 
				 j, 1.5, 10 );
				 
		if( Math.abs( m.x - m.tx ) + Math.abs( m.y - m.ty ) <= 10 || j > 100 ){
			break;
		}
	}
	m.ox = m.x;
	m.oy = m.y;
	m.r = 0;
	
	m.ty = m.rty;
	m.tx = m.rtx;
	m.theta = Math.atan2( m.ty - m.oy, m.tx - m.ox );
	for( j = 0; j <= j+1; j++ ){
		m.x = m.ox + m.r * Math.cos( m.theta );
		m.y = m.oy + m.r * Math.sin( m.theta );
		m.r += 10;
		
		newParticle( particle, m.x + Math.random()*6-3, m.y + Math.random()*6-3, 2, 14, 
				 10, 0, 
				 1.0, 0.0, 
				 j*5, 5, 
				 j, 1.5, 10 );
				 
		if( Math.abs( m.x - m.tx ) + Math.abs( m.y - m.ty ) <= 10 || j > 100 ){
			break;
		}
	}
	
	return false;
};