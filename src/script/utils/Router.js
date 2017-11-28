class Router {
    constructor(options, eventBus) {
        this.routes = options.routes;
        this.eventBus = eventBus;
    }

    init() {
        window.addEventListener("hashchange", (ev) => {
            console.log(ev);
        })
    }
}

export default Router