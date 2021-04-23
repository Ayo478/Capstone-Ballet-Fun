import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Barre from "./pages/Barre";
import Header from "./component/header/Header";
import Core from "./pages/Core";
import Workout from "./pages/workOut";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/barre" component={Barre} />
        <Route exact path="/core" component={Core} />
        <Route exact path="/workout" component={Workout} />
      </Switch>
    </Router>
  );
}

export default App;
