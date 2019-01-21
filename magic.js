function initMagic( magic ){
	magic[0] = new Object();
	
	magic[0].n = 0;
};

function newMagic( magic, type, w, e ){
	magic[0].n++;
	magic[ magic[0].n ] = new Object();
	var m = magic[ magic[0].n ];
	
	m.type = type;
	m.x = w.x;
	m.y = w.y;
	m.tx = e.x;
	m.ty = e.y;
	m.ox = m.x;
	m.oy = m.y;
	m.theta = Math.atan2( m.ty - m.oy, m.tx - m.ox );
	m.r = 0;
	m.dmg = w.dmg * w.buffDmg * w.plusDmg;
	setMagicByType( m, w );
};
function newMagicByMagic( magic, type, m, e ){
	magic[0].n++;
	magic[ magic[0].n ] = new Object();
	var m2 = magic[ magic[0].n ];
	
	m2.type = type;
	m2.x = m.x;
	m2.y = m.y;
	m2.tx = e.x;
	m2.ty = e.y;
	m2.ox = m2.x;
	m2.oy = m2.y;
	m2.theta = Math.atan2( m2.ty - m2.oy, m2.tx - m2.ox );
	m2.r = 0;
	m2.dmg = m.dmg;
	setMagicByType( m2 );
};
function setMagicByType( m, w ){
	switch( m.type ){
		case 1:
			initMagic1( m );
			break;
		case 2:
			initMagic2( m );
			break;
		case 3:
			initMagic3( m );
			break;
		case 4:
			initMagic4( m );
			break;
		case 5:
			initMagic5( m );
			break;
		case 6:
			initMagic6( m );
			break;
		case 11:
			initMagic11( m );
			break;
		case 12:
			initMagic12( m );
			break;
		case 13:
			initMagic13( m );
			break;
		case 14:
			initMagic14( m );
			break;
		case 15:
			initMagic15( m );
			break;
		case 16:
			initMagic16( m, w );
			break;
		case 22:
			initMagic22( m );
			break;
		case 23:
			initMagic23( m );
			break;
		case 24:
			initMagic24( m );
			break;
		case 25:
			initMagic25( m );
			break;
		case 26:
			initMagic26( m );
			break;
		case 27:
			initMagic27( m );
			break;
		case 33:
			initMagic33( m );
			break;
		case 34:
			initMagic34( m );
			break;
		case 35:
			initMagic35( m );
			break;
		case 36:
			initMagic36( m, w );
			break;
		case 44:
			initMagic44( m );
			break;
		case 45:
			initMagic45( m );
			break;
		case 46:
			initMagic46( m );
			break;
		case 55:
			initMagic55( m );
			break;
		case 56:
			initMagic56( m );
			break;
		case 66:
			initMagic66( m );
			break;
	}
};

function delMagic( magic, i ){
	var j;
	for( j = i; j < magic[0].n; j++ ){
		magic[j] = magic[j+1];
	}
	magic[ magic[0].n ] = null;
	magic[0].n--;
};

