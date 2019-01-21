function initWand( wand ){
	wand[0] = new Object();
	wand[0].n = 12;
	
	var i;
	for( i = 1; i <= wand[0].n; i++ ){
		wand[i] = new Object();
	}
	
	wand[1].cost = 0;
	wand[1].name = "나무 완드";
	wand[1].dmg = 1.0;
	wand[1].range = 1.0;
	wand[1].info1 = "초보자용 완드.";
	wand[1].info2 = "";
	
	wand[2].cost = 1500;
	wand[2].name = "플라스틱 완드";
	wand[2].dmg = 1.0;
	wand[2].range = 1.05;
	wand[2].info1 = "플라스틱으로 만든";
	wand[2].info2 = "연습용 완드.";
	
	wand[3].cost = 3000;
	wand[3].name = "스톤 완드";
	wand[3].dmg = 1.1;
	wand[3].range = 0.9;
	wand[3].info1 = "돌로 만든 완드.";
	wand[3].info2 = "무겁다.";
	
	wand[4].cost = 5000;
	wand[4].name = "크리스탈 완드";
	wand[4].dmg = 1.05;
	wand[4].range = 1.05;
	wand[4].info1 = "유리 구슬로 장식한";
	wand[4].info2 = "완드.";
	
	wand[5].cost = 10000;
	wand[5].name = "가넷 완드";
	wand[5].dmg = 1.1;
	wand[5].range = 1.0;
	wand[5].info1 = "가넷으로 장식한 완드.";
	wand[5].info2 = "";
	
	wand[6].cost = 20000;
	wand[6].name = "토파즈 완드";
	wand[6].dmg = 1.3;
	wand[6].range = 0.9;
	wand[6].info1 = "토파즈로 장식한 완드.";
	wand[6].info2 = "";
	
	wand[7].cost = 50000;
	wand[7].name = "오팔 완드";
	wand[7].dmg = 1.2;
	wand[7].range = 1.2;
	wand[7].info1 = "오팔로 장식한 완드.";
	wand[7].info2 = "영롱하게 빛난다.";
	
	wand[8].cost = 70000;
	wand[8].name = "아쿠아마린 완드";
	wand[8].dmg = 0.9;
	wand[8].range = 1.5;
	wand[8].info1 = "아쿠아마린으로";
	wand[8].info2 = "장식한 완드.";
	
	wand[9].cost = 100000;
	wand[9].name = "에메랄드 완드";
	wand[9].dmg = 1.2;
	wand[9].range = 1.3;
	wand[9].info1 = "에메랄드로 장식한";
	wand[9].info2 = "완드.";
	
	wand[10].cost = 150000;
	wand[10].name = "사파이어 완드";
	wand[10].dmg = 1.3;
	wand[10].range = 1.3;
	wand[10].info1 = "사파이어로 장식한";
	wand[10].info2 = "완드.";
	
	wand[11].cost = 200000;
	wand[11].name = "루비 완드";
	wand[11].dmg = 1.5;
	wand[11].range = 1.2;
	wand[11].info1 = "루비로 장식한";
	wand[11].info2 = "완드.";
	
	wand[12].cost = 300000;
	wand[12].name = "다이아몬드 완드";
	wand[12].dmg = 1.5;
	wand[12].range = 1.5;
	wand[12].info1 = "다이아몬드로 장식한";
	wand[12].info2 = "완드.";
};

function printWandCost( wand, x, y, getWand, context ){
	context.font = "12px helvetica";
	context.fillStyle = "rgb(0,0,255)";
	
	if( getWand ){
		context.fillText( "보유", x, y );
		return;
	}
	
	context.fillStyle = "rgb(0,0,0)";
	if( wand.cost <= 999 ) context.fillText( wand.cost, x, y );
	else{
		if( wand.cost % 1000 <= 9 ) context.fillText( Math.floor(wand.cost / 1000) + ",00" + wand.cost % 1000, x, y );
		else if( wand.cost % 1000 <= 99 ) context.fillText( Math.floor(wand.cost / 1000) + ",0" + wand.cost % 1000, x, y );
		else if( wand.cost % 1000 <= 999 ) context.fillText( Math.floor(wand.cost / 1000) + "," + wand.cost % 1000, x, y );
	}
};

function printWandInfo( wand, context ){
	context.fillStyle = "rgb(0,0,0)";
	
	context.font = "bold 12px helvetica";
	context.fillText( wand.name, 392, 140 );
	
	context.font = "12px helvetica";
	var y = 165;
	if( wand.dmg != 1.0 ){
		if( wand.dmg > 1.0 ){
			context.fillStyle = "rgb(0,0,255)";
			context.fillText( "공격력 + " + Math.floor((wand.dmg*100)%100) + "%", 392, y );
		}
		else{
			context.fillStyle = "rgb(255,0,0)";
			context.fillText( "공격력 - " + ( 100 - Math.floor((wand.dmg*100)%100) ) + "%", 392, y );
		}
		y += 20;
	}
	if( wand.range != 1.0 ){
		if( wand.range > 1.0 ){
			context.fillStyle = "rgb(0,0,255)";
			context.fillText( "사정거리 + " + Math.floor((wand.range*100)%100) + "%", 392, y );
		}
		else{
			context.fillStyle = "rgb(255,0,0)";
			context.fillText( "사정거리 - " + ( 100 - Math.floor((wand.range*100)%100) ) + "%", 392, y );
		}
		y += 20;
	}
	context.fillStyle = "rgb(0,0,0)";
	context.fillText( wand.info1, 392, y + 5);
	context.fillText( wand.info2, 392, y + 25 );
	
};