function iME( magic, enemy, player, particle, scr, text ){
	var i, j, k;
	var n = magic[0].n;
	for( i = 1; i <= n; i++ ){
		var m = magic[i];
		for( j = 1; j <= enemy[0].n; j++ ){
			var e = enemy[j];
			
			if( m.x - m.width/2 <= e.x && e.x <= m.x + m.width/2 ){
				if( m.y - m.height/2 <= e.y && e.y <= m.y + m.height/2 && ( m.type != 14 || m.y >= m.ty-20 ) && 
				( m.type != 24 || m.y >= m.ty-40 ) && ( m.type != 25 || m.time >= 3 ) && ( m.type != 34 || m.time % 3 == 0 ) && 
				( m.type != 44 || m.time <= 1 ) && ( m.type != 46 || m.time <= 1 ) && ( m.type != 55 || m.time % 10 == 0 ) ){
					/* 구속 중 */
					if( e.atkBy == 22 || e.atkBy == 23 || e.atkBy == 27 || e.atkBy == 35 || e.atkBy == 66 ){
						e.vx = 0;
						if( m.type == 22 && m.time >= 79 ) setRigid( e, -2 );
						if( m.type == 23 ){
							m.r = -1;
							if( m.time >= 79 ) setRigid( e, -2 );
						}
						if( m.type == 27 && m.time >= 79 ) setRigid( e, -2 );
						if( m.type == 35 ){
							m.r = -1;
							if( m.time >= 109 ) setRigid( e, -2 );
						}
					}
					/* 구속 상태가 아닐 때 */
					else{
						if( m.type == 1 ) setRigid( e, -1.5 );
						else if( m.type == 2 ) setRigid( e, -1 );
						else if( m.type == 3 ) setRigid( e, -0.5 );
						else if( m.type == 4 ) setRigid( e, -1.7 );
						else if( m.type == 5 ) setRigid( e, -0.2 );
						else if( m.type == 11 ){
							if( m.time <= 1 ) setRigid( e, -1 );
						}
						else if( m.type == 12 ) setRigid( e, -1 );
						else if( m.type == 13 ) setRigid( e, -0.5 );
						else if( m.type == 14 ) setRigid( e, -3 );
						else if( m.type == 15 ) setRigid( e, -1.5 );
						else if( m.type == 22 ) setRigid( e, 0 );
						else if( m.type == 23 ){
							m.r = -1;
							setRigid( e, 0 );
						}
						else if( m.type == 25 ){
							if( m.sc == 30 ) setRigid( e, -1 );
							if( m.sc == 15 ) setRigid( e, -0.5 );
							if( m.sc == 5 ) setRigid( e, -0.1 );
						}
						else if( m.type == 27 ) setRigid( e, 0 );
						else if( m.type == 33 ) setRigid( e, -2 );
						else if( m.type == 34 ){
							setRigid( e, -1 );
							m.vx *= -1;
							m.vy *= -1;
							m.sc -= 3;
						}
						else if( m.type == 35 ) setRigid( e, 0 );
						else if( m.type == 44 ) setRigid( e, -2 );
						else if( m.type == 45 ) setRigid( e, -2 );
						else if( m.type == 46 ) setRigid( e, -1.5 );
						else if( m.type == 55 ){
							setRigid( e, -0.5 );
							if( e.x < m.x ) e.x += 2;
							else e.x -= 2;
						}
						else if( m.type == 56 ) setRigid( e, -0.5 );
						else if( m.type == 66 ) setRigid( e, 0 );
					}
					
					/* 연쇄 전격 */
					if( m.type == 3 && m.count <= 3 ){
						for( k = 1; k <= enemy[0].n; k++ ){
							var e2 = enemy[k];
							if( j != k && Math.abs( m.x - e2.x ) < 200 && e2.atkBy != 3 ){
								newMagicByMagic( magic, 3, magic[i], enemy[k] );
								magic[ magic[0].n ].count = m.count + 1;
								break;
							}
						}
					}
					
					/* 돌덩이 파티클 */
					if( m.type == 4 || m.type == 34 || m.type == 45 ){
						for( k = 1; k <= 5; k++ ){
							newParticle( particle, e.x+Math.random()*e.width-e.width/2, e.y-e.height/2, 4, 7, 
										 20, 10, 
										 1.0, 0.0, 
										 0, Math.random()*30-15, 
										 Math.random()*6.28, 5, 15 );
						}
					}
					/* 물대포 파티클 */
					if( m.type == 12 ){
						for( k = 1; k <= 9; k++ ){
							newParticle( particle, e.x+Math.random()*e.width-e.width/2, e.y+e.height/2, 2, 9, 
										 20, 10, 
										 1.0, 0.0, 
										 0, Math.random()*30-15, 
										 Math.random()*6.28, 5, 15 );
						}
					}
					/* 메테오 후폭풍 */
					if( m.type == 14 ){
						for( k = 1; k <= 5; k++ ){
							newParticle( particle, e.x, e.y, 2, 12, 
										 50, 50, 
										 1.0, 0.0, 
										 0, Math.random()*30-15, 
										 Math.random()*6.28, 5, 30 );
						}
						m.y = m.ty;
						newQuake( scr, 6 );
					}
					/* 불폭풍 파티클 */
					if( m.type == 15 ){
						newParticle( particle, e.x+Math.random()*e.width-e.width/2, e.y+e.height/2, 2, 12, 
									 15, 5, 
									 1.0, 0.0, 
									 0, Math.random()*30-15, 
									 Math.random()*1-2.1, 3, 30 );
					}
					/* 번개 파티클 */
					if( m.type == 33 ){
						for( k = 1; k <= 9; k++ ){
							newParticle( particle, e.x+Math.random()*e.width-e.width/2, e.y-e.height/2, 2, 14, 
										 15, 0, 
										 1.0, 0.0, 
										 0, Math.random()*30-15, 
										 Math.random()*6.28, 3, 15 );
						}
					}
					/* 블리자드 빙결 */
					if( m.type == 24 && enemy[j].atkBy != 24 ){
						newMagicByMagic( magic, 27, magic[i], enemy[j] );
					}
					/* 얼음 바람 파편 */
					if( m.type == 25 ){
						if( m.sc == 30 ){
							for( k = 0; k < 360; k += 30 ){
								newMagicByMagic( magic, 25, magic[i], enemy[j] );
								magic[ magic[0].n ].sc = 10;
								magic[ magic[0].n ].theta = k*3.14/180;
							}
						}
					}
					/* 지진 파티클 */
					if( m.type == 44 ){
						for( k = 1; k <= 6; k++ ){
							var sc = 20 + Math.random()*10;
							newParticle( particle, e.x+Math.random()*e.width-e.width/2, e.y+e.height/2, 4, 7, 
										 sc, sc/2, 
										 1.0, 0.0, 
										 0, Math.random()*30-15, 
										 Math.random()*6.28, 5, 15 );
						}
					}
					
					if( e.atkBy != 22 || e.atkBy != 23 || e.atkBy != 27 || e.atkBy != 35 || e.atkBy != 66 ){
						e.atkBy = m.type;
					}
					
					if( m.type == 11 && m.time % 10 != 0 ){
					}
					else if( m.type == 13 && m.time % 5 != 0 ){
					}
					else if( m.type == 22 && m.time > 1 ){
					}
					else if( m.type == 23 && m.time % 5 != 0 ){
					}
					else if( m.type == 27 && m.time > 1 ){
					}
					else if( m.type == 35 && m.time % 5 != 0 ){
					}
					else{
						e.hp -= m.dmg;
						if( m.dmg != 0 ) newText( text, e.x + Math.random()*20 - 10, e.y + Math.random()*20 - 10 - e.height/2, 1, Math.floor(m.dmg) );
					}
					
					if( e.hp <= 0 ){
						player.inMoney += e.cost;
						delEnemy( enemy, j );
						j--;
					}
					
					/* 단일 타격 마법 */
					if( m.type != 11 && m.type != 13 && m.type != 14 && m.type != 15 && m.type != 22 && m.type != 23 && 
						m.type != 24 && m.type != 26 && m.type != 27 && m.type != 34 && m.type != 35 && m.type != 44 && m.type != 46 && m.type != 55 && m.type != 66 ){
						delMagic( magic, i );
						j = 0;
						break;
					}
					if( m.type == 22 || m.type == 23 || m.type == 27 || m.type == 35 || m.type == 66 ){
						break;
					}
				}
			}
		}
		if( j == 0 ){
			i--;
			n--;
			continue;
		}
	}
};

function setRigid( e, value ){
	if( e.vx > value ) e.vx = value;
};