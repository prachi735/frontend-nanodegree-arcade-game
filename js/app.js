// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = Math.random()*100;
    this.y = Math.random()*100;
    this.speed = 2;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computer
    // if (this.x == Player.x && this.y == Player.y)
    //     {
    //         //TODO: detect collision
    //     }
    // else {
    //     //TODO: update enemy location & speed
    //     this.x = (this.x + 10) * dt;
    //     this.y = (this.y + 10) * dt;
    // }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function(){
    this.sprite = 'images/char-boy.png';
    //TODO: update enemy location & speed
    this.x = 20;
    this.y = 20;
    this.speed = 2;
}

Player.prototype.update = function(dt){
    if (this.x == Enemy.x && this.y == Enemy.y)
            {
                //TODO: detect collision
            }
        else {
            //TODO: update player location & speed
            this.x = (this.x + 10) * dt;
            this.y = (this.y + 10) * dt;
        }
}

Player.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite),this.x,this.y);
}

Player.prototype.handleInput = function(e){
    if(e == 39){
        this.x += 10;
    }else if (e == 37) {
        this.x -= 10;
    }else if (e == 38) {
        this.y -= 10;
    }else if (e == 40) {
        this.y += 10;
    }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var player = new Player();
var enemy1 = new Enemy();
var enemy2 = new Enemy();
var allEnemies = [enemy1,enemy2];
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
