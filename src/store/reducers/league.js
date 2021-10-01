import { GET_LEAGUES } from "../actions/league";
const initialState = {
  leagues: [],
};

export default function leagueReducer(state = initialState, action) {
  switch (action.type) {
    case GET_LEAGUES:
      return {
        ...state,
        leagues: action.data,
      };
    default:
      return state;
  }
}
