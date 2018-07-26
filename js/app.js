class Entity {
  constructor() {
    this.x = 0;
    this.y = 0;
    // The image/sprite for our entities, this uses
    // a helper we've provided to easily load images
    this.sprite = "images/";
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
    this.x = 2;
    this.y = 5;
  }

  handleInput(input) {
    switch (input) {
      case "left":
        this.x -= 20;
        break;
      case "right":
        this.x += 20;
        break;
      case "up":
        this.y -= 20;
        break;
      case "down":
        this.y += 20;
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
