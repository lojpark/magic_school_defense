function initMagic44( m ){
	m.width = 192;
	m.height = 86;
	m.x = m.tx;
	m.y = m.ty;
	m.time = 0;
	m.motion = 0;
};

function moveMagic44( m, particle, scr ){
	m.time++;

	if( m.time == 1 ){
		newQuake( scr, 6 );
	}
	
	if( m.time == 3 || m.time == 6 || m.time == 9 ){
		m.motion++;
	}
	if( m.time == 71 || m.time == 74 || m.time == 77 ){
		m.motion--;
	}
	
	if( m.time >= 80 ){
		return true;
	}
	return false;
};