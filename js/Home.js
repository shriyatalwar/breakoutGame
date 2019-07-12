var ball;
var Home = {
    
    preload: function() {
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    game.stage.backgroundColor = '#eee';
    game.load.image('ball', 'img/ball.png');
},
create: function(){
    ball = game.add.sprite(50, 50, 'ball');
},
update: function(){}
};