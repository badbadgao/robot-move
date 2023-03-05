import React from "react";
import { render, screen } from "@testing-library/react";
import { prettyDOM } from "@testing-library/react";

import Square from "./Square";
import Squares from "./index";
import { DIRECTION } from "models/type";

test("active square", () => {
  render(<Square active />);

  const icon = screen.getByTestId("SmartToyIcon");
  expect(icon).toBeInTheDocument();
});

test("inactive square", () => {
  render(<Square active={false} />);

  const icon = screen.queryByTestId("SmartToyIcon");
  expect(icon).not.toBeInTheDocument();
});

test("squares position", () => {
  const position = { x: 1, y: 1, direction: DIRECTION.NORTH };
  const squaresRoot = render(<Squares position={position} />);

  console.log(prettyDOM(squaresRoot.container));
  const squaresRootContainer = squaresRoot.container.children[0];
  expect(squaresRootContainer.children.length).toBe(5);

  const squaresRow1 = squaresRootContainer.children[0];
  expect(squaresRow1.children.length).toBe(5);
  const squaresRow2 = squaresRootContainer.children[1];
  expect(squaresRow2.children.length).toBe(5);
  const squaresRow3 = squaresRootContainer.children[2];
  expect(squaresRow3.children.length).toBe(5);
  const squaresRow4 = squaresRootContainer.children[3];
  expect(squaresRow4.children.length).toBe(5);
  const squaresRow5 = squaresRootContainer.children[4];
  expect(squaresRow5.children.length).toBe(5);

  // only one robot icon is showing
  const icons = screen.queryAllByTestId("SmartToyIcon");
  expect(icons).toHaveLength(1);

  // find active square by position and should have a child that is the robot icon
  const activeSquare = screen.getByTestId(`${position.x}-${position.y}`);
  expect(activeSquare.children).toHaveLength(1);
});
