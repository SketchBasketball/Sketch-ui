import {
  GET_TEAM_SEASONS,
  GET_TEAM_SEASONS_SUCCESS,
  GET_TEAM_SEASONS_FAIL,
  GET_TEAM_PLAYER_STATS,
  GET_TEAM_PLAYER_STATS_SUCCESS,
  GET_TEAM_PLAYER_STATS_FAIL,
  GET_TEAM_STATS,
  GET_TEAM_STATS_SUCCESS,
  GET_TEAM_STATS_FAIL,
  GET_TEAM_WL_STATS,
  GET_TEAM_WL_STATS_SUCCESS,
  GET_TEAM_WL_STATS_FAIL,
  GET_TEAM_ALL_TIME_HIGH,
  GET_TEAM_ALL_TIME_HIGH_SUCCESS,
  GET_TEAM_ALL_TIME_HIGH_FAIL,
  GET_TEAM_BEST_FIVE,
  GET_TEAM_BEST_FIVE_SUCCESS,
  GET_TEAM_BEST_FIVE_FAIL,
} from "../actions/team";
const initialState = {
  teamSeasons: [],
  teamPlayerStats: [],
  teamStats: [],
  teamWLStats: [],
  allTimeHigh: [],
  teamBestFive: [],
  isLoading: true,
  isError: false,
};
export default function teamReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TEAM_SEASONS:
      return {
        ...state,
        isLoading: true,
      };
    case GET_TEAM_SEASONS_SUCCESS:
      return {
        ...state,
        teamSeasons: action.data,
        isError: false,
        isLoading: false,
      };
    case GET_TEAM_SEASONS_FAIL:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case GET_TEAM_PLAYER_STATS:
      return {
        ...state,
        isLoading: true,
      };
    case GET_TEAM_PLAYER_STATS_SUCCESS:
      return {
        ...state,
        teamPlayerStats: action.data,
        isError: false,
        isLoading: false,
      };
    case GET_TEAM_PLAYER_STATS_FAIL:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case GET_TEAM_STATS:
      return {
        ...state,
        isLoading: true,
      };
    case GET_TEAM_STATS_SUCCESS:
      return {
        ...state,
        teamStats: action.data,
        isError: false,
        isLoading: false,
      };
    case GET_TEAM_STATS_FAIL:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case GET_TEAM_WL_STATS:
      return {
        ...state,
        isLoading: true,
      };
    case GET_TEAM_WL_STATS_SUCCESS:
      return {
        ...state,
        teamWLStats: action.data,
        isError: false,
        isLoading: false,
      };
    case GET_TEAM_WL_STATS_FAIL:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case GET_TEAM_ALL_TIME_HIGH:
      return {
        ...state,
        isLoading: true,
      };
    case GET_TEAM_ALL_TIME_HIGH_SUCCESS:
      return {
        ...state,
        allTimeHigh: action.data,
        isError: false,
        isLoading: false,
      };
    case GET_TEAM_ALL_TIME_HIGH_FAIL:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case GET_TEAM_BEST_FIVE:
      return {
        ...state,
        isLoading: true,
      };
    case GET_TEAM_BEST_FIVE_SUCCESS:
      return {
        ...state,
        teamBestFive: action.data,
        isError: false,
        isLoading: false,
      };
    case GET_TEAM_BEST_FIVE_FAIL:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
}
