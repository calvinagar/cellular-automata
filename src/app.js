import * as PIXI from 'pixi.js';

const app = new PIXI.Application({ resizeTo: window, background: '#1099bb' });
document.body.appendChild(app.view);

const gameControls = new PIXI.Container();
const cellMatrix = new PIXI.Container();
app.stage.addChild(gameControls);
app.stage.addChild(cellMatrix);


// Create a Graphics object, set a fill color, draw a rectangle
let rectangle = new PIXI.Graphics();
rectangle.beginFill(0xff0000);
rectangle.drawRect(0, 0, 200, 100);

gameControls.width = app.screen.width / 4;
gameControls.height = app.screen.height;
// gameControls.addChild(rectangle);
gameControls.onmouseenter = (event) => {
}
gameControls.onmouseleave = (event) => {
    gameControls.removeChild(rectangle);
}

cellMatrix.width = (app.screen.width * 3) / 4; 
cellMatrix.height = app.screen.height;
cellMatrix.x = gameControls.width; // TODO CHECK
cellMatrix.onmouseenter = (event) => {
}
cellMatrix.onmouseleave = (event) => {
}

const SIZE = 100;
const CELL_SIZE = 8;

let cells = [[]];
for (let i = 0; i < SIZE; i++) {
    cells.push([]);
    for (let j = 0; j < SIZE; j++) {
        let cell = new PIXI.Graphics();
        cell.beginFill(((i + j) % 2 === 0) ? 0x000000 : 0xffffff);
        cell.drawRect((j*CELL_SIZE), (i*CELL_SIZE), CELL_SIZE, CELL_SIZE);

        cells.at(i).push(cell);

        cellMatrix.addChild(cell);
    }
}

// let elapsed = 0.0;
// app.ticker.add((delta) => {
//     // elapsed += delta / 60;

// });