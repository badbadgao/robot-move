import * as React from "react";
import Button from "components/Button";
import { useState } from "react";

import "./RobotMove.css";
import { ACTIONTYPE, DIRECTION, TPLACEACTION, TPOSITION } from "models/type";
import Squars from "./Squares";
import handleAction from "./moveHelper";
import "components/form/index.css";
import PlaceDialog from "./PlaceDialog";
import InputOutputSummary from "./InputOutputSummary";
import MoveActions from "./MoveActions";

const RobotMove = () => {
  const [open, setOpen] = useState<boolean>(false);

  const [commands, setCommands] = useState<string[]>([]);
  const [position, setPosition] = useState<TPOSITION>({
    x: 0,
    y: 0,
    direction: DIRECTION.NORTH,
  });

  const onActionHandler = (action: ACTIONTYPE) => {
    if (action !== ACTIONTYPE.PLACE) {
      setCommands((commands) => [...commands, action]);
      const placeCommandFound = !!commands.find((command) =>
        command.startsWith(ACTIONTYPE.PLACE)
      );
      // if no place command found, then the action is ignored.
      if (!placeCommandFound) return;

      switch (action) {
        case ACTIONTYPE.LEFT:
        case ACTIONTYPE.RIGHT:
        case ACTIONTYPE.MOVE: {
          const updatedposition = handleAction({ type: action }, position);
          setPosition(updatedposition);
          break;
        }
        case ACTIONTYPE.REPORT: {
          const updatedposition = handleAction({ type: action }, position);
          setCommands((commands) => [
            ...commands,
            `Output: ${updatedposition.x},${updatedposition.y},${updatedposition.direction}`,
          ]);
          setPosition(updatedposition);
          break;
        }
        default:
          return;
      }
    } else {
      setOpen(true);
    }
  };

  const onSubmitHandler = ({ x, y, direction }: TPOSITION) => {
    const action: TPLACEACTION = {
      type: ACTIONTYPE.PLACE,
      x,
      y,
      direction,
    };
    const updatedposition = handleAction(action, position);
    setPosition(updatedposition);

    setCommands((commands) => [
      ...commands,
      `${ACTIONTYPE.PLACE} ${x} ${y} ${direction}`,
    ]);

    setOpen(false);
  };

  return (
    <div className="robotMove">
      <h4>Robot Move</h4>
      <PlaceDialog open={open} setOpen={setOpen} onSubmit={onSubmitHandler} />
      <MoveActions onActionHandler={onActionHandler} />
      <div className="robotMove__main">
        <InputOutputSummary commands={commands} />
        <Squars position={position} />
      </div>
    </div>
  );
};

export default RobotMove;
