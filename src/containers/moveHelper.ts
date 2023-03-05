import DirectionInfo from "models/DirectInfo";
import {
  TPLACEACTION,
  TOTHERACTION,
  ACTIONTYPE,
  DIRECTION,
  TPOSITION,
} from "models/type";

const MAX_X = 4;
const MAX_Y = 4;

export const handleAction = (
  action: TPLACEACTION | TOTHERACTION,
  state: TPOSITION
): TPOSITION => {
  switch (action.type) {
    case ACTIONTYPE.PLACE: {
      const { x, y, direction } = action;
      return { x, y, direction };
    }
    case ACTIONTYPE.MOVE: {
      return moveHandler(state);
    }
    case ACTIONTYPE.LEFT:
    case ACTIONTYPE.RIGHT: {
      const newDirection = turn(state.direction, action.type);
      return {
        ...state,
        direction: newDirection,
      };
    }
    case ACTIONTYPE.REPORT: {
      return state;
    }
    default:
      return state;
  }
};

/**
 * @throws {Error}
 */
const turn = (
  currentDirection: DIRECTION,
  direction: ACTIONTYPE.LEFT | ACTIONTYPE.RIGHT
): DIRECTION => {
  switch (direction) {
    case ACTIONTYPE.LEFT: {
      const currentDirectionInfo =
        DirectionInfo.getDirectionByDirection(currentDirection);

      const newDegree = currentDirectionInfo.degree - 90;
      const finalDegree = newDegree > 0 ? newDegree : 360 + newDegree;
      const newDirection =
        DirectionInfo.getDirectionByDegree(finalDegree)?.direction;
      return newDirection;
    }
    case ACTIONTYPE.RIGHT: {
      const currentDirectionInfo =
        DirectionInfo.getDirectionByDirection(currentDirection);

      const newDegree = currentDirectionInfo.degree + 90;
      const finalDegree = newDegree > 360 ? newDegree - 360 : newDegree;
      return DirectionInfo.getDirectionByDegree(finalDegree)?.direction;
    }
  }
};
/**
 * handle move action
 */
const moveHandler = (state: TPOSITION): TPOSITION => {
  switch (state.direction) {
    case DIRECTION.EAST: {
      return {
        ...state,
        x: Math.min(state.x + 1, MAX_X),
      };
    }
    case DIRECTION.SOUTH: {
      return {
        ...state,
        y: Math.max(state.y - 1, 0),
      };
    }
    case DIRECTION.WEST: {
      return {
        ...state,
        x: Math.max(state.x - 1, 0),
      };
    }
    case DIRECTION.NORTH: {
      return {
        ...state,
        y: Math.min(state.y + 1, MAX_Y),
      };
    }
    default:
      throw Error("Wrong direction: ", state.direction);
  }
};

export default handleAction;
