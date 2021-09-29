import React from "react";
import "./League.scss";
import LeagueMenuItem from "../components/SubMenuItem";
import { Route, Switch } from "react-router-dom";
import LeagueDetail from "./LeagueDetail";
import LeagueSummary from "./LeagueSummary";
import { useEffect, useState } from "react";
import axios from "axios";

const League = () => {
  const [leagues, setLeagues] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://alb-sketchbball-dev-1018877792.ap-northeast-2.elb.amazonaws.com/leagues"
      )
      .then((res) => {
        console.log(res);
        setLeagues(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="league-wrapper">
      <div className="league-menu-wrapper">
        <LeagueMenuItem name="Summary" path="/Leagues" exact={true} />
        {leagues.map((league, index) => {
          return (
            <LeagueMenuItem
              key={index}
              name={league.name}
              path={`/Leagues/${league.name.replaceAll(" ", "-")}`}
            />
          );
        })}
      </div>
      <div className="league-content-wrapper">
        <Switch>
          <Route path="/Leagues" component={LeagueSummary} exact={true} />
          <Route
            path="/Leagues/:league"
            component={LeagueDetail}
            exact={true}
          />
        </Switch>
      </div>
    </div>
  );
};

export default League;
