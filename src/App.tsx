import Page from "./pages/Page";
import Auth from "./pages/Auth";

let isAuthenticated = true;

export default function App() {
  return isAuthenticated ? <Page /> : <Auth />;
}
