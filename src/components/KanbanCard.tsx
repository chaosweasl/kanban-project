import { useState } from "react";
import { CalendarButton } from "./CalendarButton";
import { Trash } from "lucide-react";

type KanbanCardProps = {
  title: string;
  description: string;
  defaultDate?: Date;
  onDelete: () => void;
};

export function KanbanCard({
  title,
  description,
  defaultDate,
  onDelete,
}: KanbanCardProps) {
  const [date, setDate] = useState<Date | undefined>(defaultDate);

  return (
    <div className="flex justify-evenly items-start mt-10 mb-10">
      <div className="card bg-white text-black w-96 mt-10 mb-10">
        <div className="card-body">
          <h2 className="card-title justify-center text-2xl">{title}</h2>
          <p className="text-lg">{description}</p>
          <div className="card-actions justify-between">
            <CalendarButton date={date} onSelect={setDate} id="rdp1" />
            <button className="btn btn-ghost" onClick={onDelete}>
              <Trash />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