function moveMagic( magic, wizard, enemy, particle, scr ){
	var i, j;
	var n = magic[0].n;
	
	for( i = 1; i <= n; i++ ){
		var m = magic[i];
		var isDel = false;
		
		switch( m.type ){
			case 1:
				moveMagic1( m, particle );
				break;
			case 2:
				moveMagic2( m, particle );
				break;
			case 3:
				moveMagic3( m, particle );
				break;
			case 4:
				isDel = moveMagic4( m, particle );
				break;
			case 5:
				moveMagic5( m, particle );
				break;
			case 6:
				isDel = moveMagic6( m, particle );
				break;
			case 11:
				isDel = moveMagic11( m, enemy, particle );
				break;
			case 12:
				moveMagic12( m, particle );
				break;
			case 13:
				isDel = moveMagic13( m, particle );
				break;
			case 14:
				isDel = moveMagic14( m, particle );
				break;
			case 15:
				moveMagic15( m, particle );
				break;
			case 16:
				isDel = moveMagic16( m, wizard, particle );
				break;
			case 22:
				isDel = moveMagic22( m, particle );
				break;
			case 23:
				isDel = moveMagic23( m, magic, enemy, particle );
				break;
			case 24:
				isDel = moveMagic24( m, particle );
				break;
			case 25:
				moveMagic25( m, magic, particle );
				break;
			case 26:
				isDel = moveMagic26( m, enemy, particle );
				break;
			case 27:
				isDel = moveMagic27( m, particle );
				break;
			case 33:
				isDel = moveMagic33( m, particle );
				break;
			case 34:
				isDel = moveMagic34( m, enemy, particle );
				break;
			case 35:
				isDel = moveMagic35( m, enemy, particle );
				break;
			case 36:
				isDel = moveMagic36( m, wizard, particle );
				break;
			case 44:
				isDel = moveMagic44( m, particle, scr );
				break;
			case 45:
				moveMagic45( m, particle );
				break;
			case 46:
				isDel = moveMagic46( m, particle );
				break;
			case 55:
				isDel = moveMagic55( m, particle );
				break;
			case 56:
				moveMagic56( m, magic, particle );
				break;
			case 66:
				isDel = moveMagic66( m, particle );
				break;
		}
		
		if( isDel || m.x < -50 || m.x > 1490 || m.y < -200 || m.y > 460 ){
			delMagic( magic, i );
			n--;
			i--;
		}
	}
};

function printMagic( magic, scr, img, context ){
	var i;
	for( i = 1; i <= magic[0].n; i++ ){
		var m = magic[i];
		if( m.type == 44 ){
			context.drawImage( img.magic44, m.width*m.motion, 0, m.width, m.height, m.x - m.width/2 - scr.x, m.y - m.height/2 - scr.y, m.width, m.height );
		}
		if( m.type == 46 ){
			context.drawImage( img.magic46, m.width*m.motion, 0, m.width, m.height, m.x - m.width/2 - scr.x, m.y - m.height/2 - scr.y, m.width, m.height );
		}
		if( m.type == 66 ){
			context.drawImage( img.magic66, m.width*m.motion, 0, m.width, m.height, m.x - m.width/2 - scr.x, m.y - m.height/2 - scr.y, m.width, m.height );
		}
		//context.drawImage( img.magic[1], 0, 0, m.width, m.height, m.x - m.width/2, m.y - m.height/2, m.width, m.height );
	}
};

