const game = { //main rules
    name: "game",
    match: "game",
    onBeforeEnter: () => {},
    onEnter: () => {
        debugger;
        let divRules = document.querySelector(".divRules");
        divRules.innerHTML = `
        <h3>game</h3>
        <p>It's realy good app</p>
      `;
    },
    onLeave: () => {}
};

export { game };