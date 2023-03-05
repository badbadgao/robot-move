import Dialog from "@mui/material/Dialog";
import Button from "components/Button";
import { DIRECTION, TPOSITION } from "models/type";
import * as React from "react";
import { useState } from "react";

interface IPlaceDialogProps {
  onSubmit: (postion: TPOSITION) => void;
  setOpen: (open: boolean) => void;
  open: boolean;
}

const PlaceDialog = ({
  onSubmit,
  open,
  setOpen,
}: IPlaceDialogProps): JSX.Element => {
  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);
  const [direction, setDirection] = useState<DIRECTION>(DIRECTION.NORTH);
  const onSubmitHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    onSubmit({
      x,
      y,
      direction,
    });
    e.preventDefault();
  };
  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <form onSubmit={() => onSubmitHandler}>
        <div className="placeCommandForm">
          {/* <-- x field --> */}
          <div className="form__field">
            <label className="form__label" htmlFor="x">
              x
            </label>
            <input
              id="x"
              name="x"
              type="number"
              max={4}
              min={0}
              className="form__input"
              onChange={(e): void => {
                const value = e.target.value;
                setX(parseInt(value));
              }}
              value={x}
            />
          </div>
          {/* <-- y field --> */}
          <div className="form__field">
            <label className="form__label" htmlFor="y">
              y
            </label>
            <input
              id="y"
              name="y"
              className="form__input"
              type="number"
              max={4}
              min={0}
              onChange={(e): void => {
                const value = e.target.value;
                setY(parseInt(value));
              }}
              value={y}
            />
          </div>
          <div className="form__field">
            <label className="form__label" htmlFor="Direction">
              Direction
            </label>
            <select
              id="direction"
              name="direction"
              className="form__input"
              onChange={(e): void => {
                const value = e.target.value;
                setDirection(value as DIRECTION);
              }}
              value={direction}
            >
              <option value="NORTH">NORTH</option>
              <option value="EAST">EAST</option>
              <option value="SOURTH">SOURTH</option>
              <option value="WEST">WEST</option>
            </select>
          </div>
          <Button
            rootClass="createAcount__submit"
            onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
              onSubmitHandler(e)
            }
          >
            Place Position
          </Button>
        </div>
      </form>
    </Dialog>
  );
};

export default PlaceDialog;
