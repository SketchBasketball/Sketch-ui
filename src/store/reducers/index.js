import leagueReducer from "./league";
import scheduleReducer from "./schedule";
import mainReducer from "./main";
import matchReducer from "./match";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  leagueReducer,
  scheduleReducer,
  mainReducer,
  matchReducer,
});

export default rootReducer;
