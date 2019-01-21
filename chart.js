function printScoreChart( wizard, mouse, context ){
	var w;
	if( mouse.selectWizard != 0 ) w = wizard[ mouse.selectWizard ];
	else return;
	
	context.strokeStyle = "rgb(255,0,0)";
	
	var i;
	var score = new Array();
	for( i = 1; i <= 6; i++ ){
		score[i] = new Object();
		score[i].x = score[i].y = 0;
	}
	
	var motion = Math.sin( mouse.time );
	
	score[1].x = 118;
	score[1].y = Math.floor( 92 - w.score[1]*54 * motion / 100 );
	
	score[2].x = Math.floor( 118 + w.score[2]*55 * motion / 100 );
	score[2].y = Math.floor( 92 - w.score[2]*27 * motion / 100 );
	
	score[3].x = Math.floor( 118 + w.score[3]*55 * motion / 100 );
	score[3].y = Math.floor( 93 + w.score[3]*27 * motion / 100 );

	score[4].x = 118;
	score[4].y = Math.floor( 93 + w.score[4]*54 * motion / 100 );
	
	score[5].x = Math.floor( 118 - w.score[5]*55 * motion / 100 );
	score[5].y = Math.floor( 93 + w.score[5]*27 * motion / 100 );
	
	score[6].x = Math.floor( 118 - w.score[6]*55 * motion / 100 );
	score[6].y = Math.floor( 92 - w.score[6]*27 * motion / 100 );
	
	context.beginPath();
	context.moveTo( score[1].x, score[1].y );
	for( i = 2; i <= 6; i++ ){
		context.lineTo( score[i].x, score[i].y );
	}
	context.lineTo( score[1].x, score[1].y );
	context.closePath();
	context.stroke();
	
	/*
	context.fillRect( 118, 92, 1, 1 );
	context.fillRect( 118, 38, 1, 1 );
	
	context.fillRect( 118, 92, 1, 1 );
	context.fillRect( 173, 65, 1, 1 );
	
	context.fillRect( 118, 93, 1, 1 );
	context.fillRect( 173, 120, 1, 1 );
	
	context.fillRect( 118, 93, 1, 1 );
	context.fillRect( 118, 147, 1, 1 );
	
	context.fillRect( 118, 93, 1, 1 );
	context.fillRect( 63, 120, 1, 1 );
	
	context.fillRect( 118, 92, 1, 1 );
	context.fillRect( 63, 65, 1, 1 );
	*/
};

function printStatusChart( wizard, mouse, context ){
	var w;
	if( mouse.selectWizard != 0 ) w = wizard[ mouse.selectWizard ];
	else return;
	
	if( mouse.time < 1.57 ) mouse.time += 0.08;
	
	var motion = Math.sin( mouse.time );
	
	/* 공격력 */
	var MAXDMG = 900;
	var dmgBar = Math.floor( 10 + (w.dmg * 120 / MAXDMG) ) * motion;
	if( w.plusDmg >= 1.0 ){
		var dmgBarPlus = Math.floor( 10 + (w.dmg * w.plusDmg * 120 / MAXDMG) ) * motion;
		context.fillStyle = "rgba(48,96,255,0.5)";
		context.fillRect( 25, 326 - dmgBarPlus, 28, dmgBarPlus );
		context.fillStyle = "rgb(48,96,255)";
		context.fillRect( 25, 326 - dmgBar, 28, dmgBar );
	}
	else{
		var dmgBarMinus = Math.floor( 10 + (w.dmg * w.plusDmg * 120 / MAXDMG) ) * motion;
		context.fillStyle = "rgba(255,0,0,0.5)";
		context.fillRect( 25, 326 - dmgBar, 28, dmgBar );
		context.fillStyle = "rgb(48,96,255)";
		context.fillRect( 25, 326 - dmgBarMinus, 28, dmgBarMinus );
	}
	
	context.fillStyle = "rgb(48,96,255)";
	/* 정신력 */
	var MAXMP = 600;
	var mpBar = Math.floor( w.maxmp * 130 / MAXMP ) * motion;
	var mpBarPlus = Math.floor( w.maxmp * w.plusMp * 130 / MAXMP ) * motion;
	context.fillStyle = "rgba(48,96,255,0.5)";
	context.fillRect( 78, 326 - mpBarPlus, 28, mpBarPlus );
	context.fillStyle = "rgb(48,96,255)";
	context.fillRect( 78, 326 - mpBar, 28, mpBar );
	
	/* 사정거리 */
	var MAXRANGE = 600;
	var rangeBar = Math.floor( 10 + (w.range * 120 / MAXRANGE) ) * motion;
	if( w.plusRange >= 1.0 ){
		var rangeBarPlus = Math.floor( 10 + (w.range * w.plusRange * 120 / MAXRANGE) ) * motion;
		context.fillStyle = "rgba(48,96,255,0.5)";
		context.fillRect( 131, 326 - rangeBarPlus, 28, rangeBarPlus );
		context.fillStyle = "rgb(48,96,255)";
		context.fillRect( 131, 326 - rangeBar, 28, rangeBar );
	}
	else{
		var rangeBarMinus = Math.floor( 10 + (w.range * w.plusRange * 120 / MAXRANGE) ) * motion;
		context.fillStyle = "rgba(255,0,0,0.5)";
		context.fillRect( 131, 326 - rangeBar, 28, rangeBar );
		context.fillStyle = "rgb(48,96,255)";
		context.fillRect( 131, 326 - rangeBarMinus, 28, rangeBarMinus );
	}
	
	/* 발현속도 */
	var MAXCASTING = 120;
	var castBar = Math.floor( 10 + ( ( 120 - w.castingTime ) * 120 / MAXCASTING ) ) * motion;
	var castBarPlus = Math.floor( 10 + ( ( 120 - w.castingTime * w.plusCast ) * 120 / MAXCASTING ) ) * motion;
	context.fillStyle = "rgba(48,96,255,0.5)";
	context.fillRect( 184, 326 - castBarPlus, 28, castBarPlus );
	context.fillStyle = "rgb(48,96,255)";
	context.fillRect( 184, 326 - castBar, 28, castBar );
};