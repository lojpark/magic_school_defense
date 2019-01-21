function initMagic46( m ){
	m.width = 112;
	m.height = 66;
	m.x = m.tx;
	m.y = m.ty;
	m.time = 0;
	m.motion = 0;
};

function moveMagic46( m, enemy, particle ){
	m.time++;
	
	if( m.time == 1 || m.time == 3 || m.time == 5 ){
		m.motion++;
	}
	if( m.time == 44 || m.time == 46 || m.time == 48 ){
		m.motion--;
	}
	
	if( m.time >= 50 ){
		return true;
	}
	return false;
};