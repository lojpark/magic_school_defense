function initWizard( wizard ){
	wizard[0] = new Object();
	wizard[0].n = 0;
	
	newWizard( wizard, 1, 1 );
	newWizard( wizard, 2, 2 );
	newWizard( wizard, 3, 3 );
	
	wizard[1].score[1] = 50;
	wizard[2].score[2] = 50;
	wizard[3].score[3] = 50;
	wizard[1].subject = 1;
	wizard[2].subject = 2;
	wizard[3].subject = 3;
	wizard[1].hair = 1;
	wizard[2].hair = 2;
	wizard[3].hair = 3;
	wizard[1].eye = 1;
	wizard[2].eye = 6;
	wizard[3].eye = 3;
	
	resetWizard( wizard );
};

function newWizard( wizard, type, fabric ){
	wizard[0].n++;
	wizard[ wizard[0].n ] = new Object();
	var w = wizard[ wizard[0].n ], j;
	var maxv = 0, maxi = 0;
	
	w.ox = w.x = 120;
	w.oy = w.y = 80;
	w.width = 32;
	w.height = 48;
	w.motion = 0;
	w.motionDelay = 0;
	w.target = 0;
	w.mp = w.maxmp = w.distmp = w.distdistmp = 100;
	w.buffDmg = 1.0;
	w.buffCast = 1.0;
	w.plusDmg = 1.0;
	w.plusCast = 1.0;
	w.plusRange = 1.0;
	w.plusMp = 1.0;
	w.type = type;
	w.dmg = setDamage( w.type );
	w.useMp = setUseMp( w.type );
	w.castingTime = setCastingTime( w.type );
	w.range = setRange( w.type );
	w.afterDelay = setAfterDelay( w.type );
	w.score = new Array();
	for( j = 1; j <= 6; j++ ){
		w.score[j] = Math.floor( 10 + Math.random()*20 );
		if( maxv < w.score[j] ){
			maxv = w.score[j];
			maxi = j;
		}
	}
	w.name = setName();
	w.subject = maxi;
	w.wand = 1;
	w.getWand = new Array();
	w.fabric = fabric;
	w.robe = 9;
	w.getRobe = new Array();
	for( j = 1; j <= 12; j++ ){
		w.getWand[j] = false;
		w.getRobe[j] = false;
	}
	w.getWand[ w.wand ] = true;
	w.getRobe[ w.fabric ] = true;
	w.getRobe[ w.robe ] = true;
	w.hair = Math.floor(Math.random()*8)+1;
	w.eye = Math.floor(Math.random()*7)+1;
	w.useMagic = 0;
	w.deltaDmg = 0;
};

function rebirthWizard( w ){
	if( w.type != 0 ){
		w.useMp = setUseMp( w.type );
		w.castingTime = setCastingTime( w.type );
		w.range = setRange( w.type );
		w.afterDelay = setAfterDelay( w.type );
	}
};

function resetWizard( wizard ){
	var i;
	for( i = 1; i <= wizard[0].n; i++ ){
		var w = wizard[i];
		w.mp = w.distmp = w.distdistmp = w.maxmp * w.plusMp;
		w.motion = w.motionDelay = 0;
		w.buffCast = w.buffDmg = 1.0;
		w.useMagic = 0;
		w.deltaDmg = w.dmg;

		if( w.type != 0 ){
			if( w.type <= 9 ){
				w.dmg = setDamage( w.type );
				w.dmg += setDamage( w.type ) * w.score[ w.type ] / 99;
			}
			else{
				var type1 = w.type % 10;
				var type2 = Math.floor( w.type / 10 );
				
				w.dmg = setDamage( w.type );
				w.dmg += setDamage( w.type ) * w.score[ type1 ] / 198;
				w.dmg += setDamage( w.type ) * w.score[ type2 ] / 198;
			}
			
			w.dmg = Math.floor( w.dmg*10 ) / 10;
		}
		
		w.deltaDmg = w.dmg - w.deltaDmg;
		w.deltaDmg = Math.floor( w.deltaDmg*10 ) / 10;
	}
};

function educateWizard( wizard ){
	var i;
	for( i = 1; i <= wizard[0].n; i++ ){
		var w = wizard[i];
		w.score[ w.subject ] += 3;
		if( w.type%10 == Math.floor(w.type/10) && w.type%10 == w.subject ) w.score[ w.subject ] -= 1.5;

		if( w.score[ w.subject ] >= 100 ) w.score[ w.subject ] = 99;
	}
	
	resetWizard( wizard );
};

