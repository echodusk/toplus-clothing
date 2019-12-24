import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.scss";

import Homepage from "./pages/homepage/homepage.component";

const Hats = () => <div>hats page</div>;
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/hats" component={Hats} />
      </Switch>
    </div>
  );
}

export default App;
