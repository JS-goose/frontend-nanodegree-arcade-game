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

  update(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
  }
}

class Player extends Entity {
  constructor() {
    super();
    this.sprite += "char-boy.png";
    this.rightLeft = 101;
    this.upDown = 83;
    this.x = 2 * this.rightLeft;
    this.y = 5 * this.upDown - 20;
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
}

class Enemy extends Entity {
  constructor() {
    super();
  }
}

const player = new Player();

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
