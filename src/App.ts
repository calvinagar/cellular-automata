import * as PIXI from 'pixi.js';
import CellMatrix from './CellMatrix';

const app = new PIXI.Application<HTMLCanvasElement>({ resizeTo: window, background: '#1099bb' });
document.body.appendChild(app.view);

const cellMatrix = new CellMatrix(app, 100);

const gameControls = new PIXI.Container();
app.stage.addChild(gameControls);

// Create a Graphics object, set a fill color, draw a rectangle
let rectangle = new PIXI.Graphics();
rectangle.beginFill(0xff0000);
rectangle.drawRect(0, 0, 200, 100);

gameControls.width = app.screen.width / 4;
gameControls.height = app.screen.height;
// gameControls.addChild(rectangle);
// gameControls.onmouseenter = (event) => {
// }
// gameControls.onmouseleave = (event) => {
//     gameControls.removeChild(rectangle);
// }


// let elapsed = 0.0;
// app.ticker.add((delta) => {
//     // elapsed += delta / 60;

// });
