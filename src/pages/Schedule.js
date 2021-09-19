import "./Schedule.scss";
import LeagueMenuItem from "../components/SubMenuItem";
import { Route, Switch } from "react-router-dom";
import ScheduleCalendar from "./ScheduleCalendar";
import ScheduleList from "./ScheduleList";

const Schedule = () => {
  return (
    <div className="schedule-wrapper">
      <div className="schedule-menu-wrapper">
        <LeagueMenuItem name="Summary" path="/Schedules" exact={true} />
        <LeagueMenuItem name="Men's League" path="/Schedules/Men" />
        <LeagueMenuItem name="Women's League" path="/Schedules/Women" />
        <LeagueMenuItem name="Kid's League" path="/Schedules/Kid" />
        <LeagueMenuItem name="U18 League" path="/Schedules/U18" />
        <LeagueMenuItem name="U15 League" path="/Schedules/U15" />
        <LeagueMenuItem name="U12 League" path="/Schedules/U12" />
        <LeagueMenuItem name="U9 League" path="/Schedules/U9" />
        <LeagueMenuItem name="U7 League" path="/Schedules/U7" />
      </div>
      <div className="schedule-content-wrapper">
        <Switch>
          <Route path="/Schedules" component={ScheduleCalendar} exact={true} />
          <Route
            path="/Schedules/:league"
            component={ScheduleList}
            exact={true}
          />
        </Switch>
      </div>
    </div>
  );
};

export default Schedule;
