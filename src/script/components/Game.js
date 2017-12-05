import Person from './Person';

class Game {
    constructor() {
        this.fieldHeight = 500;
        this.fieldWidth = 500;
        this.canvas = document.querySelector('.canvasJS');
        this.ctx = this.canvas.getContext('2d');
        this.person = new Person();
        this.start();
    }

    start() {
        this.canvas.width = this.fieldWidth;
        this.canvas.height = this.fieldHeight;
        this.frameNo = 0;
        this.interval = setInterval(this.updateState.bind(this), 20);
        window.addEventListener('keydown', e => {
            e.preventDefault();
            this.keys = this.keys || [];
            this.keys[e.keyCode] = e.type == 'keydown';
        });
        window.addEventListener('keyup', e => {
            if (e.keyCode == 38 || e.keyCode == 40) return;
            this.keys[e.keyCode] = e.type == 'keydown';
        });
    }
    stop() {
        clearInterval(this.interval);
    }
    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    updateState() {
        this.clear();
        this.person
            .newPos({
                right: this.keys && this.keys[39],
                left: this.keys && this.keys[37],
                up: this.keys && this.keys[38],
                down: this.keys && this.keys[40]
            }, { width: this.fieldWidth, height: this.fieldHeight })
            .update(this.ctx);
    }
}

export default Game;