function initMagic66( m ){
	m.width = 36;
	m.height = 42;
	m.x = m.tx;
	m.y = m.ty + 10;
	m.time = 0;
	m.motion = 0;
};

function moveMagic66( m, enemy, particle ){
	m.time++;
	
	if( m.time == 2 || m.time == 4 || m.time == 6 ){
		m.motion++;
	}
	if( m.time == 94 || m.time == 96 || m.time == 98 ){
		m.motion--;
	}
	
	if( m.time >= 100 ){
		return true;
	}
	return false;
};