import * as PIXI from 'pixi.js';
import Cell from './Cells/Cell';
import CellPosition from './Cells/CellPosition';
import CellStates from './Cells/CellStates/CellStates';

export default class CellMatrix {

    container: PIXI.Container;
    size: number;
    cells: Cell[][];

    constructor(app: PIXI.Application, size: number) {

        this.container = new PIXI.Container();
        app.stage.addChild(this.container);

        this.container.width = (app.screen.width * 3) / 4; 
        this.container.height = app.screen.height;

        for (let i = 0; i < size; i++) {
            this.cells[i] = [];
            for (let j = 0; j < size; j++) {
                let cell = new Cell(
                    { x: i, y: j} as CellPosition,
                    ((i + j) % 2 === 0 ? CellStates.ON : CellStates.OFF)
                );

                this.cells[i][j] = cell;
                this.container.addChild(cell.renderedCell);
            }
        }
    }

}