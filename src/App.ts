import * as PIXI from 'pixi.js';
import CellStates from './Cells/CellStates/CellStates';

const AUTOMATA_SIZE: number = 100;
const CELL_SIZE_PX: number = 8;
var playing: boolean = false;

const app = new PIXI.Application<HTMLCanvasElement>({ resizeTo: window, background: '#4399bb' });
document.body.appendChild(app.view);

/* 
    GAME CONTROLS
*/
const gameControlsContainer = new PIXI.Container();
app.stage.addChild(gameControlsContainer);

let controlPanel = new PIXI.Graphics();
controlPanel.beginFill(0xffffff);
controlPanel.tint = 0xabcdef;
controlPanel.drawRect(0, 0, app.screen.width / 4, app.screen.height);
controlPanel.eventMode = "static";
controlPanel.on('pointerdown', play);
gameControlsContainer.addChild(controlPanel);

function play() {
    playing = !playing;
    console.log('playing', playing);
    controlPanel.tint = playing ? 0xfedcba : 0xabcdef;
}


/* 
    GAME CONTAINER
*/
const gameContainer = new PIXI.Container();
gameContainer.x = app.screen.width / 4;
gameContainer.width = (app.screen.width * 3) / 4;
gameContainer.height = app.screen.height;
app.stage.addChild(gameContainer);


/*
    CELL MATRIX
*/

// const cellMatrix = new CellMatrix(gameContainer, AUTOMATA_SIZE); // rip

const cellMatrixContainer = new PIXI.Container();
cellMatrixContainer.addEventListener('pointermove', swapCellState);
cellMatrixContainer.eventMode = 'static';
gameContainer.addChild(cellMatrixContainer);

// this.container.x = gameContainer.x;
// this.container.y = gameContainer.y;

const cellMatrix: PIXI.Graphics[][] = [];

for (let i = 0; i < AUTOMATA_SIZE; i++) {
    
    cellMatrix[i] = [];

    for (let j = 0; j < AUTOMATA_SIZE; j++) {
        let cell = new PIXI.Graphics()
            .beginFill(0xffffff)
            .drawRect((j*CELL_SIZE_PX), (i*CELL_SIZE_PX), CELL_SIZE_PX, CELL_SIZE_PX);

        cell.tint = CellStates.OFF;

        cellMatrix[i][j] = cell;
        cellMatrixContainer.addChild(cell);
    }
}

function swapCellState(event: PIXI.FederatedPointerEvent): void {
    if (playing)
        return;

    for (let i = 0; i < AUTOMATA_SIZE; i++) {
        for (let j = 0; j < AUTOMATA_SIZE; j++) {
            if (cellMatrix[i][j].containsPoint(event.client))
                cellMatrix[i][j].tint = (cellMatrix[i][j].tint === CellStates.ON) ? CellStates.OFF : CellStates.ON;
        }
    }
}

function updateCellStates(): void {

    let nextGen: boolean[][] = [];

    // Generate next generation
    for (let i = 0; i < AUTOMATA_SIZE; i++) {
        nextGen[i] = [];
        for (let j = 0; j < AUTOMATA_SIZE; j++) {
            let neighbors = countNeighbors(i, j);

            if (cellMatrix[i][j].tint === CellStates.ON) {
                if (neighbors < 2 || neighbors > 3)
                    nextGen[i][j] = false;
                else
                    nextGen[i][j] = true;
            }
            else if (neighbors === 3) {
                nextGen[i][j] = true;
            }
            else {
                nextGen[i][j] = false;
            }
        }
    }

    // Map generation to graphical cells
    for (let i = 0; i < AUTOMATA_SIZE; i++) {
        for (let j = 0; j < AUTOMATA_SIZE; j++) {
            switch (nextGen[i][j]) {
                case true:
                    cellMatrix[i][j].tint = CellStates.ON;
                    break;
                case false:
                    cellMatrix[i][j].tint = CellStates.OFF;
                    break;
            }
        }
    }
}

let elapsed = 0.0;
app.ticker.add((delta) => {
    elapsed += delta / 60;
    if (playing && elapsed > 0.5) {
        updateCellStates();
        elapsed = 0.0;
    }

});

function countNeighbors(x: number, y: number): number {
    // naive
    let count = 0;
    let fixedMatrixLength = cellMatrix.length - 1;
    
    if (x > 0 && y > 0 && cellMatrix[x-1][y-1].tint === CellStates.ON) count++;
    if (y > 0 && cellMatrix[ x ][y-1].tint === CellStates.ON) count++;
    if (x < fixedMatrixLength && y > 0 && cellMatrix[x+1][y-1].tint === CellStates.ON) count++;
    if (x > 0 && cellMatrix[x-1][ y ].tint === CellStates.ON) count++;
    if (x < fixedMatrixLength && cellMatrix[x+1][ y ].tint === CellStates.ON) count++;
    if (x > 0 && y < fixedMatrixLength && cellMatrix[x-1][y+1].tint === CellStates.ON) count++;
    if (y < fixedMatrixLength && cellMatrix[ x ][y+1].tint === CellStates.ON) count++;
    if (x < fixedMatrixLength && y < fixedMatrixLength && cellMatrix[x+1][y+1].tint === CellStates.ON) count++;

    return count;
}
