import React from "react";
import { render, screen } from "@testing-library/react";
import InputOutputSummary from "./index";

test("input out put summary displays correctly", () => {
  const commands = [
    "LEFT",
    "RIGHT",
    "PLACE 0,0,NORTH",
    "MOVE",
    "MOVE",
    "REPORT",
    "Output: 0,2,NORTH",
  ];
  window.HTMLElement.prototype.scrollIntoView = function () {};

  render(<InputOutputSummary commands={commands} />);

  const leftCommand = screen.getByText("LEFT");
  expect(leftCommand).toBeInTheDocument();
  const rightCommand = screen.getByText("RIGHT");
  expect(rightCommand).toBeInTheDocument();
  const placeCommand = screen.getByText("PLACE 0,0,NORTH");
  expect(placeCommand).toBeInTheDocument();
  const moveCommands = screen.getAllByText("MOVE");
  expect(moveCommands).toHaveLength(2);
  const reportCommand = screen.getByText("REPORT");
  expect(reportCommand).toBeInTheDocument();
  const output = screen.getByText("Output: 0,2,NORTH");
  expect(output).toBeInTheDocument();
});
