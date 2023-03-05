import * as React from "react";
import SmartToyIcon from "@mui/icons-material/SmartToy";

interface TSquareProps {
  active: boolean;
}

const Square = ({ active }: TSquareProps): JSX.Element => {
  return <div className="square">{active && <SmartToyIcon />}</div>;
};

export default Square;
