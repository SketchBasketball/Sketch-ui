import {
  GET_BANNERS,
  GET_VIDEO,
  GET_MAIN_LEAGUE_STANDING,
  GET_NEXT_GAMES,
  GET_NEXT_GAMES_SUCCESS,
  GET_NEXT_GAMES_FAIL,
  GET_PREV_GAMES,
  GET_PREV_GAMES_SUCCESS,
  GET_PREV_GAMES_FAIL,
} from "../actions/mainPage";
const initialState = {
  banners: [],
  video: "QorHlczkjGM",
  next_games: [],
  next_loading: false,
  prev_games: [],
  prev_loading: false,
  season_standings: [],
};

export default function mainPageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_BANNERS:
      return {
        ...state,
        banners: action.data,
      };
    case GET_VIDEO:
      return {
        ...state,
        video: action.data,
      };
    case GET_NEXT_GAMES:
      return {
        ...state,
        next_loading: true,
      };
    case GET_NEXT_GAMES_SUCCESS:
      return {
        ...state,
        next_games: action.data,
        next_loading: false,
      };
    case GET_NEXT_GAMES_FAIL:
      return {
        ...state,
        next_loading: false,
      };
    case GET_PREV_GAMES:
      return {
        ...state,
        prev_loading: true,
      };
    case GET_PREV_GAMES_SUCCESS:
      return {
        ...state,
        prev_games: action.data,
        prev_loading: false,
      };
    case GET_PREV_GAMES_FAIL:
      return {
        ...state,
        prev_loading: false,
      };
    case GET_MAIN_LEAGUE_STANDING:
      return {
        ...state,
        season_standings: action.data,
      };
    default:
      return state;
  }
}
