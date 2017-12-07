import Game from "../components/Game";

const game = {
    name: "game",
    match: "game",
    onBeforeEnter: () => {},
    onEnter: () => {
        let divContent = document.querySelector(".divContent");
        divContent.innerHTML = `
        <div class="timer"></div>        
        <div class="gameField"><canvas class="canvasJS"></canvas></div>
      `;
        let name = prompt("Whats u name pidr? ", "Bill");
        new Game(name);
    },
    onLeave: () => {}
};

export { game };