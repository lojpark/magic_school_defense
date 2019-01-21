function initButton( btn ){
	var i;
	
	btn[0] = new Object();
	btn[0].n = 19;
	
	btn[1] = new Object();
	btn[1].x = 613.5;
	btn[1].y = 52.5;
	btn[1].width = 25;
	btn[1].height = 77;
	btn[1].isClick = false;
	btn[1].isAble = true;
	
	btn[2] = new Object();
	btn[2].x = 613.5;
	btn[2].y = 133.5;
	btn[2].width = 25;
	btn[2].height = 77;
	btn[2].isClick = false;
	btn[2].isAble = true;
	
	for( i = 3; i <= 9; i++ ){
		btn[i] = new Object();
		btn[i].width = 94;
		btn[i].height = 45;
		btn[i].isClick = false;
		btn[i].isAble = true;
	}
	for( i = 3; i <= 5; i++ ){
		btn[i].x = 383 + (i-3) * 100;
		btn[i].y = 275.5;
	}
	for( i = 6; i <= 9; i++ ){
		btn[i].x = 283 + (i-6) * 100;
		btn[i].y = 326.5;
	}
	
	btn[10] = new Object();
	btn[10].x = 223;
	btn[10].y = 287;
	btn[10].width = 190;
	btn[10].height = 46;
	btn[10].isClick = false;
	btn[10].isAble = true;
	
	btn[11] = new Object();
	btn[11].x = 417;
	btn[11].y = 287;
	btn[11].width = 190;
	btn[11].height = 46;
	btn[11].isClick = false;
	btn[11].isAble = true;
	
	btn[12] = new Object();
	btn[12].x = 320;
	btn[12].y = 307;
	btn[12].width = 190;
	btn[12].height = 46;
	btn[12].isClick = false;
	btn[12].isAble = true;
	
	for( i = 13; i <= 15; i++ ){
		btn[i] = new Object();
		btn[i].x = 120 + (i-13)*200;
		btn[i].y = 200;
		btn[i].width = 170;
		btn[i].height = 270;
		btn[i].isClick = false;
		btn[i].isAble = true;
	}
	for( i = 16; i <= 17; i++ ){
		btn[i] = new Object();
		btn[i].x = 366 + (i-16)*72;
		btn[i].y = 94;
		btn[i].width = 12;
		btn[i].height = 23;
		btn[i].isClick = false;
		btn[i].isAble = true;
	}
	btn[18] = new Object();
	btn[18].x = 320;
	btn[18].y = 277;
	btn[18].width = 288;
	btn[18].height = 46;
	btn[18].isClick = false;
	btn[18].isAble = true;
	
	btn[19] = new Object();
	btn[19].x = 320;
	btn[19].y = 277;
	btn[19].width = 288;
	btn[19].height = 46;
	btn[19].isClick = false;
	btn[19].isAble = true;
};

function setButton( btn, mouse, scr, wizard ){
	var i;
	for( i = 1; i <= btn[0].n; i++ ){
		btn[i].isClick = false;
		btn[i].isAble = true;
	}
	
	if( scr.y <= 0 ) btn[1].isAble = false;
	if( scr.y >= Math.floor( ( wizard[0].n - 1 ) / 6 - 1 ) * 80 ) btn[2].isAble = false;
	
	if( mouse.selectWizard == 0 ){
		btn[3].isAble = false;
		btn[4].isAble = false;
		btn[5].isAble = false;
		btn[6].isAble = false;
	}
	
	/* 속성발현 */
	btn[7].isAble = false;
	if( mouse.selectWizard != 0 ){
		var w = wizard[ mouse.selectWizard ];
		if( w.type == 0 ){
			var cnt = 0;
			for( i = 1; i <= 6; i++ ){
				if( w.score[i] >= 30 ){
					cnt++;
					break;
				}
			}
			if( cnt >= 1 ){
				btn[7].isAble = true;
			}
		}
		else if( w.type <= 9 ){
			var cnt1 = 0, cnt2 = 0;
			for( i = 1; i <= 6; i++ ){
				if( w.score[i] >= 70 ){
					cnt1++;
					break;
				}
				if( w.score[i] >= 45 ) cnt2++;
			}
			if( cnt1 >= 1 || cnt2 >= 2 ){
				btn[7].isAble = true;
			}
		}
	}
	
	btn[13].isAble = btn[14].isAble = btn[15].isAble = false;
	if( mouse.target <= 1 ) btn[16].isAble = false;
	if( mouse.target >= wizard[0].n ) btn[17].isAble = false;
};

