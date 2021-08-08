import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Chat from "./pages/Chat";
import Username from "./pages/Username";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Username} />
        <Route exact path="/chat" component={Chat} />
      </Switch>
    </BrowserRouter>
  );
};

export default Navigation;