function expWizard( wizard ){
	var i;
	for( i = 1; i <= wizard[0].n; i++ ){
		var w = wizard[i];
		
		w.maxmp += ( w.useMagic * ( w.castingTime + w.afterDelay ) ) / 100;
		w.range += ( w.useMagic * ( w.castingTime + w.afterDelay ) ) / 200;
		w.castingTime -= ( w.useMagic * ( w.castingTime + w.afterDelay ) ) / 1200;
		
		if( w.maxmp > 400 ) w.maxmp = 400;
		if( w.range > 400 ) w.range = 400;
		if( w.castingTime < 10 ) w.castingTime = 10;
	}
};

function locateWizard( wizard, mouse ){
	if( mouse.dragIndex > 0 ){
		var w = wizard[ mouse.dragIndex ];
		w.ox = mouse.x + mouse.dragX;
		w.oy = mouse.y + mouse.dragY;

		if( w.ox < 120 ) w.ox = 120;
		if( w.ox > 1100 ) w.ox = 1100;
		if( w.oy < 25 ) w.oy = 25;
		if( w.oy > 95 ) w.oy = 95;
		
		w.x = w.ox;
		w.y = w.oy;
	}
};

function moveWizard( wizard, magic, enemy, text ){
	var i, j;
	
	for( i = 1; i <= wizard[0].n; i++ ){
		var w = wizard[i];
		
		/* mp 자동 회복 */
		if( w.distdistmp < w.maxmp ) w.distdistmp += 0.1;
		
		/* mp 회복 */
		if( w.distmp < w.distdistmp ){
			w.distmp += 2;
			if( w.distmp > w.maxmp ){
				w.distmp = w.distdistmp = w.maxmp;
			}
		}
		if( w.mp < w.distmp ){
			w.mp += 2;
			if( w.mp > w.maxmp ){
				w.mp = w.distmp = w.maxmp;
			}
		}
		/* mp 소모 */
		else if( w.mp > w.distmp ){
			w.mp -= 2;
			if( w.mp < 0 ){
				w.mp = w.distmp = 0;
			}
		}
		
		/* 마법 사용이 끝나면 초기화 */
		if( w.motionDelay == 0 ) w.target = 0;
		
		/* 마법 사용 대상 설정 */
		if( w.mp - w.useMp >= 0 && enemy[0].n > 0 ){
			/* 아군 대상 */
			if( w.type == 6 || w.type == 16 || w.type == 36 ){
				for( j = 1; j <= wizard[0].n; j++ ){
					if( i == j ) continue;
					var w2 = wizard[j];
					
					if( w.type == 6 ){
						if( w.target == 0 ){
							w.target = j;
						}
						else if( w2.distdistmp < wizard[w.target].distdistmp ){
							w.target = j;
						}
					}
					else if( w.type == 16 ){
						if( w2.type != 6 && w2.type != 16 && w2.type != 26 && w2.type != 36 && w2.buffDmg == 1.0 ){
							w.target = j;
						}
					}
					else if( w.type == 36 ){
						if( w2.type != 6 && w2.type != 16 && w2.type != 26 && w2.type != 36 && w2.buffCast == 1.0 ){
							w.target = j;
						}
					}
				}
			}
			/* 적 대상 */
			else{
				for( j = 1; j <= enemy[0].n; j++ ){
					var e = enemy[j];
					if( Math.abs( w.x - e.x ) < w.range * w.plusRange ){
						w.target = j;
						break;
					}
				}
			}
		}
		
		/* 마법을 사용할 대상이 없으면 모션 중지 */
		if( w.target == 0 || enemy[0].n <= 0 ){
			w.motion = w.motionDelay = 0;
		}
		/* 마법 사용 */
		else{
			w.motionDelay++;
			/* mp 소모 */
			if( w.motionDelay == 1 ){
				w.distmp -= w.useMp;
				w.distdistmp -= w.useMp;
			}
			/* 캐스팅 중 */
			if( w.motionDelay <= Math.floor( w.castingTime * w.buffCast * w.plusCast ) ){
				/* 캐스팅 모션 */
				w.motion = 1;
				/* 캐스팅 완료 */
				if( w.motionDelay == Math.floor( w.castingTime * w.buffCast * w.plusCast ) ){
					w.useMagic++;
					/* 아군 대상 마법 발동 */
					if( w.type == 6 || w.type == 16 || w.type == 36 ){
						newMagic( magic, w.type, wizard[i], wizard[w.target] );
						if( w.type == 6 ){
							wizard[w.target].distdistmp += 60;
							newText( text, wizard[w.target].x, wizard[w.target].y, 2, 60 );
						}
						else if( w.type == 16 ) wizard[w.target].buffDmg = 1.5;
						else if( w.type == 36 ) wizard[w.target].buffCast = 0.5;
					}
					/* 다수 적 대상 마법 발동 */
					else if( w.type == 5 || w.type == 11 || w.type == 15 || w.type == 26 || w.type == 33 || w.type == 66 ){
						var count = 0;
						for( j = 1; j <= enemy[0].n; j++ ){
							var e = enemy[j];
							if( Math.abs( w.x - e.x ) < w.range * w.plusRange ){
								newMagic( magic, w.type, wizard[i], enemy[j] );
								count++;
							}
							if( count > 3 ) break;
						}
					}
					/* 단일 적 대상 마법 발동 */
					else{
						w.target = 0;
						for( j = 1; j <= enemy[0].n; j++ ){
							var e = enemy[j];
							if( Math.abs( w.x - e.x ) < w.range * w.plusRange ){
								w.target = j;
								break;
							}
						}
						if( w.target != 0 ) newMagic( magic, w.type, wizard[i], enemy[w.target] );
					}
				}
			}
			/* 캐스팅 완료 후 완드 휘두르기 */
			else if( w.motionDelay <= Math.floor( w.castingTime * w.buffCast * w.plusCast )+6 && w.motionDelay % 2 == 0 ){
				w.motion++;
			}
			else if( w.motionDelay == Math.floor( w.castingTime * w.buffCast * w.plusCast )+7 ){
				w.motion = 5;
			}
			/* 마법 사용 후 딜레이 */
			else if( w.motionDelay >= Math.floor( w.castingTime * w.buffCast * w.plusCast )+w.afterDelay ){
				w.motion = 0;
				w.motionDelay = 0;
			}
		}
	}
};

