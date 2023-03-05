import { DIRECTION } from "./type";

class DirectionInfo {
  degree: number;
  direction: DIRECTION;
  constructor(direction: DIRECTION, degree: number) {
    this.direction = direction;
    this.degree = degree;
  }

  static allDirectionsInfo = [
    new DirectionInfo(DIRECTION.NORTH, 0),
    new DirectionInfo(DIRECTION.EAST, 90),
    new DirectionInfo(DIRECTION.SOUTH, 180),
    new DirectionInfo(DIRECTION.WEST, 270),
  ];

  static getDirectionByDegree = (degree: number): DirectionInfo => {
    return (
      this.allDirectionsInfo.find(
        (directionInfo) => degree % 360 === directionInfo.degree
      ) || this.allDirectionsInfo[0]
    );
  };

  /**
   *
   * @param direction the direction used to get the instance of DirectionInfo
   * @returns the corrosponding DirectionInfo, returns North direction if no matching Direction.
   */
  static getDirectionByDirection = (direction: DIRECTION): DirectionInfo => {
    return (
      this.allDirectionsInfo.find(
        (directionInfo) => direction === directionInfo.direction
      ) || this.allDirectionsInfo[0]
    );
  };
}

export default DirectionInfo;
