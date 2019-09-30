import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CashFlowTool from "./components/CashFlowTool";
import SiteNav from "./components/SiteNav";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <Router>
      <SiteNav />
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/tool/:section" component={CashFlowTool} />
      </Switch>
    </Router>
  );
}

export default App;
