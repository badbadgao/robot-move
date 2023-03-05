import * as React from "react";
import SmartToyIcon from "@mui/icons-material/SmartToy";

interface TSquareProps {
  active: boolean;
  dataTestid?: string;
}

const Square = ({ active, dataTestid }: TSquareProps): JSX.Element => {
  return (
    <div data-testid={dataTestid || ""} className="square">
      {active && <SmartToyIcon />}
    </div>
  );
};

export default Square;
