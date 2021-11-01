import {
  GET_MATCH_DETAILS,
  GET_MATCH_DETAILS_SUCCESS,
  GET_MATCH_DETAILS_FAIL,
} from "../actions/match";
const initialState = {
  matchDetails: null,
  isLoading: true,
  isError: false,
};

export default function matchReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MATCH_DETAILS:
      return {
        ...state,
        isLoading: true,
      };
    case GET_MATCH_DETAILS_SUCCESS:
      return {
        ...state,
        matchDetails: action.data,
        isError: false,
        isLoading: false,
      };
    case GET_MATCH_DETAILS_FAIL:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
}
