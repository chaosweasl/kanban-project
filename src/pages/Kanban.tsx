import { Header } from "../components/Header";
import KanbanCards from "../components/KanbanCards";

export default function () {
  return (
    <div className="bg-[#e9ecef] w-screen h-screen overflow-hidden">
      <Header />
      <KanbanCards />
    </div>
  );
}
