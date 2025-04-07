import { useState } from "react";
import { CalendarButton } from "./CalendarButton";

type KanbanCardProps = {
  title: string;
  description: string;
  defaultDate?: Date;
};

export function KanbanCard({
  title,
  description,
  defaultDate,
}: KanbanCardProps) {
  const [date, setDate] = useState<Date | undefined>(defaultDate);

  return (
    <div className="flex justify-evenly items-start mt-10 mb-10">
      <div className="card bg-white text-black w-96 mt-10 mb-10">
        <div className="card-body">
          <h2 className="card-title justify-center">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-start">
            <CalendarButton date={date} onSelect={setDate} id="rdp1" />
          </div>
        </div>
      </div>
    </div>
  );
}
