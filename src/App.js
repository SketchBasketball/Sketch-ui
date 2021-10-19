import React from "react";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Schedule from "./pages/Schedule";
import League from "./pages/League";
import Footer from "./components/Footer";
import Error from "./pages/Error";
import Match from "./pages/Match";
import Sponsor from "./pages/Sponsor";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/schedules" component={Schedule} />
        <Route path="/leagues" component={League} />
        <Route path="/matches/:id" component={Match} />
        <Route path="/sponsors" component={Sponsor} />
        <Route path="*" component={Error} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
