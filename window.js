function initWindow( wind ){
	wind.type = 0;
};

function printWindowSubject( wind, select, img, context ){
	if( wind.type != 1 ) return;
	
	/* 수업 변경 */
	context.drawImage( img.windowSubject, 0, 0, 392, 268, 320 - 392/2, 180 - 268/2, 392, 268 );
	var i;
	var x = 96, y = 228;
	for( i = 1; i <= 6; i++ ){
		x += 64;
		
		if( i == select ){
			context.fillStyle = "rgba(255,0,0,0.2)";
			context.fillRect( x - 32, y - 32, 64, 65 );
		}
	}
	context.drawImage( img.book, 0, 0, 384, 65, 320 - 384/2, 196, 384, 65 );
};

function printWindowWand( wind, mouse, player, wand, wizard, img, context ){
	if( wind.type != 2 ) return;
	
	/* 완드 변경 */
	context.drawImage( img.windowWand, 0, 0, 392, 268, 320 - 392/2, 180 - 268/2, 392, 268 );
	
	var i;
	var x = 97, y = 77;
	for( i = 1; i <= 12; i++ ){
		x += 64;
		
		if( i == mouse.selectWand ){
			context.fillStyle = "rgba(255,0,0,0.2)";
			context.fillRect( x - 32, y - 27, 64, 54 );
			printWandInfo( wand[i], context );
		}
		
		context.drawImage( img.wand, (i-1)*64, 0, 64, 54, x - 32, y - 27, 64, 54 );
		printWandCost( wand[i], x-16, y+40, wizard[ mouse.selectWizard ].getWand[i], context );
		
		if( i % 4 == 0 ){
			x = 97;
			y += 70;
		}
	}
	
	printMoney( player.money, 408, 257, context );
};

function printWindowRobe( wind, mouse, player, robe, wizard, img, context ){
	if( wind.type != 3 ) return;
	
	/* 로브 변경 */
	context.drawImage( img.windowRobe, 0, 0, 392, 268, 320 - 392/2, 180 - 268/2, 392, 268 );
	var i;
	var x = 96, y = 77;
	for( i = 1; i <= 12; i++ ){
		x += 64;
		if( i == mouse.selectFabric ){
			context.fillStyle = "rgba(255,0,0,0.2)";
			context.fillRect( x - 32, y - 27, 64, 54 );
		}
		if( i == mouse.selectRobe ){
			context.fillStyle = "rgba(255,0,0,0.2)";
			context.fillRect( x - 32, y - 27, 64, 54 );
			printRobeInfo( robe[i], context );
		}
		
		context.drawImage( img.robe, (i-1)*64, 0, 64, 54, x - 32, y - 27, 64, 54 );
		printRobeCost( robe[i], x-16, y+40, wizard[ mouse.selectWizard ].getRobe[i], context );
		
		if( i % 4 == 0 ){
			x = 96;
			y += 70;
		}
	}
	
	printMoney( player.money, 408, 257, context );
};

