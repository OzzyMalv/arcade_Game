const game = {
    name: "game",
    match: "game",
    onBeforeEnter: () => {},
    onEnter: () => {
        let divContent = document.querySelector(".divContent");
        divContent.innerHTML = `
        <div class="gameField"><canvas></canvas></div>
      `;
    },
    onLeave: () => {}
};

export { game };