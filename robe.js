function initRobe( robe ){
	robe[0] = new Object();
	robe[0].n = 12;
	
	var i;
	for( i = 1; i <= robe[0].n; i++ ){
		robe[i] = new Object();
	}
	
	robe[1].cost = 1000;
	robe[1].name = "레드";
	robe[1].mp = 1.0;
	robe[1].cast = 1.0;
	robe[1].info1 = "빨간색 원단으로 만든";
	robe[1].info2 = "로브.";
	
	robe[2].cost = 1000;
	robe[2].name = "블루";
	robe[2].mp = 1.0;
	robe[2].cast = 1.0;
	robe[2].info1 = "파란색 원단으로 만든";
	robe[2].info2 = "로브.";
	
	robe[3].cost = 1000;
	robe[3].name = "옐로우";
	robe[3].mp = 1.0;
	robe[3].cast = 1.0;
	robe[3].info1 = "노란색 원단으로 만든";
	robe[3].info2 = "로브.";
	
	robe[4].cost = 1000;
	robe[4].name = "오렌지";
	robe[4].mp = 1.0;
	robe[4].cast = 1.0;
	robe[4].info1 = "주황색 원단으로 만든";
	robe[4].info2 = "로브.";
	
	robe[5].cost = 1000;
	robe[5].name = "그린";
	robe[5].mp = 1.0;
	robe[5].cast = 1.0;
	robe[5].info1 = "초록색 원단으로 만든";
	robe[5].info2 = "로브.";
	
	robe[6].cost = 1000;
	robe[6].name = "핑크";
	robe[6].mp = 1.0;
	robe[6].cast = 1.0;
	robe[6].info1 = "분홍색 원단으로 만든";
	robe[6].info2 = "로브.";
	
	robe[7].cost = 3000;
	robe[7].name = "화이트";
	robe[7].mp = 1.0;
	robe[7].cast = 1.0;
	robe[7].info1 = "하얀색 원단으로 만든";
	robe[7].info2 = "로브.";
	
	robe[8].cost = 3000;
	robe[8].name = "블랙";
	robe[8].mp = 1.0;
	robe[8].cast = 1.0;
	robe[8].info1 = "검정색 원단으로 만든";
	robe[8].info2 = "로브";
	
	robe[9].cost = 0;
	robe[9].name = "베이직 로브";
	robe[9].mp = 1.0;
	robe[9].cast = 1.0;
	robe[9].info1 = "기본 로브.";
	robe[9].info2 = "";
	
	robe[10].cost = 30000;
	robe[10].name = "루나 로브";
	robe[10].mp = 1.1;
	robe[10].cast = 1.1;
	robe[10].info1 = "달의 기운을 머금은";
	robe[10].info2 = "로브.";
	
	robe[11].cost = 100000;
	robe[11].name = "솔라 로브";
	robe[11].mp = 1.3;
	robe[11].cast = 1.2;
	robe[11].info1 = "태양의 기운을 머금은";
	robe[11].info2 = "로브.";
	
	robe[12].cost = 300000;
	robe[12].name = "마스터 로브";
	robe[12].mp = 1.5;
	robe[12].cast = 1.3;
	robe[12].info1 = "최고의 마법사들을";
	robe[12].info2 = "위한 로브.";
};

function printRobeCost( robe, x, y, getRobe, context ){
	context.font = "12px helvetica";
	context.fillStyle = "rgb(0,0,255)";
	
	if( getRobe ){
		context.fillText( "보유", x, y );
		return;
	}
	context.fillStyle = "rgb(0,0,0)";
	
	if( robe.cost <= 999 ) context.fillText( robe.cost, x, y );
	else{
		if( robe.cost % 1000 <= 9 ) context.fillText( Math.floor(robe.cost / 1000) + ",00" + robe.cost % 1000, x, y );
		else if( robe.cost % 1000 <= 99 ) context.fillText( Math.floor(robe.cost / 1000) + ",0" + robe.cost % 1000, x, y );
		else if( robe.cost % 1000 <= 999 ) context.fillText( Math.floor(robe.cost / 1000) + "," + robe.cost % 1000, x, y );
	}
};

function printRobeInfo( robe, context ){
	context.fillStyle = "rgb(0,0,0)";
	
	context.font = "bold 12px helvetica";
	context.fillText( robe.name, 392, 140 );
	
	context.font = "12px helvetica";
	var y = 165;
	if( robe.mp != 1.0 ){
		if( robe.mp > 1.0 ){
			context.fillStyle = "rgb(0,0,255)";
			context.fillText( "정신력 + " + Math.floor((robe.mp*100)%100) + "%", 392, y );
		}
		else{
			context.fillStyle = "rgb(255,0,0)";
			context.fillText( "정신력 - " + ( 100 - Math.floor((robe.mp*100)%100) ) + "%", 392, y );
		}
		y += 20;
	}
	if( robe.cast != 1.0 ){
		if( robe.cast > 1.0 ){
			context.fillStyle = "rgb(0,0,255)";
			context.fillText( "발현 속도 + " + Math.floor((robe.cast*100)%100) + "%", 392, y );
		}
		else{
			context.fillStyle = "rgb(255,0,0)";
			context.fillText( "발현 속도 - " + ( 100 - Math.floor((robe.cast*100)%100) ) + "%", 392, y );
		}
		y += 20;
	}
	context.fillStyle = "rgb(0,0,0)";
	context.fillText( robe.info1, 392, y + 5);
	context.fillText( robe.info2, 392, y + 25 );
	
};