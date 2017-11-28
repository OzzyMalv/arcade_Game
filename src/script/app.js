import Router from './utils/Router';
// import EventBus from './path/to/EventBus.js';

import about from './routes/about';
import main from './routes/main';
import score from './routes/score';

console.log('ready');
// let eventBus = new EventBus();
let routes = [about, main, score];

new Router({ routes }).init()