import leagueReducer from "./league";
import scheduleReducer from "./schedule";
import mainScheduleReducer from "./mainSchedule";
import matchReducer from "./match";
import leagueStandingReducer from "./leagueStanding";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  leagueReducer,
  scheduleReducer,
  mainScheduleReducer,
  matchReducer,
  leagueStandingReducer,
});

export default rootReducer;
