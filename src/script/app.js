import Router from './utils/Router';
// import EventBus from './path/to/EventBus.js';
import Game from "./components/Game";
import { rules } from './routes/rules';
import { game } from './routes/game';
import { score } from './routes/score';

let routes = [rules, game, score]; //game, score

new Router({ routes }).init()