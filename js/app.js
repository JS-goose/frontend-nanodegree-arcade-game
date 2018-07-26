class Entity {
  constructor() {
    this.x = 0;
    this.y = 0;
    // The image/sprite for our entities, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/';

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
}

class Player extends Entity {
  constructor() {
    super();
  }

  handleInput(input) {
    switch(input) {
      
    }
  }
}

class Enemy extend Entity {
  constructor() {
    super();
  }
}




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
