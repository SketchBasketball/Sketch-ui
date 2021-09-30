import { GET_LEAGUES_SUCCESS } from "../actions/league";
const initialState = {
  leagues: [],
};

export default function leagueReducer(state = initialState, action) {
  switch (action.type) {
    case GET_LEAGUES_SUCCESS:
      return {
        ...state,
        leagues: action.data,
      };
    default:
      return state;
  }
}