function isClickButton( btn, mouse, scr, game, wind ){
	var i;
	var st = 1, ed = btn[0].n;
	
	if( game.status == 3 ){
		st = 19;
		ed = 19;
	}
	else if( game.status == 4 ){
		if( wind.type == 0 ){
			st = 1;
			ed = 9;
		}
		else if( wind.type == 1 || wind.type == 2 || wind.type == 3 ){
			st = 10;
			ed = 11;
		}
		else if( wind.type == 4 ){
			st = 12;
			ed = 12;
		}
	}
	else if( game.status == 5 ){
		if( wind.type == 0 ){
			st = 13;
			ed = 15;
		}
		else if( wind.type == 1 ){
			st = 16;
			ed = 18;
		}
	}
	else if( game.status == 6 ){
		st = 19;
		ed = 19;
	}
	else if( game.status == 7 ){
		st = 16;
		ed = 18;
	}
	
	for( i = st; i <= ed; i++ ){
		if( mouse.x >= btn[i].x - btn[i].width/2 && mouse.x <= btn[i].x + btn[i].width/2 ){
			if( mouse.y >= btn[i].y - btn[i].height/2 && mouse.y <= btn[i].y + btn[i].height/2 ){
				btn[i].isClick = true;
				mouse.down = false;
				return true;
			}
		}
	}
	return false;
};

function clickButton( btn, mouse, scr, wind, game, player, wizard, wand, robe, stone ){
	var i;
	var st = 1, ed = btn[0].n;
	
	if( game.status == 3 ){
		st = 19;
		ed = 19;
	}
	else if( game.status == 4 ){
		if( wind.type == 0 ){
			st = 1;
			ed = 9;
		}
		else if( wind.type == 1 || wind.type == 2 || wind.type == 3 ){
			st = 10;
			ed = 11;
		}
		else if( wind.type == 4 ){
			st = 12;
			ed = 12;
		}
	}
	else if( game.status == 5 ){
		if( wind.type == 0 ){
			st = 13;
			ed = 15;
		}
		else if( wind.type == 1 ){
			st = 16;
			ed = 18;
		}
	}
	else if( game.status == 6 ){
		st = 19;
		ed = 19;
	}
	else if( game.status == 7 ){
		st = 16;
		ed = 18;
	}
	
	for( i = st; i <= ed; i++ ){
		if( !btn[i].isAble ) continue;
		if( mouse.x >= btn[i].x - btn[i].width/2 && mouse.x <= btn[i].x + btn[i].width/2 ){
			if( mouse.y >= btn[i].y - btn[i].height/2 && mouse.y <= btn[i].y + btn[i].height/2 ){
				activeButton( i, mouse, scr, wind, game, player, wizard, wand, robe, stone );
			}
		}
	}
};