function setCastingTime( type ){
	switch( type ){
		case 1:
			return 30;
		case 2:
			return 30;
		case 3:
			return 30;
		case 4:
			return 30;
		case 5:
			return 30;
		case 6:
			return 30;
		case 11:
			return 40;
		case 12:
			return 10;
		case 13:
			return 120;
		case 14:
			return 120;
		case 15:
			return 60;
		case 16:
			return 40;
		case 22:
			return 60;
		case 23:
			return 60;
		case 24:
			return 90;
		case 25:
			return 60;
		case 26:
			return 40;
		case 33:
			return 50;
		case 34:
			return 70;
		case 35:
			return 40;
		case 36:
			return 40;
		case 44:
			return 120;
		case 45:
			return 40;
		case 46:
			return 50;
		case 55:
			return 50;
		case 56:
			return 30;
		case 66:
			return 90;
		default:
			return 120;
	}
};
function setAfterDelay( type ){
	switch( type ){
		case 1:
			return 30;
		case 2:
			return 30;
		case 3:
			return 30;
		case 4:
			return 30;
		case 5:
			return 30;
		case 6:
			return 30;
		case 11:
			return 70;
		case 12:
			return 20;
		case 13:
			return 70;
		case 14:
			return 70;
		case 15:
			return 40;
		case 16:
			return 200;
		case 22:
			return 80;
		case 23:
			return 80;
		case 24:
			return 60;
		case 25:
			return 40;
		case 26:
			return 120;
		case 33:
			return 60;
		case 34:
			return 80;
		case 35:
			return 90;
		case 36:
			return 250;
		case 44:
			return 70;
		case 45:
			return 30;
		case 46:
			return 50;
		case 55:
			return 90;
		case 56:
			return 20;
		case 66:
			return 120;
		default:
			return 0;
	}
};
function setUseMp( type ){
	switch( type ){
		case 0:
			return 0;
		case 6:
			return 20;
		case 11:
			return 30;
		case 12:
			return 20;
		case 13:
			return 70;
		case 14:
			return 80;
		case 15:
			return 30;
		case 16:
			return 30;
		case 22:
			return 50;
		case 23:
			return 50;
		case 24:
			return 70;
		case 25:
			return 30;
		case 26:
			return 30;
		case 33:
			return 50;
		case 34:
			return 50;
		case 35:
			return 30;
		case 36:
			return 50;
		case 44:
			return 80;
		case 45:
			return 40;
		case 46:
			return 50;
		case 55:
			return 50;
		case 66:
			return 60;
		default:
			return 10;
	}
};
function setDamage( type ){
	switch( type ){
		case 1:
			return 90;
		case 2:
			return 60;
		case 3:
			return 30;
		case 4:
			return 90;
		case 5:
			return 30;
		case 6:
			return 60;
		case 11:
			return 24;
		case 12:
			return 90;
		case 13:
			return 45;
		case 14:
			return 300;
		case 15:
			return 30;
		case 22:
			return 240;
		case 23:
			return 15;
		case 24:
			return 270;
		case 25:
			return 30;
		case 26:
			return 0;
		case 33:
			return 180;
		case 34:
			return 90;
		case 35:
			return 36;
		case 44:
			return 300;
		case 45:
			return 210;
		case 46:
			return 210;
		case 55:
			return 21;
		case 56:
			return 75;
		case 66:
			return 0;
		default:
			return 0;
	}
};
function setRange( type ){
	switch( type ){
		case 1:
			return 100;
		case 2:
			return 300;
		case 3:
			return 150;
		case 4:
			return 100;
		case 5:
			return 200;
		case 6:
			return 200;
		case 11:
			return 200;
		case 12:
			return 300;
		case 13:
			return 150;
		case 14:
			return 300;
		case 15:
			return 200;
		case 16:
			return 200;
		case 22:
			return 200;
		case 23:
			return 150;
		case 24:
			return 300;
		case 25:
			return 200;
		case 26:
			return 200;
		case 33:
			return 300;
		case 34:
			return 300;
		case 35:
			return 300;
		case 36:
			return 200;
		case 44:
			return 200;
		case 45:
			return 200;
		case 46:
			return 200;
		case 55:
			return 200;
		case 56:
			return 200;
		case 66:
			return 200;
		default:
			return 0;
	}
};
function setMagicName( type ){
	switch( type ){
		case 0:
			return "없음";
		case 1:
			return "파이어 볼";
		case 2:
			return "아이스 애로우";
		case 3:
			return "일렉트릭 체인";
		case 4:
			return "스톤 드랍";
		case 5:
			return "윈드 블로우";
		case 6:
			return "메디테이션";
		case 11:
			return "블레이즈";
		case 12:
			return "워터 캐논";
		case 13:
			return "익스플로젼";
		case 14:
			return "메테오";
		case 15:
			return "플레임";
		case 16:
			return "아드레날린";
		case 22:
			return "프리즈";
		case 23:
			return "샤이닝 애로우";
		case 24:
			return "블리자드";
		case 25:
			return "스플린터";
		case 26:
			return "콜드 스냅";
		case 33:
			return "썬더볼트";
		case 34:
			return "마그네틱 스톤";
		case 35:
			return "일렉트릭 쇼크";
		case 36:
			return "스퍼 너브";
		case 44:
			return "어스퀘이크";
		case 45:
			return "스톤 펠트";
		case 46:
			return "우드 스파인";
		case 55:
			return "토네이도";
		case 56:
			return "블레이드";
		case 66:
			return "우드 바인딩";
		default:
			return 0;
	}
};
function setMagicInfo1( type ){
	switch( type ){
		case 0:
			return "사용할 수 있는 마법이";
		case 1:
			return "불타는 공을 만들어 적에게";
		case 2:
			return "얼음 화살을 만들어 적을";
		case 3:
			return "전격을 발사해 적들을";
		case 4:
			return "돌을 하늘로 던진 후 중력의";
		case 5:
			return "강력한 바람으로 적들을";
		case 6:
			return "아군 마법사의 정신력을";
		case 11:
			return "강력한 화염으로 적들을";
		case 12:
			return "물대포로 적을 빠르게";
		case 13:
			return "폭발을 일으켜 적들을";
		case 14:
			return "불타는 돌을 던져 만든";
		case 15:
			return "불꽃을 바람에 휘날려";
		case 16:
			return "아군 마법사의 공격력을";
		case 22:
			return "강력한 얼음으로 적을";
		case 23:
			return "전기를 두른 얼음 화살로";
		case 24:
			return "적들을 결빙시키는 얼음을";
		case 25:
			return "부딪히면 여러 파편으로";
		case 26:
			return "강력한 냉기로 적들의 이동";
		case 33:
			return "벼락을 내리쳐 적들을";
		case 34:
			return "적을 따라다니며 공격하는";
		case 35:
			return "전기를 공중에 모아 던져";
		case 36:
			return "아군 마법사의 마법 발현";
		case 44:
			return "대지를 가르는 강력한";
		case 45:
			return "바람의 힘으로 돌을 날려";
		case 46:
			return "나무로 된 가시를 땅에서";
		case 55:
			return "강력한 회오리 바람을";
		case 56:
			return "나뭇잎을 바람에 날려";
		case 66:
			return "나무를 이용해 적들을";
		default:
			return 0;
	}
};
function setMagicInfo2( type ){
	switch( type ){
		case 0:
			return "없습니다.";
		case 1:
			return "던진다.";
		case 2:
			return "공격한다.";
		case 3:
			return "연쇄적으로 공격한다.";
		case 4:
			return "힘을 빌려 적을 공격한다.";
		case 5:
			return "공격한다.";
		case 6:
			return "회복시킨다.";
		case 11:
			return "휩싸 불태운다.";
		case 12:
			return "공격한다.";
		case 13:
			return "공격한다.";
		case 14:
			return "운석으로 적들을 공격한다.";
		case 15:
			return "적들을 공격한다.";
		case 16:
			return "상승시킨다.";
		case 22:
			return "결빙시킨다.";
		case 23:
			return "적들을 감전시킨다.";
		case 24:
			return "하늘로 던져 날린다.";
		case 25:
			return "갈라지는 얼음을 날린다.";
		case 26:
			return "속도를 감소시킨다.";
		case 33:
			return "공격한다.";
		case 34:
			return "돌을 만들어 던진다.";
		case 35:
			return "적을 감전시킨다.";
		case 36:
			return "속도를 상승시킨다.";
		case 44:
			return "지진으로 적들을 공격한다.";
		case 45:
			return "적을 공격한다.";
		case 46:
			return "솟게 해 적들을 공격한다.";
		case 55:
			return "일으켜 적들을 공격한다.";
		case 56:
			return "적들을 공격한다.";
		case 66:
			return "일정시간 구속한다.";
		default:
			return 0;
	}
};
function setName(){
	var a = Math.floor( Math.random()*10 );
	var b = Math.floor( Math.random()*10 );
	var name = new String();
	switch( a ){
		case 0:
			name += "승";
			break;
		case 1:
			name += "미";
			break;
		case 2:
			name += "연";
			break;
		case 3:
			name += "수";
			break;
		case 4:
			name += "주";
			break;
		case 5:
			name += "호";
			break;
		case 6:
			name += "유";
			break;
		case 7:
			name += "시";
			break;
		case 8:
			name += "세";
			break;
		case 9:
			name += "혜";
			break;
	}
	switch( b ){
		case 0:
			name += "연";
			break;
		case 1:
			name += "경";
			break;
		case 2:
			name += "주";
			break;
		case 3:
			name += "리";
			break;
		case 4:
			name += "영";
			break;
		case 5:
			name += "진";
			break;
		case 6:
			name += "정";
			break;
		case 7:
			name += "림";
			break;
		case 8:
			name += "원";
			break;
		case 9:
			name += "민";
			break;
	}
	return name;
};