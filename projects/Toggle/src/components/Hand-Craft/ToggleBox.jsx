import Toggle from "./Toggle";
import { useState } from "react";

export default function ToggleBox() {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(true);
  const [isChecked3, setIsChecked3] = useState(false);
  const [isChecked4, setIsChecked4] = useState(true);
  return (
    <div className="flex flex-col gap-6 justify-center items-center h-screen">
      <div className="flex gap-6">
        <Toggle size="sm" checked={isChecked1} onChange={setIsChecked1} />
        <Toggle size="sm" checked={isChecked2} onChange={setIsChecked2} />
      </div>
      <div className="flex gap-6">
        <Toggle checked={isChecked3} onChange={setIsChecked3} />
        <Toggle checked={isChecked4} onChange={setIsChecked4} />
      </div>
    </div>
  );
}
