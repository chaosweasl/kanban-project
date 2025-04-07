import { Header } from "../components/Header";
import { KanbanCard } from "../components/KanbanCard";

export default function () {
  function handleReset() {
    console.log("Caca");
  }

  return (
    <div
      data-theme="cmyk"
      className="bg-[#e9ecef] w-screen h-screen overflow-hidden"
    >
      <Header handleReset={handleReset} />
      <div className="overflow-y-auto overflow-x-auto flex-1">
        <KanbanCard
          title="test title"
          description="caca test"
          defaultDate={new Date()}
        />
      </div>
    </div>
  );
}
