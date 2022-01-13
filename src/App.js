import { Route, Switch } from "react-router-dom";
import MainNavi from "./component/layout/MainNavi";
import HomePage from "./pages/HomePage";
import Blog from "./pages/Blog";
import Menu from "./pages/Menu";
function App() {
  return (
    <div>
      <MainNavi />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/menu">
          <Menu />
        </Route>
      </Switch>
    </div>
  );
}
export default App;
