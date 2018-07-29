class Entity {
  constructor() {
    // The image/sprite for our entities, this uses
    // a helper we've provided to easily load images
    this.sprite = "images/";
    this.x = 0;
    this.y = 0;
  }

  // Draw the enemy on the screen, required method for game
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

  // resets the player to this location upon collision with enemy
  resetPos() {
    this.x = 2 * this.rightLeft;
    this.y = 4 * this.upDown + 54;
  }
}

// player class
class Player extends Entity {
  constructor() {
    super();
    this.sprite += "char-princess-girl.png";
    // sets right and left movement to the width of one block
    this.rightLeft = 101;
    // sets up and down movement to the width of one block
    this.upDown = 83;
    // sets initial player position
    this.x = 2 * this.rightLeft;
    this.y = 4 * this.upDown + 54;
    this.victory = false;
  }

  // player movement logic, boundaries built in
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
          this.win();
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

  win() {
    if (this.y === -29) {
      this.victory = true;
      innerModal.classList.remove("hidden");
      winModal.classList.remove("hidden");
      stopMovement();
    }
  }

  update() {
    // collision detection
    for (let enemy of allEnemies) {
      if (
        this.y === enemy.y &&
        this.x < enemy.x + 83 &&
        this.x + 83 > enemy.x &&
        this.y < enemy.y + 101 &&
        101 + this.y > enemy.y
      ) {
        // if the enemy and player position match, send player back to starting location
        this.resetPos();
      }
    }
  }
}

// enemy class
class Enemy extends Entity {
  constructor(x, y, speed) {
    super();
    this.x = x;
    this.y = y + 54;
    this.speed = speed;
    this.sprite += "enemy-bug.png";
    this.rightLeft = 101;
    this.offX = this.rightLeft * 5;
    this.reset = -this.rightLeft;
  }

  update(dt) {
    // looping action for enemies
    if (this.x < this.offX) {
      this.x += this.speed * dt;
    } else {
      this.x = this.reset;
    }
  }

  stopMovement(enemy, speed) {
    for (enemey of allEnemies) {
      enemy.speed = 0;
    }
  }
}

// modal variables
const winModal = document.querySelector(".winModal");
const playAgain = document.querySelector(".playAgain");
const innerModal = document.querySelector(".innerModal");
playAgain.addEventListener("click", function() {
  winModal.classList.add("hidden");
  innerModal.classList.add("hidden");
  player.resetPos();
});

// player constructor
const player = new Player();
// enemy constructors(x, y, speed)
const enemy1 = new Enemy(-101, 0, 208); // row 1 enemy
const enemy2 = new Enemy(-101 * 4, 0, 210); // row 1 enemy
const enemy3 = new Enemy(-101 * 4, 83, 180); // row 2 enemy
const enemy4 = new Enemy(-101 * 3, 166, 245); // row 3 enemy
const enemy5 = new Enemy(-101 * 6, 166, 245); // row 3 enemy
// enemies array
const allEnemies = [];
// push enemies to allEnemies array
allEnemies.push(enemy1, enemy2, enemy3, enemy4, enemy5);

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
