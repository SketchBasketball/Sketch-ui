import leagueReducer from "./league";
import scheduleReducer from "./schedule";
import mainReducer from "./main";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  leagueReducer,
  scheduleReducer,
  mainReducer,
});

export default rootReducer;