function activeButton( type, mouse, scr, wind, game, player, wizard, wand, robe, stone ){
	switch( type ){
		case 1:
			scr.oy -= 40;
			scr.y -= 40;
			break;
		case 2:
			scr.oy += 40;
			scr.y += 40;
			break;
		case 3:
			wind.type = 1;
			mouse.selectSubject = wizard[ mouse.selectWizard ].subject;
			break;
		case 4:
			wind.type = 2;
			mouse.selectWand = wizard[ mouse.selectWizard ].wand;
			break;
		case 5:
			wind.type = 3;
			mouse.selectFabric = wizard[ mouse.selectWizard ].fabric;
			mouse.selectRobe = wizard[ mouse.selectWizard ].robe;
			break;
		case 6:
			wind.type = 4;
			break;
		case 7: // 속성 발현
			var w = wizard[ mouse.selectWizard ];
			if( w.type == 0 ){
				var maxv = 0, maxi = 0;
				for( i = 1; i <= 6; i++ ){
					if( maxv < w.score[i] ){
						maxv = w.score[i];
						maxi = i;
					}
				}
				w.type = maxi;
			}
			else if( w.type <= 9 ){
				var maxv1 = 0, maxi1 = 0;
				for( i = 1; i <= 6; i++ ){
					if( maxv1 < w.score[i] ){
						maxv1 = w.score[i];
						maxi1 = i;
					}
				}
				var maxv2 = 0, maxi2 = 0;
				for( i = 1; i <= 6; i++ ){
					if( maxv2 < w.score[i] && maxi1 != i ){
						maxv2 = w.score[i];
						maxi2 = i;
					}
				}
				if( maxv1 >= 70 ) w.type = maxi1 * 10 + maxi1;
				else{
					if( maxi1 < maxi2 ) w.type = maxi1 * 10 + maxi2;
					else w.type = maxi2 * 10 + maxi1;
				}
			}
			rebirthWizard( w );
			resetWizard( wizard );
			break;
		case 9:
			game.status = 5;
			break;
		case 10: // 변경 확인
			/* 수업 변경 */
			if( wind.type == 1 ) wizard[ mouse.selectWizard ].subject = mouse.selectSubject;
			/* 완드 변경 */
			if( wind.type == 2 ){
				if( !wizard[ mouse.selectWizard ].getWand[ mouse.selectWand ] ){ // 완드를 보유하지 않았다면
					if( player.money >= wand[ mouse.selectWand ].cost ){ // 돈이 있으면 산다.
						wizard[ mouse.selectWizard ].getWand[ mouse.selectWand ] = true;
						player.money -= wand[ mouse.selectWand ].cost;
						player.outMoney += wand[ mouse.selectWand ].cost;
					}
					else return; // 돈이 없으면 못 산다.
				}
				/* 완드 교체 */
				wizard[ mouse.selectWizard ].wand = mouse.selectWand;
				wizard[ mouse.selectWizard ].plusDmg = wand[ mouse.selectWand ].dmg;
				wizard[ mouse.selectWizard ].plusRange = wand[ mouse.selectWand ].range;
			}
			/* 로브 변경 */
			if( wind.type == 3 ){
				var tmpCost = 0;
				if( !wizard[ mouse.selectWizard ].getRobe[ mouse.selectFabric ] ) tmpCost += robe[ mouse.selectFabric ].cost;
				if( !wizard[ mouse.selectWizard ].getRobe[ mouse.selectRobe ] ) tmpCost += robe[ mouse.selectRobe ].cost;
				
				if( player.money >= tmpCost ){ // 원단과 로브를 둘 다 살 수 있으면 산다.
					if( !wizard[ mouse.selectWizard ].getRobe[ mouse.selectFabric ] ){ // 원단 미보유시 돈 감소
						wizard[ mouse.selectWizard ].getRobe[ mouse.selectFabric ] = true;
						player.money -= robe[ mouse.selectFabric ].cost;
						player.outMoney += robe[ mouse.selectFabric ].cost;
					}
					if( !wizard[ mouse.selectWizard ].getRobe[ mouse.selectRobe ] ){ // 로브 미보유시 돈 감소
						wizard[ mouse.selectWizard ].getRobe[ mouse.selectRobe ] = true;
						player.money -= robe[ mouse.selectRobe ].cost;
						player.outMoney += robe[ mouse.selectRobe ].cost;
					}
					/* 로브 교체 */
					wizard[ mouse.selectWizard ].fabric = mouse.selectFabric;
					wizard[ mouse.selectWizard ].robe = mouse.selectRobe;
					wizard[ mouse.selectWizard ].plusMp = robe[ mouse.selectRobe ].mp;
					wizard[ mouse.selectWizard ].plusCast = 2.0 - robe[ mouse.selectRobe ].cast;
				}
				else return;
			}
			wind.type = 0;
			break;
		case 11: // 변경 취소
			wind.type = 0;
			break;
		case 12: // 창 확인
			wind.type = 0;
			break;
		case 13: // 수호의 돌 강화
			scr.vy = 6.4;
			player.todo = 1;
			stone.n += 2;
			break;
		case 14: // 주문서 제작
			player.todo = 2;
			player.money += 100000;
			player.inMoney += 100000;
			break;
		case 15: // 마법 발현
			player.todo = 3;
			break;
		case 16: // ◀
			mouse.target--;
			break;
		case 17: // ▶
			mouse.target++;
			break;
		case 18: // 결산 확인
			wind.type = 0;
			scr.vx = 12;
			if( scr.y != 0 ) scr.vy = 6.4;
			break;
		case 19: // 화면 확인
			game.status++;
			break;
	}
};

