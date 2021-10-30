import {
  GET_LEAGUE_STANDING,
  GET_LEAGUE_STANDING_SUCCESS,
  GET_LEAGUE_STANDING_FAIL,
} from "../actions/leagueStanding";
const initialState = {
  standings: [],
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
    default:
      return state;
  }
}
