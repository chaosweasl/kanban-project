import Page from "./pages/Page";
import Auth from "./pages/Auth";

let isAuthenticated = true;

export default function () {
  return isAuthenticated ? <Page /> : <Auth />;
}
