import * as React from "react";

interface IInputOutputSummaryProps {
  commands: string[];
}

const InputOutputSummary = ({ commands }: IInputOutputSummaryProps) => {
  const lastCommandRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    lastCommandRef?.current?.scrollIntoView({ behavior: "smooth" });
  }, [commands.length]);

  return (
    <div className="robotMove__summary">
      <h4 className="robotMove__summary-title">Input and out summary</h4>
      <div className="robotMove__summary-content">
        {commands.map((command, index) => (
          <div
            key={index}
            ref={index === commands.length - 1 ? lastCommandRef : null}
          >
            {command}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InputOutputSummary;
