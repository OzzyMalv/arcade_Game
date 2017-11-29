import Router from './utils/Router';
// import EventBus from './path/to/EventBus.js';

import { rules } from './routes/about';
import { game } from './routes/game';
import { score } from './routes/score';

console.log('ready');
// let eventBus = new EventBus();
let routes = [rules, game, score]; //game, score

new Router({ routes }).init()