import { Header } from "../components/Header";
import { KanbanCard } from "../components/KanbanCard";

export default function Page() {
  function handleReset() {
    console.log("Resetted");
  }

  function handleDelete() {
    console.log("Deleted from the page");
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
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}
