import Toggle from "./Toggle";

export default function ToggleBox() {
  return (
    <div className="flex flex-col gap-6 justify-center items-center h-screen">
      <div className="flex gap-6">
        <Toggle size="sm" />
        <Toggle size="sm" checked={true} />
      </div>
      <div className="flex gap-6">
        <Toggle />
        <Toggle checked={true} />
      </div>
    </div>
  );
}
