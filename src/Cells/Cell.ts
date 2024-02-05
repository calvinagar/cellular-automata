import * as PIXI from 'pixi.js';
import CellState from './CellStates/CellState';
import CellPosition from './CellPosition';

const CELL_SIZE_PX = 8;

export default class Cell {

    renderedCell: PIXI.Graphics;
    state: CellState;
    
    constructor(pos: CellPosition, state: CellState) {
        this.renderedCell = new PIXI.Graphics();
        this.renderedCell.beginFill(state.color);
        this.renderedCell.drawRect((pos.y*CELL_SIZE_PX), (pos.x*CELL_SIZE_PX), CELL_SIZE_PX, CELL_SIZE_PX);
    }
}