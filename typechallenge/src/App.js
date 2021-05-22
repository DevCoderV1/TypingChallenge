import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import frontpage from "./components/Frontpage";
import easy from "./components/EasyMode";
import hard from "./components/HardMode";
import extreme from "./components/ExtremeMode";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={frontpage} />
        <Route exact path="/EasyMode" component={easy} />
        <Route exact path="/HardMode" component={hard} />
        <Route exact path="/ExtremeMode" component={extreme} />
      </Switch>
    </Router>
  );
}

export default App;
