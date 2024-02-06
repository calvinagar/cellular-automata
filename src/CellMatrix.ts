// import * as PIXI from 'pixi.js';
// // import Cell from './Cells/Cell';
// import CellPosition from './Cells/CellPosition';
// import CellStates from './Cells/CellStates/CellStates';

// class CellMatrix {

//     container: PIXI.Container;

//     size: number;
//     // cells: Cell[][];

//     constructor(gameContainer: PIXI.Container, size: number) {

//         this.container = new PIXI.Container();
//         gameContainer.addChild(this.container);

//         // this.container.x = gameContainer.x;
//         // this.container.y = gameContainer.y;

//         // Center bunny sprite in local container coordinates
//         // this.container.pivot.x = this.container.width / 2;
//         // this.container.pivot.y = this.container.height / 2;

//         // this.container.x = app.screen.width / 4; 
//         // this.container.width = (app.screen.width * 3) / 4; 
//         // this.container.height = app.screen.height;

//         this.size = size;
//         this.cells = [];

//         for (let i = 0; i < size; i++) {
//             this.cells[i] = [];
//             for (let j = 0; j < size; j++) {
//                 let cell = new Cell(
//                     { x: i, y: j} as CellPosition,
//                     CellStates.OFF
//                 );

//                 this.cells[i][j] = cell;
//                 this.container.addChild(cell.renderedCell);
//             }
//         }
//     }

//     updateCells(): void {
//         for (let i = 0; i < this.size; i++) {
//             for (let j = 0; j < this.size; j++) {
//                 if (j+1 < this.size && this.cells[i][j+1]) 
//                     this.cells[i][j].swapState();
//             }
//         }
//     }
// }