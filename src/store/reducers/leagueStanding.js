import {
  GET_LEAGUE_STANDING,
  GET_LEAGUE_STANDING_SUCCESS,
  GET_LEAGUE_STANDING_FAIL,
  GET_ALL_LEAGUE_STANDING,
  GET_ALL_LEAGUE_STANDING_SUCCESS,
  GET_ALL_LEAGUE_STANDING_FAIL,
  GET_LEADER_BOARD,
  GET_LEADER_BOARD_SUCCESS,
  GET_LEADER_BOARD_FAIL,
} from "../actions/leagueStanding";
const initialState = {
  standings: [],
  allStandings: [],
  leaderBoard: [],
  isLoading: false,
};

export default function leagueStandingReducer(state = initialState, action) {
  switch (action.type) {
    case GET_LEAGUE_STANDING:
      return {
        ...state,
        standings: [],
        isLoading: true,
      };
    case GET_LEAGUE_STANDING_SUCCESS:
      return {
        ...state,
        standings: action.data,
        isLoading: false,
      };
    case GET_LEAGUE_STANDING_FAIL:
      return {
        ...state,
        standings: [],
        isLoading: false,
      };
    case GET_ALL_LEAGUE_STANDING:
      return {
        ...state,
        allStandings: [],
        isLoading: true,
      };
    case GET_ALL_LEAGUE_STANDING_SUCCESS:
      return {
        ...state,
        allStandings: action.data,
        isLoading: false,
      };
    case GET_ALL_LEAGUE_STANDING_FAIL:
      return {
        ...state,
        allStandings: [],
        isLoading: false,
      };
    case GET_LEADER_BOARD:
      return {
        ...state,
        leaderBoard: [],
      };
    case GET_LEADER_BOARD_SUCCESS:
      return {
        ...state,
        leaderBoard: action.data,
      };
    case GET_LEADER_BOARD_FAIL:
      return {
        ...state,
        leaderBoard: [],
      };
    default:
      return state;
  }
}
