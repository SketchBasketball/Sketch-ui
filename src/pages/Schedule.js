import React from "react";
import "./Schedule.scss";
import LeagueMenuItem from "../components/SubMenuItem";
import { Route, Switch } from "react-router-dom";
import ScheduleList from "./ScheduleList";
import { useDispatch, useSelector } from "react-redux";
import { getLeagues } from "../store/actions/league";
import { useEffect } from "react";

const Schedule = () => {
  const dispatch = useDispatch();
  const { leagues } = useSelector((store) => store.leagueReducer);

  useEffect(() => {
    dispatch(getLeagues());
  }, []);
  return (
    <div className="schedule-wrapper">
      <div className="schedule-menu-wrapper">
        <LeagueMenuItem name="Summary" path="/Schedules" exact={true} />
        {leagues.map((item, index) => {
          return (
            <LeagueMenuItem
              name={item.abv}
              path={`/Schedules/${item.abv}`}
              key={index}
            />
          );
        })}
      </div>
      <Switch>
        <Route path="/Schedules" component={ScheduleList} exact={true} />
        <Route
          path="/Schedules/:league"
          component={ScheduleList}
          exact={true}
        />
      </Switch>
    </div>
  );
};

export default Schedule;
