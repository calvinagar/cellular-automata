// import * as PIXI from 'pixi.js';
// import CellState from './CellStates/CellState';
// import CellPosition from './CellPosition';
// import CellStates from './CellStates/CellStates';

// const CELL_SIZE_PX = 8;

// class Cell {

//     renderedCell: PIXI.Graphics;
//     state: CellState;
    
//     constructor(pos: CellPosition, state: CellState) {
//         this.renderedCell = new PIXI.Graphics();
//         this.renderedCell.beginFill(0xffffff);
//         this.renderedCell.drawRect((pos.y*CELL_SIZE_PX), (pos.x*CELL_SIZE_PX), CELL_SIZE_PX, CELL_SIZE_PX);
//         this.renderedCell.eventMode = 'static';
//         this.renderedCell.tint = state.color;
//         // this.renderedCell.addEventListener('pointerdown', this.swapState);
                
//         this.state = state;
//     }

//     // swapState(event?: PIXI.FederatedPointerEvent): void {
//     //     this.state = (this.state === CellStates.OFF) ? CellStates.ON : CellStates.OFF;
//     //     this.renderedCell.tint = this.state.color;
//     // }
// }