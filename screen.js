function initScreen( scr ){
	scr.ox = scr.x = 0;//640;
	scr.oy = scr.y = 0;
	scr.quake = 0;
	scr.vx = 0;
	scr.vy = 0;
	scr.angle = 0;
	scr.theta = 0;
};

function moveScreen2( scr, mouse, time ){
	if( scr.theta < 90 ){
		scr.theta += 2;
		if( 211 * (time.n-3) > 0 ){
			scr.ox = 211 * (time.n-3) + 422 * Math.sin( scr.theta * Math.PI/180 );
		}
		else scr.ox = 211 * (time.n-1) * Math.sin( scr.theta * Math.PI/180 );
	}
	
	else{
		if( mouse.down && mouse.dragIndex == 0 ){
			scr.vx = ( mouse.dragX - mouse.x ) - scr.ox;
			scr.ox = mouse.dragX - mouse.x;
			if( scr.ox < 0 ){
				mouse.dragX -= scr.ox;
				scr.ox = 0;
			}
			else if( scr.ox > 211 * (time.n-1) ){
				mouse.dragX += 211 * (time.n-1) - scr.ox;
				scr.ox = 211 * (time.n-1);
			}
		}
		else{
			scr.vx *= 0.8;
			if( Math.abs( scr.vx ) < 1 ) scr.vx = 0;
			scr.ox += scr.vx;
			scr.ox = Math.floor( scr.ox );
			if( scr.ox < 0 ) scr.ox = 0;
			else if( scr.ox > 211 * (time.n-1) ) scr.ox = 211 * (time.n-1);
		}
	}
	
	scr.x = scr.ox;
};

function moveScreen9( scr, mouse, wind ){
	if( wind.type != 0 ) return;
	
	if( scr.theta == 0 ){
		scr.ox += scr.vx;
		
		if( scr.ox < 320 ) scr.vx += 0.2;
		else if( scr.vx > 0 ) scr.vx -= 0.2;
		
		if( scr.ox >= 640 ){
			scr.ox = 640;
			scr.vx = 0;
			scr.theta = 1;
		}
	}
	
	else{
		if( mouse.down && mouse.dragIndex == 0 ){
			scr.vx = ( mouse.dragX - mouse.x ) - scr.ox;
			scr.ox = mouse.dragX - mouse.x;
			if( scr.ox < 0 ){
				mouse.dragX -= scr.ox;
				scr.ox = 0;
			}
			else if( scr.ox > 640 ){
				mouse.dragX += 640 - scr.ox;
				scr.ox = 640;
			}
		}
		else{
			scr.vx *= 0.8;
			if( Math.abs( scr.vx ) < 1 ) scr.vx = 0;
			scr.ox += scr.vx;
			scr.ox = Math.floor( scr.ox );
			if( scr.ox < 0 ) scr.ox = 0;
			else if( scr.ox > 640 ) scr.ox = 640;
		}
	}
	
	scr.x = scr.ox;
};

function newQuake( scr, value ){
	scr.quake = value;
};

function moveQuake( scr ){
	if( scr.quake == 0 ) return;
	
	scr.x = Math.floor( scr.ox + Math.random()*scr.quake - scr.quake/2 );
	scr.y = Math.floor( scr.oy + Math.random()*scr.quake - scr.quake/2 );
	
	scr.quake *= 0.95;
	if( scr.quake < 1 ){
		scr.quake = 0;
		scr.x = scr.ox;
		scr.y = scr.oy;
	}
};

function printBack9( scr, img, context ){
	context.drawImage( img.backPlay, 0, 0, 240, 360, 0-scr.x, 0-scr.y, 240, 360 );
	context.drawImage( img.backPlay, 0, 0, 240, 360, 240-scr.x, 0-scr.y, 240, 360 );
	context.drawImage( img.backPlay, 0, 0, 240, 360, 480-scr.x, 0-scr.y, 240, 360 );
	context.drawImage( img.backPlay, 0, 0, 240, 360, 720-scr.x, 0-scr.y, 240, 360 );
	context.drawImage( img.backPlay, 0, 0, 240, 360, 960-scr.x, 0-scr.y, 240, 360 );
	context.drawImage( img.backPlay, 0, 0, 240, 360, 1200-scr.x, 0-scr.y, 240, 360 );
};


