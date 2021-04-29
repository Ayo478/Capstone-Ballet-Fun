import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Barre from "./pages/Barre";
import Header from "./component/header/Header";
import Core from "./pages/Core";
import Workout from "./pages/Workout";
import Footer from "./component/footer/Footer";
import FindSchools from "./component/findSchools/FindSchools";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/barre" component={Barre} />
        <Route exact path="/core" component={Core} />
        <Route exact path="/workout" component={Workout} />
        <Route exact path="/FindSchools" component={FindSchools} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
