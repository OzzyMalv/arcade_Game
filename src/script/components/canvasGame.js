class Game {
    constructor() {

        let fieldHeight = 1000;
        let fieldWidth = 1000;
        let canvas = document.querySelector('.canvas');
    }

    init() {
        this.gameField();
    }

    gameField(fieldHeight, fieldWidth) {
        debugger;
        this.canvas.width = fieldHeight;
        this.canvas.height = fieldWidth;
        console.log(fieldHeight, fieldWidth);
    }


}

let game = new Game();
game.init();

export { Game }