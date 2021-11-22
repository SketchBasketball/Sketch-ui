import {
  GET_LEAGUES,
  GET_SEASONS,
  GET_TEAMS,
  GET_STATS,
  GET_STATS_SUCCESS,
  GET_STATS_FAIL,
} from "../actions/statistics";
const initialState = {
  leagues: [],
  seasons: [],
  teams: [],
  stats: [],
  stats_loading: false,
};

export default function statisticsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_STATS:
      return {
        ...state,
        stats_loading: true,
      };
    case GET_STATS_SUCCESS:
      return {
        ...state,
        stats: action.data,
        stats_loading: false,
      };
    case GET_STATS_FAIL:
      return {
        ...state,
        stats_loading: false,
      };
    case GET_LEAGUES:
      return {
        ...state,
        leagues: action.data,
      };
    case GET_SEASONS:
      return {
        ...state,
        seasons: action.data,
      };
    case GET_TEAMS:
      return {
        ...state,
        teams: action.data,
      };
    default:
      return state;
  }
}
