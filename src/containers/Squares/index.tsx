import * as React from "react";
import "./Squares.css";
import Square from "./Square";
import { TPOSITION } from "models/type";

interface TSquaresProps {
  position: TPOSITION;
}

const Squars = ({ position }: TSquaresProps): JSX.Element => {
  return (
    <div className="squares">
      {Array(5)
        .fill(null)
        .map((_, rowIndex) => (
          <div key={rowIndex} className="squares__row">
            {Array(5)
              .fill(null)
              .map((_, columnIndex) => (
                <Square
                  key={`${rowIndex}-${columnIndex}`}
                  active={
                    columnIndex === position.x && rowIndex === 4 - position.y
                  }
                />
              ))}
          </div>
        ))}
    </div>
  );
};

export default Squars;
