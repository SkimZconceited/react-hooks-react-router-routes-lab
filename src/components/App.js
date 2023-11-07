import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

function App() {
  console.log("oi");
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/movies" component={Movies} />
        <Route path="/actors" component={Actors} />
        <Route path="/directors" component={Directors} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