function printWindowInfo( wind, mouse, wizard, wand, robe, img, context ){
	if( wind.type != 4 ) return;
	
	var w = wizard[mouse.selectWizard];
	
	/* 상세 정보 */
	context.drawImage( img.windowInfo, 0, 0, 198, 308, 320 - 198/2, 180 - 308/2, 198, 308 );
	
	context.fillStyle = "rgb(0,0,0)";
	context.font = "bold 12px helvetica";
	context.fillText( w.name, 232, 48 );
	context.fillText( "속성", 232, 68 );
	if( w.type < 9 ){
		context.drawImage( img.element, ( w.type - 1 ) * 24, 0, 24, 24, 230, 71, 24, 24 );	
	}
	else{
		context.drawImage( img.element, ( Math.floor(w.type / 10) - 1 ) * 24, 0, 24, 24, 230, 71, 24, 24 );
		context.drawImage( img.element, ( w.type % 10 - 1 ) * 24, 0, 24, 24, 256, 71, 24, 24 );	
	}
	
	context.font = "bold 12px helvetica";
	context.fillText( "마법", 322, 68 );
	context.font = "12px helvetica";
	var magicName = setMagicName( w.type );
	context.fillText( magicName, 322, 88 );
	
	context.font = "bold 12px helvetica";
	context.fillText( "설명 : ", 232, 108 );
	context.font = "12px helvetica";
	var magicInfo1 = setMagicInfo1( w.type ), magicInfo2 = setMagicInfo2( w.type );
	context.fillText( magicInfo1, 267, 108 );
	context.fillText( magicInfo2, 267, 128 );
	
	context.font = "bold 12px helvetica";
	context.fillText( "지식 수준", 232, 148 );
	context.font = "12px helvetica";
	var i;
	for( i = 1; i <= 6; i++ ){
		context.drawImage( img.element, ( i - 1 ) * 24, 0, 24, 24, 230 + ( i - 1 )*31, 151, 24, 24 );
		context.fillText( w.score[i], 233 + ( i - 1 )*31, 190 );
	}
	
	context.font = "bold 12px helvetica";
	context.fillText( "공격력", 232, 210 );
	context.fillText( "정신력", 232, 230 );
	context.fillText( "사정거리", 232, 250 );
	context.fillText( "발현속도", 232, 270 );
	context.fillText( "정신소모", 322, 230 );
	context.fillText( "후딜레이", 322, 270 );
	context.font = "12px helvetica";
	context.fillText( " : " + denum( w.dmg * w.plusDmg, 0 ), 283, 210 );
	context.fillText( " : " + denum( w.maxmp * w.plusMp, 0 ), 283, 230 );
	context.fillText( " : " + denum( w.range * w.plusRange, 0 ), 283, 250 );
	if( w.type == 0 ) context.fillText( " : 0s", 283, 270 );
	else context.fillText( " : " + denum( 0.3 * w.castingTime * w.plusCast / 10, 1 ) + "s", 283, 270 );
	context.fillText( " : " + w.useMp, 373, 230 );
	context.fillText( " : " + denum( 0.3 * w.afterDelay / 10, 1 ) + "s", 373, 270 );
};

function printWindowResult( wind, wizard, player, mouse, img, context ){
	if( wind.type != 1 ) return;
	
	/* 결산 */
	context.drawImage( img.windowResult, 0, 0, 296, 248, 320 - 296/2, 180 - 248/2, 296, 248 );
	
	context.fillStyle = "rgb(0,0,0)";
	
	/* 돈 */
	context.font = "12px helvetica";
	context.fillText( "사용 금액 : ", 182, 78 );
	printMoney( player.outMoney, 242, 78, context );
	context.fillText( "획득 금액 : ", 182, 100 );
	printMoney( player.inMoney, 242, 100, context );
	context.fillText( "소지 금액 : ", 182, 122 );
	printMoney( player.money, 242, 122, context );
	
	/* 인원 */
	var i;
	var cnt1 = 0, cnt2 = 0, cnt3 = 0;
	for( i = 1; i <= wizard[0].n; i++ ){
		var w = wizard[i];
		if( w.type == 0 ) cnt1++;
		else if( w.type <= 9 ) cnt2++;
		else cnt3++;
	}
	context.fillText( "견습  마법사 : " + cnt1 + "명", 182, 152 );
	context.fillText( "1속성 마법사 : " + cnt2 + "명", 182, 174 );
	context.fillText( "2속성 마법사 : " + cnt3 + "명", 182, 196 );
	context.fillText( "3속성 마법사 : 1명", 182, 218 );
	context.fillText( "총 마법사 : " + (wizard[0].n+1) + "명", 182, 240 );
	
	/* 마법사 정보 */
	var w = wizard[ mouse.target ];
	context.drawImage( img.wizardHair, w.motion*w.width, (w.hair-1)*w.height,   w.width, w.height, 402 - w.width/2, 94 - w.height/2, w.width, w.height );
	context.drawImage( img.wizardEye,  w.motion*w.width, (w.eye-1)*w.height,    w.width, w.height, 402 - w.width/2, 94 - w.height/2, w.width, w.height );
	context.drawImage( img.wizardRobe, w.motion*w.width, (w.fabric-1)*w.height, w.width, w.height, 402 - w.width/2, 94 - w.height/2, w.width, w.height );
	
	
	context.font = "bold 12px helvetica";
	context.fillText( w.name, 345, 152 );
	context.font = "12px helvetica";
	context.drawImage( img.element, ( w.subject - 1 ) * 24, 0, 24, 24, 345, 157, 24, 24 );
	if( w.type%10 == Math.floor(w.type/10) && w.type%10 == w.subject ) context.fillText( "속성 지식 +1.5", 370, 174 );
	else context.fillText( "속성 지식 +3", 370, 174 );
	if( w.deltaDmg > 0 ){
		context.fillText( "공격력 +", 345, 196 );
		context.fillText( denum( w.deltaDmg, 1 ), 395, 196 );
	}
};

