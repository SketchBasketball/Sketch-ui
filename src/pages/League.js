import React from "react";
import "./League.scss";
import LeagueMenuItem from "../components/SubMenuItem";
import { Route, Switch } from "react-router-dom";
import LeagueDetail from "./LeagueDetail";
import LeagueSummary from "./LeagueSummary";
import { useDispatch, useSelector } from "react-redux";
import { getLeagues } from "../store/actions/league";
import { useEffect } from "react";
const League = () => {
  const dispatch = useDispatch();
  const { leagues } = useSelector((store) => store.leagueReducer);

  useEffect(() => {
    dispatch(getLeagues());
  }, []);

  return (
    <div className="league-wrapper">
      <div className="league-menu-wrapper">
        <LeagueMenuItem name="Summary" path="/Leagues" exact={true} />
        {leagues.map((league, index) => {
          return (
            <LeagueMenuItem
              key={index}
              name={league.abv}
              path={`/Leagues/${league.abv}`}
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
