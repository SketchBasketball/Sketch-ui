import {
  GET_TEAM_DETAILS,
  GET_TEAM_DETAILS_SUCCESS,
  GET_TEAM_DETAILS_FAIL,
  GET_WIN_LOSS_TEAM_DETAILS,
  GET_WIN_LOSS_TEAM_DETAILS_SUCCESS,
  GET_WIN_LOSS_TEAM_DETAILS_FAIL,
  GET_All_TIME_HIGHS,
  GET_All_TIME_HIGHS_SUCCESS,
  GET_All_TIME_HIGHS_FAIL,
} from "../actions/team";
const initialState = {
  teamDetails: [],
  wlDetails: [],
  allTimeHighs: [],
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
        teamDetails: action.data,
        isError: false,
        isLoading: false,
      };
    case GET_TEAM_DETAILS_FAIL:
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    case GET_WIN_LOSS_TEAM_DETAILS:
      return {
        ...state,
        isLoading: true,
      };
    case GET_WIN_LOSS_TEAM_DETAILS_SUCCESS:
      return {
        ...state,
        wlDetails: action.data,
        isError: false,
        isLoading: false,
      };
    case GET_WIN_LOSS_TEAM_DETAILS_FAIL:
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    case GET_All_TIME_HIGHS:
      return {
        ...state,
        isLoading: true,
      };
    case GET_All_TIME_HIGHS_SUCCESS:
      return {
        ...state,
        allTimeHighs: action.data,
        isError: false,
        isLoading: false,
      };
    case GET_All_TIME_HIGHS_FAIL:
      return {
        ...state,
        isError: true,
        isLoading: false,
      };

    default:
      return state;
  }
}
