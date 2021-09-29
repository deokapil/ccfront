import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/home";
import ConsentConfigurationForm from "../components/ConsentConfigurationForm";

function RouterSetup() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/configure-domain">
          <ConsentConfigurationForm />
        </Route>
      </Switch>
    </Router>
  );
}

export default RouterSetup;
