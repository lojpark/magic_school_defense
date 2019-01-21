function initGoblin( e ){
	e.width = 32;
	e.height = 48;
	e.motion = 0;
	e.motionDelay = 0;
	e.hp = e.maxhp = 600;
	e.spd = 1;
	e.vx = e.spd;
	e.hitre = 0.1;
	e.dmg = 5;
	e.cost = 500;
	
	e.atkBy = 0;
	e.deSpd = 1.0;
				
	e.head = 0;
	e.arm1 = e.arm2 = 0;
	e.leg1 = e.leg2 = 0;
	e.headA = e.headO = 0;
	e.arm1A = e.arm1O = 0;
	e.arm2A = e.arm2O = -30;
	e.leg1A = e.leg1O = 30;
	e.leg2A = e.leg2O = 20;
};

function setGoblin( e, type ){
	/* 기본 */
	if( type == 0 ){
		e.head = 0;
		e.arm1 = e.arm2 = 0;
		e.leg1 = e.leg2 = 0;
		e.headA = 0;
		e.arm1A = 0;
		e.arm2A = -30;
		e.leg1A = 30;
		e.leg2A = 20;
	}
	/* 타격 */
	if( type == -1 ){
		e.headA = -15;
		e.arm1A = -20;
		e.arm2A = 20;
		e.leg1A = 70;
		e.leg2A = 50;
	}
	/* 기억 */
	if( type == 1 ){
		e.headA = e.headO;
		e.arm1A = e.arm1O;
		e.arm2A = e.arm2O;
		e.leg1A = e.leg1O;
		e.leg2A = e.leg2O;
	}
};

function moveGoblin( e ){
	var isHit = false;
	/* 기본 */
	if( e.motion == 0 ){		
		if( e.x > 140 ){
			if( e.vx < 0 ) e.x -= e.vx;
			else e.x -= e.vx * e.deSpd;
		
			if( e.vx < e.spd ){
				setGoblin( e, -1 );
				
				e.vx += e.hitre;
				if( e.vx >= e.spd ){
					setGoblin( e, 1 );
					
					e.vx = e.spd;
					e.atkBy = 0;
				}
				return false;
			}
		}
		else if( e.x <= 140 ){
			e.motion = 1;
			e.motionDelay = 0;
			e.atkBy = 0;
			setGoblin( e, 0 );
			return false;
		}
		
		e.atkBy = 0;
		if( e.head == 0 ){
			e.headA += 1;
			if( e.headA > 5 ) e.head = 1;
		}
		else{
			e.headA -= 1;
			if( e.headA < -5 ) e.head = 0;
		}
		
		if( e.arm1 == 0 ){
			e.arm1A += 5;
			if( e.arm1A > 20 ) e.arm1 = 1;
		}
		else{
			e.arm1A -= 5;
			if( e.arm1A < -50 ) e.arm1 = 0;
		}
		
		if( e.arm2 == 0 ){
			e.arm2A -= 5;
			if( e.arm2A < -50 ) e.arm2 = 1;
		}
		else{
			e.arm2A += 5;
			if( e.arm2A > 20 ) e.arm2 = 0;
		}
		
		if( e.leg1 == 0 ){
			e.leg1A += 5;
			if( e.leg1A > 60 ) e.leg1 = 1;
		}
		else{
			e.leg1A -= 5;
			if( e.leg1A < -10 ) e.leg1 = 0;
		}
		
		if( e.leg2 == 0 ){
			e.leg2A -= 5;
			if( e.leg2A < -10 ) e.leg2 = 1;
		}
		else{
			e.leg2A += 5;
			if( e.leg2A > 60 ) e.leg2 = 0;
		}
		
		e.headO = e.headA;
		e.arm1O = e.arm1A;
		e.arm2O = e.arm2A;
		e.leg1O = e.leg1A;
		e.leg2O = e.leg2A;
	}
	/* 공격 */
	else if( e.motion == 1 ){
		if( e.vx <= 0 ){
			e.x = 141;
			setGoblin( e, -1 );
			e.motion = 0;
			return false;
		}
		e.motionDelay++;
		if( e.motionDelay <= 40 ){
			e.arm1A += 3;
			e.arm2A -= 1;
			e.headA += 0.3;
		}
		else if( e.motionDelay <= 50 ){
			e.arm1A -= 12;
			e.arm2A += 4;
			e.headA -= 1.2;
			if( e.motionDelay == 46 ) isHit = true;
		}
		else if( e.motionDelay > 60 ){
			e.motionDelay = 0;
		}
	}
	
	return isHit;
};

function printGoblin( e, scr, img, context ){
	context.save();
	rotateContext( e.x - scr.x, e.y-5 - scr.y, e.headA, context );
	context.drawImage( img.head, 0, 0, 34, 23, e.x - 21 - scr.x, e.y - 31 - scr.y, 34, 23 );
	context.restore();
	context.save();
	rotateContext( e.x - scr.x, e.y-5 - scr.y, e.arm2A, context );
	context.drawImage( img.arm2, 0, 0, 16, 13, e.x - 14 - scr.x,  e.y - 6 - scr.y, 16, 13 );
	context.restore();
	context.save();
	rotateContext( e.x - scr.x, e.y+5 - scr.y, e.leg1A, context );
	context.drawImage( img.leg,  0, 0, 13, 18, e.x - 0 - scr.x,  e.y + 8 - scr.y, 13, 18 );
	context.restore();
	context.save();
	rotateContext( e.x - scr.x, e.y+5 - scr.y, e.leg2A, context );
	context.drawImage( img.leg,  0, 0, 13, 18, e.x - 0 - scr.x,  e.y + 8 - scr.y, 13, 18 );
	context.restore();
	context.save();
	context.drawImage( img.body, 0, 0, 12, 17, e.x - 6 - scr.x,  e.y - 8 - scr.y, 12, 17 );
	rotateContext( e.x - scr.x, e.y-5 - scr.y, e.arm1A, context );
	context.drawImage( img.arm1, 0, 0, 26, 22, e.x - 25 - scr.x,  e.y - 14 - scr.y, 26, 22 );
	context.restore();
};