function printWizard( wizard, scr, img, context ){
	var i;
	for( i = 1; i <= wizard[0].n; i++ ){
		var w = wizard[i];
		context.drawImage( img.wizardHair, w.motion*w.width, (w.hair-1)*w.height,   w.width, w.height, w.x - w.width/2 - scr.x, w.y - w.height/2 - scr.y, w.width, w.height );
		context.drawImage( img.wizardEye,  w.motion*w.width, (w.eye-1)*w.height,    w.width, w.height, w.x - w.width/2 - scr.x, w.y - w.height/2 - scr.y, w.width, w.height );
		context.drawImage( img.wizardRobe, w.motion*w.width, (w.fabric-1)*w.height, w.width, w.height, w.x - w.width/2 - scr.x, w.y - w.height/2 - scr.y, w.width, w.height );
		
		var mp = Math.floor(w.mp);
		var maxmp = Math.floor(w.maxmp);
		var distmp = Math.floor(w.distmp);
		if( w.distmp < w.mp ){
			context.fillStyle = "rgb(216, 216, 216)";
			context.fillRect( w.x - 10 - scr.x, w.y + 30 - scr.y, 20, 4 );
			context.fillStyle = "rgb(144, 144, 255)";
			context.fillRect( w.x - 10 - scr.x, w.y + 30 - scr.y, mp/maxmp*20, 4 );
			context.fillStyle = "rgb(64, 64, 255)";
			context.fillRect( w.x - 10 - scr.x, w.y + 30 - scr.y, distmp/maxmp*20, 4 );
		}
		else{
			context.fillStyle = "rgb(216, 216, 216)";
			context.fillRect( w.x - 10 - scr.x, w.y + 30 - scr.y, 20, 4 );
			context.fillStyle = "rgb(64, 64, 255)";
			context.fillRect( w.x - 10 - scr.x, w.y + 30 - scr.y, mp/maxmp*20, 4 );
		}
	}
};

function printWizardS( wizard, scr, select, img, context ){	
	var i;
	var x = 210, y = 28;
	for( i = 1; i <= wizard[0].n; i++ ){
		var w = wizard[i];
		
		x += 55;
		
		if( i == select ){
			context.fillStyle = "rgba(0,0,255,0.3)";
			context.fillRect( x - 10 - scr.x, y - 10 - scr.y, w.width + 20, w.height + 20 );
		}
		
		context.drawImage( img.wizardHair, w.motion*w.width, (w.hair-1)*w.height,   w.width, w.height, x - scr.x, y - scr.y, w.width, w.height );
		context.drawImage( img.wizardEye,  w.motion*w.width, (w.eye-1)*w.height,    w.width, w.height, x - scr.x, y - scr.y, w.width, w.height );
		context.drawImage( img.wizardRobe, w.motion*w.width, (w.fabric-1)*w.height, w.width, w.height, x - scr.x, y - scr.y, w.width, w.height );
		
		if( i % 6 == 0 ){
			x = 210;
			y += 80;
		}
	}
};