function printButton3( btn, img, context ){
	var i;
	
	for( i = 19; i <= 19; i++ ){
		if( !btn[i].isAble ){
			context.drawImage( img.btnOK, 0, 0, btn[i].width, btn[i].height, 
								btn[i].x - btn[i].width/2, btn[i].y - btn[i].height/2, btn[i].width, btn[i].height );
		}
		else if( btn[i].isClick ){
			context.drawImage( img.btnOK, 0, btn[i].height*2, btn[i].width, btn[i].height, 
								btn[i].x - btn[i].width/2, btn[i].y - btn[i].height/2, btn[i].width, btn[i].height );
		}
		else{
			context.drawImage( img.btnOK, 0, btn[i].height, btn[i].width, btn[i].height, 
								btn[i].x - btn[i].width/2, btn[i].y - btn[i].height/2, btn[i].width, btn[i].height );
		}
	}
};

function printButton4( btn, img, context ){
	var i;
	for( i = 1; i <= 2; i++ ){
		if( !btn[i].isAble ){
			context.drawImage( img.btnGreen, 0, btn[i].height * (i-1), btn[i].width, btn[i].height, 
								btn[i].x - btn[i].width/2, btn[i].y - btn[i].height/2, btn[i].width, btn[i].height );
		}
		else if( btn[i].isClick ){
			context.drawImage( img.btnGreen, btn[i].width * 2, btn[i].height * (i-1), btn[i].width, btn[i].height, 
								btn[i].x - btn[i].width/2, btn[i].y - btn[i].height/2, btn[i].width, btn[i].height );
		}
		else{
			context.drawImage( img.btnGreen, btn[i].width, btn[i].height * (i-1), btn[i].width, btn[i].height, 
								btn[i].x - btn[i].width/2, btn[i].y - btn[i].height/2, btn[i].width, btn[i].height );
		}
	}
	
	for( i = 3; i <= 9; i++ ){
		if( !btn[i].isAble ){
			context.drawImage( img.btnOrange, btn[i].width * (i-3), 0, btn[i].width, btn[i].height, 
								btn[i].x - btn[i].width/2, btn[i].y - btn[i].height/2, btn[i].width, btn[i].height );
		}
		else if( btn[i].isClick ){
			context.drawImage( img.btnOrange, btn[i].width * (i-3), btn[i].height * 2, btn[i].width, btn[i].height, 
								btn[i].x - btn[i].width/2, btn[i].y - btn[i].height/2, btn[i].width, btn[i].height );
		}
		else{
			context.drawImage( img.btnOrange, btn[i].width * (i-3), btn[i].height, btn[i].width, btn[i].height, 
								btn[i].x - btn[i].width/2, btn[i].y - btn[i].height/2, btn[i].width, btn[i].height );
		}
	}
};

