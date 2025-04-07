import { DayPicker } from "react-day-picker";
import { Clock } from "lucide-react";

type CalendarButtonProps = {
  date: Date | undefined;
  onSelect: (date?: Date) => void;
  id: string;
};

export function CalendarButton({ date, onSelect, id }: CalendarButtonProps) {
  return (
    <div>
      <button
        popoverTarget={`popover-${id}`}
        className="input input-border btn btn-ghost btn-sm mt-1"
        style={{ ["anchorName" as any]: `--${id}` }}
      >
        <div className="flex justify-between items-center gap-3 w-full">
          <span className="-ml-1">
            {date ? date.toLocaleDateString() : "Pick a date"}
          </span>
          <Clock className="-mr-2" />
        </div>
      </button>
      <div
        popover="auto"
        id={`popover-${id}`}
        className="dropdown"
        style={{ ["positionAnchor" as any]: `--${id}` }}
      >
        <DayPicker
          className="react-day-picker"
          mode="single"
          selected={date}
          onSelect={onSelect}
        />
      </div>
    </div>
  );
}
