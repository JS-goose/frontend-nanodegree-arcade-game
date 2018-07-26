class Entity {
  constructor() {
    this.sprite = "images/";
    this.x = 0;
    this.y = 0;
    // The image/sprite for our entities, this uses
    // a helper we've provided to easily load images
    // this.sprite = "images/";
  }

  // Draw the enemy on the screen, required method for game
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

 

  // checkCollision() {
  //   if (this.y === )
  // }
}

class Player extends Entity {
  constructor() {
    super();
    this.sprite += "char-boy.png";
    this.rightLeft = 101;
    this.upDown = 83;
    this.x = 2 * this.rightLeft;
    this.y = 4 * this.upDown + 54;
  }

  handleInput(input) {
    switch (input) {
      case "left":
        if (this.x > 0) {
          this.x -= this.rightLeft;
        }
        break;
      case "right":
        if (this.x < 4 * this.rightLeft) {
          this.x += this.rightLeft;
        }
        break;
      case "up":
        if (this.y > 5) {
          this.y -= this.upDown;
        }
        break;
      case "down":
        if (this.y < 4 * this.upDown) {
          this.y += this.upDown;
        }
        break;
      default:
        break;
    }
  }

  update() {
    for(let enemy of allEnemies) {
      if (this.y === enemy.y) {
        console.log('same row');
      }
      
    }
  }
  // checkVictory() {

  // }
}

class Enemy extends Entity {
  constructor(x, y, speed) {
    super();
    this.x = x
    this.y = y + 54;
    this.speed = speed;
    this.sprite += "enemy-bug.png";
    this.rightLeft = 101;
    this.offX = this.rightLeft * 5;
    this.reset = -this.rightLeft
  }

  update(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if (this.x < this.offX) {
      this.x += this.speed * dt;
    } else {
      this.x = this.reset;
    }
    
  }

  // changePace() {

  // }
}

// player object
const player = new Player(); 
// enemy constructors(x, y, speed)
const enemy1 = new Enemy(-101, 0, 200); // row 1 enemy
const enemy2 = new Enemy((-101 * 4), 0, 210) // row 1 enemy
const enemy3 = new Enemy(-101, 88, 155); // row 2 enemy
const enemy4 = new Enemy((-101 * 4), 83, 158); // row 2 enemy
const enemy5 = new Enemy((-101 * 3), 166, 225); // row 3 enemy
const enemy6 = new Enemy((-101 * 6), 166, 218); // row 3 enemy
// enemies array
const allEnemies = [];

allEnemies.push(enemy1, enemy2, enemy3, enemy4, enemy5, enemy6);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener("keyup", function(e) {
  var allowedKeys = {
    37: "left",
    38: "up",
    39: "right",
    40: "down",
  };

  player.handleInput(allowedKeys[e.keyCode]);
});
