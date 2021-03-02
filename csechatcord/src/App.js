import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Join from "./util/Join";
import AllChat from "./util/AllChat";
import RoomChat from "./util/RoomChat";
import INIT from "./config";
function App() {
  INIT();
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Join} />
        <Route exact path="/all" component={AllChat} />
        <Route exact path="/room/:roomId" component={RoomChat} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
