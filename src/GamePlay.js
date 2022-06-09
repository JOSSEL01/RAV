
GamePlayManager = {
    init: function() {
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
    },
    preload: function() {
		var me=this;
        me.load.image('background',"assets/images/2000.webp");
		me.load.spritesheet("crow","assets/images/crow.png",80,45);
		me.load.spritesheet("crow1","assets/images/crow.png",80,45);
		me.load.spritesheet("man","assets/images/20212.png",72.7,143);
		
    },
    create: function() {
		var me=this;
        me.game.add.sprite(0, 0, 'background');
		
		me.crow= me.game.add.sprite(50,50,"crow");
		me.crow.animations.add("right",[0,1,2,3],8,true);
		me.crow.animations.add("left",[4,5,6,7],8,true);
		me.crow.animations.play("right");
		
		me.crow1= me.game.add.sprite(20,10,"crow1");
		me.crow1.animations.add("right",[0,1,2,3],10,true);
		me.crow1.animations.add("left",[4,5,6,7],8,true);
		me.crow1.animations.play("right");

		me.crow3= me.game.add.sprite(-50,-20,"crow1");
		me.crow3.animations.add("right",[0,1,2,3],10,true);
		me.crow3.animations.add("left",[4,5,6,7],8,true);
		me.crow3.animations.play("right");

		me.crow2= me.game.add.sprite(5,-5,"crow1");
		me.crow2.animations.add("right",[0,1,2,3],10,true);
		me.crow2.animations.add("left",[4,5,6,7],8,true);
		me.crow2.animations.play("right");

		me.man=me.game.add.sprite(100,350,"man");
		me.man.animations.add("right",[0,1,2,3],9,true);
		//me.man.animations.add("left",[15,14,13,12,11,10,9,8],10,true);
		me.game.cursores=me.input.keyboard.createCursorKeys();
		me.game.physics.startSystem(Phaser.Physics.ARCADE);
		me.man.animations.play("right");
    },
    update: function() {
		var me=this;
		me.crow.x+=2;
		me.man.x+=1;
		if(me.crow.x>=me.game.world.width){
			me.crow.x=-100;
			}
		if(me.man.x>=me.game.world.width){
			me.man.x=-100;
			}
		
		var me=this;
		me.crow1.x+=2;
		me.man.x+=1;
		if(me.crow1.x>=me.game.world.width){
			me.crow1.x=-100;
			}
		if(me.man.x>=me.game.world.width){
			me.man.x=-100;
			}

		var me=this;
		me.crow2.x+=2;
		me.man.x+=1;
		if(me.crow2.x>=me.game.world.width){
			me.crow2.x=-100;
			}
		if(me.man.x>=me.game.world.width){
			me.man.x=-100;
			}

		var me=this;
		me.crow3.x+=2;
		me.man.x+=1;
		if(me.crow3.x>=me.game.world.width){
			me.crow3.x=-100;
			}
		if(me.man.x>=me.game.world.width){
			me.man.x=-100;
			}
    }

    
}

var game = new Phaser.Game(1136, 640, Phaser.CANVAS);
    
game.state.add("gameplay", GamePlayManager);
game.state.start("gameplay");