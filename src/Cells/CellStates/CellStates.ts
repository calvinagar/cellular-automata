import * as PIXI from 'pixi.js';
import CellState from "./CellState";

export type CellStateMap = {
    [key: string]: string;
};
   
const CellStates: CellStateMap = {
    OFF: "black",
    ON: "white"
};

export default CellStates;