import {Tile} from '../tile/tile.class';

export class PuzzleTile {
  goal: Tile;
  current: Tile;
  isBlank: boolean;

  constructor(tile: Tile) {
    this.goal = Object.assign({}, tile);
    this.current = Object.assign({}, tile);
    this.isBlank = (tile.index === 9);//9 & 4
  }

  isGoal(): boolean { 
    return this.current.location.left === this.goal.location.left &&
      this.current.location.top === this.goal.location.top;
  }
}

// to change work on puzzle.service, puzzle-tile.class.ts, board.components
