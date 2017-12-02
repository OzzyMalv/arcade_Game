class Game {
    constructor(fieldWidth, fieldHeight) {
        this.fieldHeight = fieldHeight;
        this.fieldWidth = fieldWidth;
        fieldHeight = 1000;
        fieldWidth = 1000;
        let canvas = document.querySelector('canvas');
        let ctx = canvas.getContext("2d");
    }

    init() {
        this.gameField();
    }

    gameField(fieldHeight, fieldWidth) {
        debugger;
        this.canvas.width = FIELD_WIDTH;
        this.canvas.height = FIELD_HEIGHT;
    }


}

let game = new Game();
game.init();

export { Game }