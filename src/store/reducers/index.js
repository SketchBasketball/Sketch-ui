import leagueReducer from "./league";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  leagueReducer,
});

export default rootReducer;
