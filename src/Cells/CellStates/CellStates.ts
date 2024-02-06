import * as PIXI from 'pixi.js';
import CellState from "./CellState";

export type CellStateMap = {
    [key: string]: CellState;
};
   
const CellStates: CellStateMap = {
    OFF: { 
        color: new PIXI.Color('black') 
    } as CellState,
    ON: {
        color: new PIXI.Color('white')
    } as CellState
};

export default CellStates;