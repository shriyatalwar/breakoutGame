var game, ball;
game = new Phaser.Game(480, 320, Phaser.AUTO, '');

function preload(){
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    game.stage.backgroundColor = '#eee';
    game.load.image('ball', 'img/ball.png');
}
function create(){
    ball = game.add.sprite(50, 50, 'ball');
}
function update(){}
