import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import CashFlowTool from "./components/CashFlowTool";
import DMTNav from "./components/DMTNav";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <Router>
      <DMTNav />
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/tool/:section" component={CashFlowTool} />
      </Switch>
    </Router>
  );
}

export default App;