function printBack3( scr, wizard, img, context ){
	scr.angle += 0.2;
	
	context.save();
	rotateContext( 320, 180, scr.angle, context );
	
	context.drawImage( img.backEntrance, 0, 0, 735, 735, -47, -187, 735, 735 );
	
	context.restore();
	
	context.fillStyle = "rgb(0,0,0)";
	context.font = "bold 12px helvetica";
	var w = wizard[ wizard[0].n - 1 ];
	context.drawImage( img.wizardHair, w.motion*w.width, (w.hair-1)*w.height,   w.width, w.height, 260 - w.width/2, 150 - w.height/2, w.width, w.height );
	context.drawImage( img.wizardEye,  w.motion*w.width, (w.eye-1)*w.height,    w.width, w.height, 260 - w.width/2, 150 - w.height/2, w.width, w.height );
	context.drawImage( img.wizardRobe, w.motion*w.width, (w.fabric-1)*w.height, w.width, w.height, 260 - w.width/2, 150 - w.height/2, w.width, w.height );
	context.fillText( w.name, 246, 190 );
	w = wizard[ wizard[0].n ];
	context.drawImage( img.wizardHair, w.motion*w.width, (w.hair-1)*w.height,   w.width, w.height, 380 - w.width/2, 150 - w.height/2, w.width, w.height );
	context.drawImage( img.wizardEye,  w.motion*w.width, (w.eye-1)*w.height,    w.width, w.height, 380 - w.width/2, 150 - w.height/2, w.width, w.height );
	context.drawImage( img.wizardRobe, w.motion*w.width, (w.fabric-1)*w.height, w.width, w.height, 380 - w.width/2, 150 - w.height/2, w.width, w.height );
	context.fillText( w.name, 366, 190 );
};
//47 187 687 547

function moveScreen4( scr, mouse, n, wind ){
	if( wind.type != 0 ) return;
	
	var maxY = Math.floor( ( n - 1 ) / 6 - 1 ) * 80;
	if( maxY <= 0 ) maxY = 0;
	
	if( mouse.down && mouse.dragIndex == 0 ){
		scr.vy = ( mouse.dragY - mouse.y ) - scr.oy;
		scr.oy = mouse.dragY - mouse.y;
		if( scr.oy < 0 ){
			mouse.dragY -= scr.oy;
			scr.oy = 0;
		}
		else if( scr.oy > maxY ){
			mouse.dragY += maxY - scr.oy;
			scr.oy = maxY;
		}
	}
	else{
		scr.vy *= 0.8;
		if( Math.abs( scr.vy ) < 1 ) scr.vy = 0;
		scr.oy += scr.vy;
		scr.oy = Math.floor( scr.oy );
		if( scr.oy < 0 ) scr.oy = 0;
		else if( scr.oy > maxY ) scr.oy = maxY;
	}
	
	scr.y = scr.oy;
};

function printBack4( scr, wizard, select, star, img, context ){
	context.drawImage( img.backSettingL1, 0, 0, 640, 360, 0, 0, 640, 360 );
	printStar( star, img, context );
	printWizardS( wizard, scr, select, img, context );
	context.drawImage( img.backSettingL2, 0, 0, 640, 360, 0, 0, 640, 360 );
	context.drawImage( img.backSettingL3, 0, 0, 640, 360, 0, 0, 640, 360 );
	//printStar( star, img, context );
	
	/* 선택한 마법사가 없음 */
	if( select == 0 ) return;
	
	/* 정보 */
	context.fillStyle = "rgb(0,0,0)";
	context.font = "bold 12px helvetica";
	context.fillText( wizard[select].name, 246, 207 );
	context.fillText( "속성", 246, 227 );
	if( wizard[select].type < 9 ){
		context.drawImage( img.element, ( wizard[select].type - 1 ) * 24, 0, 24, 24, 244, 230, 24, 24 );	
	}
	else{
		context.drawImage( img.element, ( Math.floor(wizard[select].type / 10) - 1 ) * 24, 0, 24, 24, 244, 230, 24, 24 );
		context.drawImage( img.element, ( wizard[select].type % 10 - 1 ) * 24, 0, 24, 24, 270, 230, 24, 24 );	
	}
	
	context.fillText( "마법", 246, 267 );
	context.font = "12px helvetica";
	var magicName = setMagicName( wizard[select].type );
	context.fillText( magicName, 246, 287 );
	
	/* 수업 */
	context.drawImage( img.book, ( wizard[select].subject - 1 ) * 64, 0, 64, 65, 352, 189, 64, 65 );
	/* 완드 */
	context.drawImage( img.wand, ( wizard[select].wand - 1 ) * 64, 0, 64, 54, 452, 195, 64, 54 );
	
	/* 원단 */
	switch( wizard[select].fabric ){
		case 1:
			context.fillStyle = "rgba(255,0,0,1.0)";
			break;
		case 2:
			context.fillStyle = "rgba(0,0,255,1.0)";
			break;
		case 3:
			context.fillStyle = "rgba(255,255,0,1.0)";
			break;
		case 4:
			context.fillStyle = "rgba(255,128,0,1.0)";
			break;
		case 5:
			context.fillStyle = "rgba(0,255,0,1.0)";
			break;
		case 6:
			context.fillStyle = "rgba(255,0,255,1.0)";
			break;
		case 7:
			context.fillStyle = "rgba(255,255,255,1.0)";
			break;
		case 8:
			context.fillStyle = "rgba(0,0,0,1.0)";
			break;
	}
	context.fillRect( 557, 194, 52, 54 );
	
	/* 로브 */
	if( wizard[select].fabric == 3 || wizard[select].fabric == 7 ){
		context.drawImage( img.robe, ( wizard[select].robe + 3 ) * 64, 0, 64, 54, 552, 195, 64, 54 );
	}
	else{
		context.drawImage( img.robe, ( wizard[select].robe - 1 ) * 64, 0, 64, 54, 552, 195, 64, 54 );
	}
};


