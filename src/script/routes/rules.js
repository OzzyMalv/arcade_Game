const rules = { //main rules
    name: "rules",
    match: "",
    onBeforeEnter: () => {},
    onEnter: () => {
        let divContent = document.querySelector(".divContent");
        divContent.innerHTML = `
        <h1>Hi!</h1>
        <h2>Some rules and main task:</h2>
        <ul>
        <li>The main task is to avoid enemies.</li>
        <li>Stay alive as long as possible.</li>
        </ul>
        <h2>Good luck Santa!</h2>
      `;
    },
    onLeave: () => {}
};

export { rules };