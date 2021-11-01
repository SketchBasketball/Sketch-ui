import { GET_MAIN, GET_MAIN_SUCCESS, GET_MAIN_FAIL } from "../actions/mainPage";
const initialState = {
  main_images: [],
  main_video: "QorHlczkjGM",
  next_games: [],
  prev_games: [],
  season_standings: [],
  isLoading: false,
};

export default function mainPageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MAIN:
      return {
        ...state,
        isLoading: true,
      };
    case GET_MAIN_SUCCESS:
      return {
        ...state,
        main_images: action.data.main_images,
        main_video: action.data.main_video,
        next_games: action.data.next_games,
        prev_games: action.data.prev_games,
        season_standings: action.data.season_standings,
        isLoading: false,
      };
    case GET_MAIN_FAIL:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}
