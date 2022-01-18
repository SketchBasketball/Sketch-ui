import {
  GET_TEAM_DETAILS,
  GET_TEAM_DETAILS_SUCCESS,
  GET_TEAM_DETAILS_FAIL,
} from "../actions/match";
const initialState = {
  teamDetails: null,
  isLoading: true,
  isError: false,
};

export default function teamReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TEAM_DETAILS:
      return {
        ...state,
        isLoading: true,
      };
    case GET_TEAM_DETAILS_SUCCESS:
      return {
        ...state,
        matchDetails: action.data,
        isError: false,
        isLoading: false,
      };
    case GET_TEAM_DETAILS_FAIL:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
}