function printWindowButton4( btn, wind, img, context ){
	var i;
	var st = 1, ed = 1;
	
	if( wind.type == 0 ) return;
	if( wind.type == 1 || wind.type == 2 || wind.type == 3 ){
		st = 10;
		ed = 11;
	}
	if( wind.type == 4 ){
		st = 12;
		ed = 12;
	}
	
	for( i = st; i <= ed; i++ ){
		if( !btn[i].isAble ){
			context.drawImage( img.btnPink, btn[i].width * (i-10), 0, btn[i].width, btn[i].height, 
								btn[i].x - btn[i].width/2, btn[i].y - btn[i].height/2, btn[i].width, btn[i].height );
		}
		else if( btn[i].isClick ){
			context.drawImage( img.btnPink, btn[i].width * (i-10), btn[i].height * 2, btn[i].width, btn[i].height, 
								btn[i].x - btn[i].width/2, btn[i].y - btn[i].height/2, btn[i].width, btn[i].height );
		}
		else{
			context.drawImage( img.btnPink, btn[i].width * (i-10), btn[i].height, btn[i].width, btn[i].height, 
								btn[i].x - btn[i].width/2, btn[i].y - btn[i].height/2, btn[i].width, btn[i].height );
		}
	}
};

function printButton5( btn, img, context ){
	var i;
	for( i = 13; i <= 15; i++ ){
		if( !btn[i].isAble ){
		}
		else if( btn[i].isClick ){
			context.drawImage( img.btnTodo, btn[i].width * (i-13), 0, btn[i].width, btn[i].height, 
								btn[i].x - btn[i].width/2, btn[i].y - btn[i].height/2, btn[i].width, btn[i].height );
		}
		else{
			context.drawImage( img.btnTodo, btn[i].width * (i-13), 0, btn[i].width, btn[i].height, 
								btn[i].x - btn[i].width/2, btn[i].y - btn[i].height/2, btn[i].width, btn[i].height );
		}
	}
};

function printWindowButton5( btn, wind, img, context ){ // 결산
	if( wind.type == 0 ) return;
	
	var i;
	
	for( i = 16; i <= 17; i++ ){
		if( !btn[i].isAble ){
			context.drawImage( img.btnLR, btn[i].width * (i-16), 0, btn[i].width, btn[i].height, 
								btn[i].x - btn[i].width/2, btn[i].y - btn[i].height/2, btn[i].width, btn[i].height );
		}
		else if( btn[i].isClick ){
			context.drawImage( img.btnLR, btn[i].width * (i-16), btn[i].height*2, btn[i].width, btn[i].height, 
								btn[i].x - btn[i].width/2, btn[i].y - btn[i].height/2, btn[i].width, btn[i].height );
		}
		else{
			context.drawImage( img.btnLR, btn[i].width * (i-16), btn[i].height, btn[i].width, btn[i].height, 
								btn[i].x - btn[i].width/2, btn[i].y - btn[i].height/2, btn[i].width, btn[i].height );
		}
	}
	for( i = 18; i <= 18; i++ ){
		if( !btn[i].isAble ){
			context.drawImage( img.btnOK, 0, 0, btn[i].width, btn[i].height, 
								btn[i].x - btn[i].width/2, btn[i].y - btn[i].height/2, btn[i].width, btn[i].height );
		}
		else if( btn[i].isClick ){
			context.drawImage( img.btnOK, 0, btn[i].height*2, btn[i].width, btn[i].height, 
								btn[i].x - btn[i].width/2, btn[i].y - btn[i].height/2, btn[i].width, btn[i].height );
		}
		else{
			context.drawImage( img.btnOK, 0, btn[i].height, btn[i].width, btn[i].height, 
								btn[i].x - btn[i].width/2, btn[i].y - btn[i].height/2, btn[i].width, btn[i].height );
		}
	}
};

function printButton6( btn, img, context ){
	var i;
	for( i = 19; i <= 19; i++ ){
		if( !btn[i].isAble ){
			context.drawImage( img.btnOK, 0, 0, btn[i].width, btn[i].height, 
								btn[i].x - btn[i].width/2, btn[i].y - btn[i].height/2, btn[i].width, btn[i].height );
		}
		else if( btn[i].isClick ){
			context.drawImage( img.btnOK, 0, btn[i].height*2, btn[i].width, btn[i].height, 
								btn[i].x - btn[i].width/2, btn[i].y - btn[i].height/2, btn[i].width, btn[i].height );
		}
		else{
			context.drawImage( img.btnOK, 0, btn[i].height, btn[i].width, btn[i].height, 
								btn[i].x - btn[i].width/2, btn[i].y - btn[i].height/2, btn[i].width, btn[i].height );
		}
	}
};