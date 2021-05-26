import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import frontpage from "./components/Frontpage";
import easy from "./components/EasyMode";
import normal from "./components/NormalMode";
import hard from "./components/HardMode";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={frontpage} />
        <Route exact path="/EasyMode" component={easy} />
        <Route exact path="/NormalMode" component={normal} />
        <Route exact path="/HardMode" component={hard} />
      </Switch>
    </Router>
  );
}

export default App;
