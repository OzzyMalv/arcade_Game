const score = { //main rules
    name: "score",
    match: "score",
    onBeforeEnter: () => {},
    onEnter: () => {
        debugger;
        let divRules = document.querySelector(".divRules");
        divRules.innerHTML = `
        <h3>score</h3>
        <p>It's realy good app</p>
      `;
    },
    onLeave: () => {}
};

export { score };