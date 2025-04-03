import Kanban from "./pages/Kanban";
import Auth from "./pages/Auth";

let isAuthenticated = true;

export default function () {
  return isAuthenticated ? <Kanban /> : <Auth />;
}
