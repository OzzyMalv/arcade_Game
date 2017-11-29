const rules = { //main rules
    name: "rules",
    match: "",
    onBeforeEnter: () => {},
    onEnter: () => {
        let divRules = document.querySelector(".divRules");
        divRules.innerHTML = `
        <h3>hello my dear friend</h3>
        <p>It's realy good app</p>
      `;
    },
    onLeave: () => {}
};

export { rules };