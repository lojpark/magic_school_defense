$(document).ready(function(){
	var canvas = $("#myCanvas");
	var context = canvas.get(0).getContext("2d");
	var canvasWidth = canvas.width();
	var canvasHeight = canvas.height();

	var key = new Object(), mouse = new Object;
	var lastTimestamp = 0, fps = 60, interval = 1000 / fps;
	var isSelectTime = false, isEntrance = false;
	
	var game = new Object();
	var wind = new Object();
	var scr = new Object();
	var player = new Object();
	var wizard = new Array();
	var enemy = new Array();
	var magic = new Array();
	var particle = new Array();
	var stone = new Object();
	var btn = new Array();
	var wand = new Array();
	var robe = new Array();
	var star = new Array();
	var time = new Object();
	var text = new Object();
	
	var img = new Object();
	img.backPlay = new Image();
	img.backPlay.src = "image/backPlay.png";
	img.backSettingL1 = new Image();
	img.backSettingL1.src = "image/backSettingL1.png";
	img.backSettingL2 = new Image();
	img.backSettingL2.src = "image/backSettingL2.png";
	img.backSettingL3 = new Image();
	img.backSettingL3.src = "image/backSettingL3.png";
	img.backEntrance = new Image();
	img.backEntrance.src = "image/backEntrance.png";
	
	img.btnGreen = new Image();
	img.btnGreen.src = "image/btnGreen.png";
	img.btnOrange = new Image();
	img.btnOrange.src = "image/btnOrange.png";
	img.btnPink = new Image();
	img.btnPink.src = "image/btnPink.png";
	img.btnTodo = new Image();
	img.btnTodo.src = "image/btnTodo.png";
	img.btnLR = new Image();
	img.btnLR.src = "image/btnLR.png";
	img.btnOK = new Image();
	img.btnOK.src = "image/btnOK.png";
	
	img.element = new Image();
	img.element.src = "image/element.png";
	img.book = new Image();
	img.book.src = "image/book.png";
	img.wand = new Image();
	img.wand.src = "image/wand.png";
	img.robe = new Image();
	img.robe.src = "image/robe.png";
	img.star = new Image();
	img.star.src = "image/star.png";
	img.time1 = new Image();
	img.time1.src = "image/time1.png";
	img.time2 = new Image();
	img.time2.src = "image/time2.png";
	img.time3 = new Image();
	img.time3.src = "image/time3.png";
	img.boxInfo = new Image();
	img.boxInfo.src = "image/boxInfo.png";
	
	img.windowSubject = new Image();
	img.windowSubject.src = "image/windowSubject.png";
	img.windowWand = new Image();
	img.windowWand.src = "image/windowWand.png";
	img.windowRobe = new Image();
	img.windowRobe.src = "image/windowRobe.png";
	img.windowInfo = new Image();
	img.windowInfo.src = "image/windowInfo.png";
	img.windowResult = new Image();
	img.windowResult.src = "image/windowResult.png";
	
	img.wizardRobe = new Image();
	img.wizardRobe.src = "image/wizardRobe.png";
	img.wizardHair = new Image();
	img.wizardHair.src = "image/wizardHair.png";
	img.wizardEye = new Image();
	img.wizardEye.src = "image/wizardEye.png";
	img.magic44 = new Image();
	img.magic44.src = "image/magic44.png";
	img.magic46 = new Image();
	img.magic46.src = "image/magic46.png";
	img.magic66 = new Image();
	img.magic66.src = "image/magic66.png";
	img.stone = new Image();
	img.stone.src = "image/stone.png";
	img.enemy = new Array();
	img.enemy[1] = new Object();
	img.enemy[1].head = new Image();
	img.enemy[1].head.src = "image/enemy1_1.png";
	img.enemy[1].body = new Image();
	img.enemy[1].body.src = "image/enemy1_2.png";
	img.enemy[1].arm1 = new Image();
	img.enemy[1].arm1.src = "image/enemy1_3.png";
	img.enemy[1].arm2 = new Image();
	img.enemy[1].arm2.src = "image/enemy1_4.png";
	img.enemy[1].leg = new Image();
	img.enemy[1].leg.src = "image/enemy1_5.png";
	img.enemy[2] = new Object();
	img.enemy[2].head = new Image();
	img.enemy[2].head.src = "image/enemy2_1.png";
	img.enemy[2].body = new Image();
	img.enemy[2].body.src = "image/enemy2_2.png";
	img.enemy[2].arm1 = new Image();
	img.enemy[2].arm1.src = "image/enemy2_3.png";
	img.enemy[2].arm2 = new Image();
	img.enemy[2].arm2.src = "image/enemy2_4.png";
	img.enemy[2].leg = new Image();
	img.enemy[2].leg.src = "image/enemy2_5.png";
	
	document.onkeydown = function(e){
		var press_key = e || window.event;
		switch (press_key.keyCode){
			case 38: key.up = true; break;
			case 40: key.down = true; break;
			case 65: key.left = true; break;
			case 68: key.right = true; break;
			case 67: key.cheat = true; break;
		}
	};
	document.onkeyup = function(e){
		var press_key = e || window.event;
		switch (press_key.keyCode) {
			case 38: key.up = false; break;
			case 40: key.down = false; break;
			case 65: key.left = false; break;
			case 68: key.right = false; break;
			case 67: key.cheat = false; break;
		}
	};
	document.onmousemove = function (e) {
		var pkey = e || window.event;
		mouse.x = pkey.pageX;
		mouse.y = pkey.pageY;
		if( game.status == 4 ){
			if( mouse.x < 240 || mouse.x > 627 || mouse.y < 14 || mouse.y > 173 ){
				mouse.down = false;
				mouse.dragIndex = 0;
			}
		}
		else{
			if( mouse.x < 0 || mouse.x > 640 || mouse.y < 0 || mouse.y > 360 ){
				mouse.down = false;
				mouse.dragIndex = 0;
			}
		}
	};
	document.onmousedown = function (e) {
		mouse.down = true;
		mouse.dragIndex = 0;
		
		if( game.status == 2 ){
			var i;
			var x = 111, y = 182;
			for( i = 1; i <= time.n; i++ ){
				x += 211;
				if( x - 58 - scr.x <= mouse.x && mouse.x <= x + 57 - scr.x ){
					if( y - 58 - scr.y <= mouse.y && mouse.y <= y + 57 - scr.y ){
						mouse.dragIndex = i;
						break;
					}
				}
			}
			if( mouse.dragIndex == 0 ){
				mouse.dragX = scr.x + mouse.x;
			}
		}
		else if( game.status == 3 ){
			isClickButton( btn, mouse, scr, game, wind );
		}
		else if( game.status == 4 ){
			if( wind.type == 0 ){
				if( !isClickButton( btn, mouse, scr, game, wind ) ){
					mouse.dragY = scr.y + mouse.y;
				}
			}
			if( wind.type == 1 || wind.type == 2 || wind.type == 3 || wind.type == 4 ){
				isClickButton( btn, mouse, scr, game, wind );
			}
		}
		else if( game.status == 5 ){
			isClickButton( btn, mouse, scr, game, wind );
		}
		else if( game.status == 6 ){
			var i;
			for( i = wizard[0].n; i >= 1; i-- ){
				var w = wizard[i];
				if( w.x - w.width/2 - scr.x <= mouse.x && mouse.x <= w.x + w.width/2 - scr.x ){
					if( w.y - w.height/2 - scr.y <= mouse.y && mouse.y <= w.y + w.height/2 - scr.y ){
						mouse.dragIndex = i;
						mouse.dragX = w.x - mouse.x;
						mouse.dragY = w.y - mouse.y;
						break;
					}
				}
			}
			if( mouse.dragIndex == 0 ){
				mouse.dragX = scr.x + mouse.x;
			}
			isClickButton( btn, mouse, scr, game, wind );
		}
		else if( game.status == 7 ){
			if( wind.type == 0 ){
				mouse.dragX = scr.x + mouse.x;
			}
			else{
				isClickButton( btn, mouse, scr, game, wind );
			}
		}
	};
	document.onclick = function (e) {
		if( game.status == 2 && scr.vx == 0 ){
			var i;
			var x = 111, y = 182;
			for( i = 1; i <= time.n; i++ ){
				x += 211;
				if( x - 58 - scr.x <= mouse.x && mouse.x <= x + 57 - scr.x ){
					if( y - 58 - scr.y <= mouse.y && mouse.y <= y + 57 - scr.y ){
						mouse.selectTime = i;
						break;
					}
				}
			}
		}
		if( game.status == 3 ){
			clickButton( btn, mouse, scr, wind, game, player, wizard, wand, robe, stone );
			setButton( btn, mouse, scr, wizard );
		}
		if( game.status == 4 ){
			if( wind.type == 0 ){
				if( mouse.x >= 240 && mouse.x <= 627 && mouse.y >= 14 && mouse.y <= 173 ){
					var i;
					var x = 226, y = 52;
					for( i = 1; i <= wizard[0].n; i++ ){
						var w = wizard[i];
						
						x += 55;
						if( x - w.width/2 - scr.x - 10 <= mouse.x && mouse.x <= x + w.width/2 - scr.x + 10 ){
							if( y - w.height/2 - scr.y - 10 <= mouse.y && mouse.y <= y + w.height/2 - scr.y + 10 ){
								mouse.selectWizard = i;
								mouse.time = 0;
								if( key.cheat ){
									w.type++;
									if( w.type > 66 ) w.type = 1;
									if( w.type % 10 >= 7 ) w.type += 4 + Math.floor( w.type / 10 );
									rebirthWizard( w );
									resetWizard( wizard );
								}
								break;
							}
						}
						
						if( i % 6 == 0 ){
							x = 226;
							y += 80;
						}
					}
				}
			}
			if( wind.type == 1 ){
				if( mouse.x >= 128 && mouse.x <= 512 && mouse.y >= 196 && mouse.y <= 265 ){
					var i;
					var x = 96, y = 228;
					for( i = 1; i <= 6; i++ ){
						x += 64;
						if( x - 32 <= mouse.x && mouse.x <= x + 32 ){
							if( y - 32 <= mouse.y && mouse.y <= y + 32 ){
								mouse.selectSubject = i;
								break;
							}
						}
					}
				}
			}
			if( wind.type == 2 || wind.type == 3 ){
				if( mouse.x >= 128 && mouse.x <= 384 && mouse.y >= 50 && mouse.y <= 244 ){
					var i;
					var x = 96, y = 77;
					for( i = 1; i <= 12; i++ ){
						x += 64;
						if( x - 32 <= mouse.x && mouse.x <= x + 32 ){
							if( y - 27 <= mouse.y && mouse.y <= y + 27 ){
								if( wind.type == 2 ) mouse.selectWand = i;
								if( wind.type == 3 ){
									if( i <= 8 ) mouse.selectFabric = i;
									else mouse.selectRobe = i;
								}
								break;
							}
						}
						if( i % 4 == 0 ){
							x = 96;
							y += 70;
						}
					}
				}
			}
			clickButton( btn, mouse, scr, wind, game, player, wizard, wand, robe, stone );
			setButton( btn, mouse, scr, wizard );
		}
		if( game.status == 5 ){
			clickButton( btn, mouse, scr, wind, game, player, wizard, wand, robe, stone );
			setButton( btn, mouse, scr, wizard );
		}
		if( game.status == 6 ){
			/* 겹치지 말기 */
			var i, k;
			var w = wizard[ mouse.dragIndex ], w2 = wizard[1];
			for( k = 4; k <= 1000; k++ ){
				for( i = 1; i <= wizard[0].n; i++ ){
					if( i == mouse.dragIndex ) continue;
					w2 = wizard[i];
					if( w2.x - w2.width <= w.x && w.x <= w2.x + w2.width ){
						if( w2.y - 24 <= w.y && w.y <= w2.y + 24 ){
							i = 0;
							break;
						}
					}
					if( w.x < 120 || w.x > 1100 || w.y < 25 || w.y > 95 ){
						i = 0;
						break;
					}
				}
				if( i != 0 ) break;
				
				if( k % 4 == 0 ){
					w.x = w.ox + 5 * Math.floor( k/4 );
					w.y = w.oy;
				}
				else if( k % 4 == 1 ){
					w.x = w.ox - 5 * Math.floor( k/4 );
					w.y = w.oy;
				}
				else if( k % 4 == 2 ){
					w.x = w.ox;
					w.y = w.oy + 5 * Math.floor( k/4 );
				}
				else{
					w.x = w.ox;
					w.y = w.oy - 5 * Math.floor( k/4 );
				}
			}
			w.ox = w.x;
			w.oy = w.y;
			
			clickButton( btn, mouse, scr, wind, game, player, wizard, wand, robe, stone );
			setButton( btn, mouse, scr, wizard );
		}
		if( game.status == 7 && wind.type == 1 ){
			clickButton( btn, mouse, scr, wind, game, player, wizard, wand, robe, stone );
			setButton( btn, mouse, scr, wizard );
		}
		mouse.down = false;
		mouse.dragIndex = 0;
	};
	
	function init(){
		key.up = key.down = key.left = key.right = key.cheat = false;
		mouse.x = 320; mouse.y = 240; mouse.down = false;
		mouse.dragIndex = mouse.dragX = mouse.dragY = 0;
		mouse.selectWizard = 0;
		mouse.selectSubject = 0;
		mouse.selectWand = 0;
		mouse.selectFabric = 0;
		mouse.selectRobe = 0;
		mouse.selectTime = 0;
		mouse.time = 0;
		mouse.target = 0;
		game.status = 2;
		
		initWindow( wind );
		initScreen( scr );
		initPlayer( player );
		initWizard( wizard );
		initEnemy( enemy );
		initMagic( magic );
		initParticle( particle );
		initStone( stone );
		initButton( btn );
		setButton( btn, mouse, scr, wizard );
		initWand( wand );
		initRobe( robe );
		initStar( star );
		initTime( time );
		initText( text );

		isSelectTime = true;
		window.requestAnimationFrame(animateSelectTime);
		//animateSetting();
		//animateLocate();
		//animatePlay();
	};
	
	function animateSelectTime() {
		if (!isSelectTime) return;

		window.requestAnimationFrame(animateSelectTime);
		if (timestamp - lastTimestamp < interval) return;
		lastTimestamp = timestamp;
		
		context.clearRect( 0, 0, canvasWidth, canvasHeight );
		
		moveStar( star );
		moveScreen2( scr, mouse, time );
		moveParticle( particle );
		
		printStar( star, img, context );
		printTime( time, scr, img, context );
		printParticle( particle, scr, img, context );
		
		if( mouse.selectTime != 0 ){
			if( particle[0].n == 0 ) newParticle( particle, 0, 0, 10, 1, 0, 0, 1.0, 1.0, 45, 0, 0, 0, 30 );
			
			if( particle[1].time == 1 ){
				newParticle( particle, 0, 0, 11, 1, 0, 0, 1.0, 1.0, 45, 0, 0, 0, 30 );
				
				scr.x = scr.y = scr.ox = scr.oy = scr.vx = scr.theta = 0;
				player.inMoney = player.outMoney = 0;
				if( wizard[0].n + 1 < stone.n ){
					game.status = 3;
					var i, n = wizard[0].n;
					for( i = 1; i < stone.n - n; i++ ){
						newWizard( wizard, 0, Math.floor(Math.random()*6)+1 );
					}
					isSelectTime = false;
					isEntrance = true;
					animateEntrance();
				}
				else{
					game.status = 4;
					isSelectTime = false;
					animateSetting();
				}
				return;
			}
		}
		
		/*context.font = "15px helvetica";
		context.fillStyle = "rgb(0,0,0)";
		context.fillText( mouse.x + " , " + mouse.y + " , " + scr.x, 10, 340 );*/
	};
	
	function animateEntrance(){
		if (!isEntrance) return;

		window.requestAnimationFrame(animateEntrance);
		if (timestamp - lastTimestamp < interval) return;
		lastTimestamp = timestamp;
		context.clearRect( 0, 0, canvasWidth, canvasHeight );
		
		moveParticle( particle );
		
		printBack3( scr, wizard, img, context );
		printButton3( btn, img, context );
		printParticle( particle, scr, img, context );
		
		context.font = "15px helvetica";
		context.fillStyle = "rgb(0,0,0)";
		context.fillText( mouse.x + " , " + mouse.y, 10, 340 );
		
		if( game.status == 4 ){
			if( particle[0].n == 0 ) newParticle( particle, 0, 0, 10, 1, 0, 0, 1.0, 1.0, 45, 0, 0, 0, 30 );
			
			if( particle[1].time == 1 ){
				newParticle( particle, 0, 0, 11, 1, 0, 0, 1.0, 1.0, 45, 0, 0, 0, 30 );
				scr.x = scr.y = scr.ox = scr.oy = scr.vx = scr.theta = 0;
				isEntrance = false;
				animateSetting();
				return;
			}
		}
	};
	
	function animateSetting(){
		context.clearRect( 0, 0, canvasWidth, canvasHeight );
		
		moveStar( star );
		moveScreen4( scr, mouse, wizard[0].n, wind );
		moveParticle( particle );
		
		printBack4( scr, wizard, mouse.selectWizard, star, img, context );
		printButton4( btn, img, context );
		printScoreChart( wizard, mouse, context );
		printStatusChart( wizard, mouse, context );
		printWindowSubject( wind, mouse.selectSubject, img, context );
		printWindowWand( wind, mouse, player, wand, wizard, img, context );
		printWindowRobe( wind, mouse, player, robe, wizard, img, context );
		printWindowInfo( wind, mouse, wizard, wand, robe, img, context );
		printWindowButton4( btn, wind, img, context );
		printParticle( particle, scr, img, context );
		
		if( game.status == 5 ){
			if( particle[0].n == 0 ) newParticle( particle, 0, 0, 10, 1, 0, 0, 1.0, 1.0, 45, 0, 0, 0, 30 );
			
			if( particle[1].time == 1 ){
				newParticle( particle, 0, 0, 11, 1, 0, 0, 1.0, 1.0, 45, 0, 0, 0, 30 );
				scr.x = scr.y = scr.ox = scr.oy = scr.vx = scr.theta = 0;
				scr.vy = -6.4;
				setEnemy( enemy, 1, false );
				educateWizard( wizard );
				animateTodo();
				return;
			}
		}
		
		setTimeout( animateSetting, 33 );
	};
	
	function animateTodo(){
		context.clearRect( 0, 0, canvasWidth, canvasHeight );
		
		moveScreen5( scr, player, particle, btn, game, wind, mouse, text );
		if( scr.x > 500 ) moveEnemy( enemy, stone );
		moveParticle( particle );
		moveStone( stone );
		moveText( text );
		
		printBack9( scr, img, context );
		printStone( stone, scr, img, context );
		printEnemy( enemy, scr, img, context );
		printWindowResult( wind, wizard, player, mouse, img, context );
		printButton5( btn, img, context );
		printWindowButton5( btn, wind, img, context );
		printParticle( particle, scr, img, context );
		printText( text, scr, context );

		if( game.status == 6 ){
			if( particle[0].n == 0 ) newParticle( particle, 0, 0, 10, 1, 0, 0, 1.0, 1.0, 45, 0, 0, 0, 30 );
			
			if( particle[1].time == 1 ){
				newParticle( particle, 0, 0, 11, 1, 0, 0, 1.0, 1.0, 45, 0, 0, 0, 30 );
				scr.x = scr.y = scr.ox = scr.oy = scr.vx = 0;
				scr.theta = 1;
				animateLocate();
				return;
			}
		}
		
		setTimeout( animateTodo, 33 );
	};
	
	function animateLocate(){
		context.clearRect( 0, 0, canvasWidth, canvasHeight );
		
		if( game.status != 7 ) moveScreen9( scr, mouse, wind );
		moveStone( stone );
		moveParticle( particle );
		
		locateWizard( wizard, mouse );
		
		printBack9( scr, img, context );
		printWizard( wizard, scr, img, context );
		printStone( stone, scr, img, context );
		printBack6( scr, wizard, mouse, img, context )
		printButton6( btn, img, context );
		printParticle( particle, scr, img, context );
		
		if( game.status == 7 ){
			if( particle[0].n == 0 ) newParticle( particle, 0, 0, 10, 1, 0, 0, 1.0, 1.0, 45, 0, 0, 0, 30 );
			
			if( particle[1].time == 1 ){
				newParticle( particle, 0, 0, 11, 1, 0, 0, 1.0, 1.0, 45, 0, 0, 0, 30 );
				scr.x = scr.y = scr.ox = scr.oy = scr.vx = scr.theta = 0;
				mouse.target = 1;
				setButton( btn, mouse, scr, wizard );
				if( time.n < 4 ) setEnemy( enemy, 1, true );
				else setEnemy( enemy, 2, true );
				player.inMoney = player.outMoney = 0;
				player.killEnemy = enemy[0].n;
				animatePlay();
				return;
			}
		}
		
		setTimeout( animateLocate, 33 );
	};
	
	function animatePlay(){
		context.clearRect( 0, 0, canvasWidth, canvasHeight );
		
		if( scr.theta < 99 ) moveScreen9( scr, mouse, wind );
		moveQuake( scr );
		locateWizard( wizard, mouse );
		moveWizard( wizard, magic, enemy, text );
		moveEnemy( enemy, stone );
		moveMagic( magic, wizard, enemy, particle, scr );
		moveStone( stone );
		moveText( text );
		moveParticle( particle );
		
		iME( magic, enemy, player, particle, scr, text );
		
		printBack9( scr, img, context );
		printWizard( wizard, scr, img, context );
		printStone( stone, scr, img, context );
		printParticle( particle, scr, img, context );
		printMagic( magic, scr, img, context );
		printEnemy( enemy, scr, img, context );
		printText( text, scr, context );
		printWindowPlayResult( wind, wizard, player, mouse, img, context );
		printWindowButton5( btn, wind, img, context );
		
		if( enemy[0].n <= 0 ){
			if( wind.type == 0 ){
				scr.theta++;
				if( scr.theta == 100 ){
					wind.type = 1;
					clearParticle( particle );
					player.money += player.inMoney;
					expWizard( wizard );
				}
				else if( scr.theta > 100 ){
					if( particle[0].n == 0 ) newParticle( particle, 0, 0, 10, 1, 0, 0, 1.0, 1.0, 45, 0, 0, 0, 30 );
			
					if( particle[1].time == 1 ){
						newParticle( particle, 0, 0, 11, 1, 0, 0, 1.0, 1.0, 45, 0, 0, 0, 30 );
						scr.x = scr.ox = scr.y = scr.oy = scr.vx = scr.theta = 0;
						game.status = 2;
						mouse.selectTime = 0;
						player.todo = 0;
						player.todoMotion = 0;
						time.n++;
						if( 211 * (time.n-3) > 0 ) scr.x = scr.ox = 211 * (time.n-3);
						resetWizard( wizard );
						animateSelectTime();
						return;
					}
				}
			}
		}
		
		setTimeout( animatePlay, 33 );
	};
	
	init();
});

/*
1. 메인
2. 시간 선택
3. 신입생 입학
4. 교육 선택 및 장비 선택 및 속성 발현
5. 할일 & 결산 & 적 경보
6. 마법사 배치
7. 시작
*/