const about = {
    name: "about",
    match: "about",
    onBeforeEnter: () => {},
    onEnter: () => {
        let divApp = document.querySelector("#app");
        divApp.innerHTML = `
        <h3>hello my dear friend</h3>
        <p>It's realy good app</p>
      `;
    },
    onLeave: () => {}
};

export { about };