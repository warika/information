new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth:  100,
        gameIsRunning:  false,
        turns: []
    },
    methods: {
        startgame() {
          this.gameIsRunning = true;
          this.playerHealth = 100;
          this.monsterHealth = 100;
        },
        attack() {
          if(this.playerAttracks(3, 10)) {
            return;
          }
          this.monsterAttacks();
        },
        specialAttack() {
          if(this.playerAttracks(10, 20)) {
            return;
          }
          this.monsterAttacks();
        },
        heal()  {
          this.playerHealth=100;
        },
        giveUp() {
        },
        playerAttracks(min, max){
          this.monsterHealth -= this.calculateDamage(min, max);
          return this.checkWin();
        },
        monsterAttacks() {
          this.playerHealth -= this.calculateDamage(5,12);
          this.checkWin();
        },
        calculateDamage(min, max) {
            return Math.max(Math.floor(Math.random() * max)+1, min);
        },
        checkWin() {
          if (this.monsterHealth <= 0) {
            if (confirm('You won! New Game?')) {
              this.startgame();
            } else {
                this.gameIsRunning = false;
            }
            return true;
          } else if (this.playerHealth <=0) {
            if (confirm('You lost! New Game?')) {
                this.startgame();
            } else {
                  this.gameIsRunning = false;
            }
            return true;
          }
          return false;
        }
    }
});