function printWindowPlayResult( wind, wizard, player, mouse, img, context ){
	if( wind.type != 1 ) return;
	
	/* 결산 */
	context.drawImage( img.windowResult, 0, 0, 296, 248, 320 - 296/2, 180 - 248/2, 296, 248 );
	
	context.fillStyle = "rgb(0,0,0)";
	
	/* 돈 */
	context.font = "12px helvetica";
	context.fillText( "해치운 적 : ", 182, 78 );
	context.fillText( player.killEnemy + "명", 242, 78 );
	context.fillText( "획득 금액 : ", 182, 100 );
	printMoney( player.inMoney, 242, 100, context );
	context.fillText( "소지 금액 : ", 182, 122 );
	printMoney( player.money, 242, 122, context );
	
	/* 인원 */
	var i;
	var cnt1 = 0, cnt2 = 0, cnt3 = 0;
	for( i = 1; i <= wizard[0].n; i++ ){
		var w = wizard[i];
		if( w.type == 0 ) cnt1++;
		else if( w.type <= 9 ) cnt2++;
		else cnt3++;
	}
	context.fillText( "견습  마법사 : " + cnt1 + "명", 182, 152 );
	context.fillText( "1속성 마법사 : " + cnt2 + "명", 182, 174 );
	context.fillText( "2속성 마법사 : " + cnt3 + "명", 182, 196 );
	context.fillText( "3속성 마법사 : 1명", 182, 218 );
	context.fillText( "총 마법사 : " + (wizard[0].n+1) + "명", 182, 240 );
	
	/* 마법사 정보 */
	var w = wizard[ mouse.target ];
	context.drawImage( img.wizardHair, w.motion*w.width, (w.hair-1)*w.height,   w.width, w.height, 402 - w.width/2, 94 - w.height/2, w.width, w.height );
	context.drawImage( img.wizardEye,  w.motion*w.width, (w.eye-1)*w.height,    w.width, w.height, 402 - w.width/2, 94 - w.height/2, w.width, w.height );
	context.drawImage( img.wizardRobe, w.motion*w.width, (w.fabric-1)*w.height, w.width, w.height, 402 - w.width/2, 94 - w.height/2, w.width, w.height );
	
	
	context.font = "bold 12px helvetica";
	context.fillText( w.name, 345, 152 );
	context.font = "12px helvetica";
	context.fillText( "마법 사용 : ", 345, 174 );
	context.fillText( w.useMagic + "회", 405, 174 );
	context.fillText( "정신력 +", 345, 196 );
	context.fillText( denum( w.useMagic * ( w.castingTime + w.afterDelay ) / 100, 1 ), 395, 196 );
	context.fillText( "사정거리 +", 345, 218 );
	context.fillText( denum( ( w.useMagic * ( w.castingTime + w.afterDelay ) ) / 200, 1 ), 405, 218 );
	context.fillText( "발현속도 -", 345, 240 );
	context.fillText( ( denum( w.useMagic * ( w.castingTime + w.afterDelay ) / 40000, 2 ) ) + "s", 405, 240 );
};