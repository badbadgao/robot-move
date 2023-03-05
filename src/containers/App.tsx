import * as React from "react";
import RobotMove from "./RobotMove";

import "css/index.css";
import "css/App.css";

interface IProps {
  children: React.ReactNode;
}

const AppWrapper = ({ children }: IProps): JSX.Element => {
  return (
    <div className="App">
      <main>
        <RobotMove />
      </main>
    </div>
  );
};

export default AppWrapper;
