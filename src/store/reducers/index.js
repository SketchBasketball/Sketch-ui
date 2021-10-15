import leagueReducer from "./league";
import scheduleReducer from "./schedule";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  leagueReducer,
  scheduleReducer,
});

export default rootReducer;