function moveScreen5( scr, player, particle, btn, game, wind, mouse, text ){
	if( scr.vx < 0 ) scr.vx += 0.1;
	if( scr.vx > 0 ) scr.vx -= 0.1;
	if( -0.1 < scr.vx && scr.vx < 0.1 ) scr.vx = 0;
	
	if( scr.vy < 0 ) scr.vy += 0.1;
	if( scr.vy > 0 ) scr.vy -= 0.1;
	if( -0.1 < scr.vy && scr.vy < 0.1 ) scr.vy = 0;
	
	scr.ox = scr.ox + scr.vx;
	scr.oy = scr.oy + scr.vy;
	
	scr.x = Math.floor( scr.ox );
	scr.y = Math.floor( scr.oy );
	
	
	if( scr.y == -202 && player.todo == 0 ){
		btn[13].isAble = btn[14].isAble = btn[15].isAble = true;
	}
	
	if( player.todo != 0 && wind.type == 0 ){
		player.todoMotion++;
		
		if( scr.x == 0 ){
			if( player.todoMotion < 200 ){
				var x = 0, y = 0, c = 0;
				
				if( player.todo == 1 ){
					x = 70;
					y = 170;
					c = 14;
				}
				else if( player.todo == 2 ){
					x = 70;
					y = -100;
					c = 14;
				}
				else{
					x = 70;
					y = -100;
					c = 11;
				}
				
				newParticle( particle, x, y, 2, c, 
							 30, 30, 
							 1.0, 0.0, 
							 0, Math.random()*30-15, 
							 Math.random()*6.28, 5, 30 );
			}
			if( player.todoMotion == 80 ){
				newParticle( particle, 0, 0, 10, 1, 
							 0, 0, 
							 1.0, 1.0, 
							 45, 0, 
							 0, 0, 30 );
			}
			if( player.todoMotion == 88 ){
				newText( text, 280, 100, 3, "3일 후" );
			}
			if( player.todoMotion == 109 ){
				newParticle( particle, 0, 0, 7, 1, 
							 0, 0, 
							 1.0, 1.0, 
							 0, 0, 
							 0, 0, 51 );
			}
			if( player.todoMotion == 159 ){
				newParticle( particle, 0, 0, 11, 1, 
							 0, 0, 
							 1.0, 1.0, 
							 45, 0, 
							 0, 0, 30 );
			}
			if( player.todoMotion == 270 ){
				wind.type = 1;
				mouse.target = 1;
				player.todoMotion = 0;
			}
		}
		else{
			if( player.todoMotion >= 240 ){
				game.status = 6;
			}
		}
	}
};

function printBack6( scr, wizard, mouse, img, context ){
	/* 선택한 마법사가 없음 */
	if( mouse.dragIndex == 0 ) return;
	
	var w = wizard[ mouse.dragIndex ];
	var x = w.x - 30 - scr.x, y = w.y + 44 - scr.y;
	
	/* 정보 */
	context.drawImage( img.boxInfo, 0, 0, 94, 114, x - 8, y - 20, 94, 114 );
	
	context.fillStyle = "rgb(0,0,0)";
	context.font = "bold 12px helvetica";
	context.fillText( w.name, x, y );
	context.fillText( "속성", x, y + 20 );
	if( w.type < 9 ){
		context.drawImage( img.element, ( w.type - 1 ) * 24, 0, 24, 24, x - 2, y + 23, 24, 24 );	
	}
	else{
		context.drawImage( img.element, ( Math.floor(w.type / 10) - 1 ) * 24, 0, 24, 24, x - 2, y + 23, 24, 24 );
		context.drawImage( img.element, ( w.type % 10 - 1 ) * 24, 0, 24, 24, x + 24, y + 23, 24, 24 );	
	}
	
	context.fillText( "마법", x, y + 60 );
	context.font = "12px helvetica";
	var magicName = setMagicName( w.type );
	context.fillText( magicName, x, y + 80 );
};