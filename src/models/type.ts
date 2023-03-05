export const enum ACTIONTYPE {
  PLACE = "PLACE",
  MOVE = "MOVE",
  LEFT = "LEFT",
  RIGHT = "RIGHT",
  REPORT = "REPORT",
}

export const enum DIRECTION {
  NORTH = "NORTH",
  EAST = "EAST",
  WEST = "WEST",
  SOUTH = "SOURTH",
}

/**
 * The type of the robot's poistion state
 */
export type TPOSITION = {
  x: number;
  y: number;
  direction: DIRECTION;
};

export type TPLACEACTION = {
  type: ACTIONTYPE.PLACE;
  x: number;
  y: number;
  direction: DIRECTION;
};

export type TOTHERACTION = {
  type:
    | ACTIONTYPE.MOVE
    | ACTIONTYPE.LEFT
    | ACTIONTYPE.RIGHT
    | ACTIONTYPE.REPORT;
};
