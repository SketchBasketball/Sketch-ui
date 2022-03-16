import React from "react";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Common/Header";
import Schedule from "./pages/Schedule";
import League from "./pages/League";
import Footer from "./components/Common/Footer";
import Error from "./pages/Error";
import Match from "./pages/Match";
import Sponsor from "./pages/Sponsor";
import Statistics from "./pages/Statistics";
import TeamDetail from "./pages/TeamDetail";

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
        <Route path="/statistics" component={Statistics} />
        <Route path="/teams/:teamId" component={TeamDetail} />
        <Route path="*" component={Error} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
