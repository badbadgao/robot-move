import { fireEvent, prettyDOM, render, screen } from "@testing-library/react";
import { report } from "process";
import RobotMove from "./RobotMove";

test("robot move", async () => {
  const root = render(<RobotMove />);

  window.HTMLElement.prototype.scrollIntoView = function () {};

  const rootContainer = root.container;
  console.log(prettyDOM(rootContainer));
  const moveButton = screen.getByRole("button", { name: "Move" });
  expect(moveButton).toBeInTheDocument();

  const turnLeftButton = screen.getByRole("button", { name: "Turn Left" });
  expect(turnLeftButton).toBeInTheDocument();

  const turnRightButton = screen.getByRole("button", { name: "Turn Right" });
  expect(turnRightButton).toBeInTheDocument();

  const placeButton = screen.getByRole("button", { name: "Place" });
  expect(placeButton).toBeInTheDocument();

  const reportButton = screen.getByRole("button", { name: "Report" });
  expect(reportButton).toBeInTheDocument();

  // commands MOVE LEFT RIGHT REPORT
  // input and output summary: MOVE LEFT RIGHT REPORT

  fireEvent.click(moveButton);
  expect(await screen.findByText("MOVE")).toBeInTheDocument();

  fireEvent.click(turnLeftButton);
  expect(await screen.findByText("LEFT")).toBeInTheDocument();

  fireEvent.click(turnRightButton);
  expect(await screen.findByText("RIGHT")).toBeInTheDocument();

  fireEvent.click(reportButton);
  expect(await screen.findByText("REPORT")).toBeInTheDocument();

  // commands PLACE 0,0,NORTH MOVE RIGHT MOVE LEFT REPORT
  // input and output summary: PLACE 0,0,NORTH MOVE RIGHT MOVE LEFT REPORT 1,1,NORTH

  fireEvent.click(placeButton);
  const dialog = await screen.findByRole("dialog");
  expect(dialog).toBeInTheDocument();

  const xInput = screen.getByLabelText("x");
  expect(xInput).toBeInTheDocument();
  const yInput = screen.getByLabelText("y");
  expect(yInput).toBeInTheDocument();
  const directionSelect = screen.getByRole("combobox");
  expect(directionSelect).toBeInTheDocument();
  const placeButtonSubmit = screen.getByRole("button", {
    name: "Place Position",
  });
  expect(placeButtonSubmit).toBeInTheDocument();

  fireEvent.change(xInput, { target: { value: 0 } });
  fireEvent.change(yInput, { target: { value: 0 } });
  fireEvent.change(directionSelect, { target: { value: "NORTH" } });
  fireEvent.click(placeButtonSubmit);

  expect(await screen.findByText("PLACE 0 0 NORTH")).toBeInTheDocument();

  fireEvent.click(moveButton);
  fireEvent.click(turnLeftButton);
  fireEvent.click(turnRightButton);
  fireEvent.click(reportButton);
  expect(await screen.findByText("Output: 0,1,NORTH")).toBeInTheDocument();
  fireEvent.click(moveButton);
  fireEvent.click(moveButton);
  fireEvent.click(moveButton);
  fireEvent.click(moveButton);
  fireEvent.click(reportButton);
  expect(await screen.findByText("Output: 0,4,NORTH")).toBeInTheDocument();
  fireEvent.click(moveButton);
  fireEvent.click(reportButton);
  expect(await screen.findAllByText("Output: 0,4,NORTH")).toHaveLength(2);
  expect(screen.queryByText("Output: 0,5,NORTH")).not.toBeInTheDocument();

  // more test can be added
});
