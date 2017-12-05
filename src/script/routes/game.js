import Game from "../components/Game";

const game = {
    name: "game",
    match: "game",
    onBeforeEnter: () => {},
    onEnter: () => {
        let divContent = document.querySelector(".divContent");
        divContent.innerHTML = `
        <div class="gameField"><canvas class="canvasJS"></canvas></div>
      `;
        new Game();
    },
    onLeave: () => {}
};

export { game };