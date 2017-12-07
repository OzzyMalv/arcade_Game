import Person from './Person';
import Enemies from './Enemies';
import DB from '../utils/DB';

class Game {
    constructor(name) {
        this.count = 0;
        this.fieldHeight = 500;
        this.fieldWidth = 500;
        this.canvas = document.querySelector('.canvasJS');
        this.ctx = this.canvas.getContext('2d');
        this.person = new Person();
        this.arrayEnemies = [];
        this.intervalID;
        this.intervalID2;
        this.name = name;
        this.start();
    }
    startTick() {
        let timer = document.querySelector(".timer");
        this.intervalID = setInterval(() => {
            this.count++;
            timer.innerHTML = this.count;
        }, 1000)

        this.intervalID2 = setInterval(() => {
            this.arrayEnemies.push(new Enemies(this.ctx))
        }, 5000)

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
            this.keys[e.keyCode] = e.type == 'keydown';
        });
        this.startTick();
    }
    stop(index) {
        clearInterval(this.intervalID);
        clearInterval(this.intervalID2);
        clearInterval(this.interval);
        this.writeScore();
        // window.location.hash = "score";

    }

    writeScore() {
        let db = new DB();
        let lastPlayer = { name: this.name, score: this.count };
        db.fetchItem("players")
            .then((arrayPlayers) => {
                arrayPlayers.push(lastPlayer)
                return arrayPlayers;
            })
            .then(arrayPlayers => db.setItem("players", arrayPlayers))
            .catch(() => db.setItem("players", [lastPlayer]))
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
        this.arrayEnemies.map((item, index) => {

            if ((Math.abs(item.x - this.person.x) <= 25) && (Math.abs(item.y - this.person.y) <= 25)) {
                this.stop();

            }
            item.newPos({ width: this.fieldWidth, height: this.fieldHeight }).update(this.ctx)
        });
    }
}

export default Game;