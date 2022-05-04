import leagueReducer from "./league";
import scheduleReducer from "./schedule";
import mainScheduleReducer from "./mainSchedule";
import matchReducer from "./match";
import leagueStandingReducer from "./leagueStanding";
import mainPageReducer from "./mainPage";
import playerReducer from "./player";
import statisticsReducer from "./statistics";
import teamReducer from "./team";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  leagueReducer,
  scheduleReducer,
  mainScheduleReducer,
  matchReducer,
  leagueStandingReducer,
  mainPageReducer,
  playerReducer,
  statisticsReducer,
  teamReducer,
});

export default rootReducer;
