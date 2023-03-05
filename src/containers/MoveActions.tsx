import * as React from "react";
import Button from "components/Button";
import { ACTIONTYPE } from "models/type";

interface IMoveActionsProps {
  onActionHandler: (action: ACTIONTYPE) => void;
}

const actions = [
  {
    type: ACTIONTYPE.LEFT,
    name: "Turn Left",
  },
  {
    type: ACTIONTYPE.RIGHT,
    name: "Turn Right",
  },
  {
    type: ACTIONTYPE.MOVE,
    name: "Move",
  },
  {
    type: ACTIONTYPE.PLACE,
    name: "Place",
  },
  {
    type: ACTIONTYPE.REPORT,
    name: "Report",
  },
];

const MoveActions = ({ onActionHandler }: IMoveActionsProps): JSX.Element => {
  return (
    <div className="robotMove__input">
      <div className="robotMove__actions">
        {actions.map(({ type, name }) => (
          <Button key={name} onClick={() => onActionHandler(type)}>
            {name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default MoveActions;
