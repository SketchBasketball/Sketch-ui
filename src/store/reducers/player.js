import {
  GET_PLAYER_DETAILS,
  GET_PLAYER_DETAILS_SUCCESS,
  GET_PLAYER_DETAILS_FAIL,
  GET_PLAYER_TEAMS,
  GET_PLAYER_TEAMS_SUCCESS,
  GET_PLAYER_TEAMS_FAIL,
  GET_PLAYER_TEAM_SEASON,
  GET_PLAYER_TEAM_SEASON_SUCCESS,
  GET_PLAYER_TEAM_SEASON_FAIL,
  GET_PLAYER_ALL_TIME_HIGHS,
  GET_PLAYER_ALL_TIME_HIGHS_SUCCESS,
  GET_PLAYER_ALL_TIME_HIGHS_FAIL,
  GET_PLAYER_CURRENT_AVGS,
  GET_PLAYER_CURRENT_AVGS_SUCCESS,
  GET_PLAYER_CURRENT_AVGS_FAIL,
  GET_PLAYER_MATCH_STATS,
  GET_PLAYER_MATCH_STATS_SUCCESS,
  GET_PLAYER_MATCH_STATS_FAIL,
  GET_PLAYER_SEASON_STATS,
  GET_PLAYER_SEASON_STATS_SUCCESS,
  GET_PLAYER_SEASON_STATS_FAIL,
} from "../actions/player";

const initialState = {
  playerDetails: [],
  playerTeams: [],
  playerTeamSeasons: [],
  playerAllTimeHighs: [],
  playerCurrentAVGs: [],
  playerMatchStats: [],
  playerSeasonStats: [],
  isLoading: true,
  isError: false,
};

export default function playerReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PLAYER_DETAILS:
      return {
        ...state,
        playerDetails: [],
        isLoading: true,
      };
    case GET_PLAYER_DETAILS_SUCCESS:
      return {
        ...state,
        playerDetails: action.data,
        isError: false,
        isLoading: false,
      };
    case GET_PLAYER_DETAILS_FAIL:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case GET_PLAYER_TEAMS:
      return {
        ...state,
        playerTeams: [],
        isLoading: true,
      };
    case GET_PLAYER_TEAMS_SUCCESS:
      return {
        ...state,
        playerTeams: action.data,
        isError: false,
        isLoading: false,
      };
    case GET_PLAYER_TEAMS_FAIL:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case GET_PLAYER_TEAM_SEASON:
      return {
        ...state,
        playerTeamSeasons: [],
        isLoading: true,
      };
    case GET_PLAYER_TEAM_SEASON_SUCCESS:
      return {
        ...state,
        playerTeamSeasons: action.data,
        isError: false,
        isLoading: false,
      };
    case GET_PLAYER_TEAM_SEASON_FAIL:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case GET_PLAYER_ALL_TIME_HIGHS:
      return {
        ...state,
        playerAllTimeHighs: [],
        isLoading: true,
      };
    case GET_PLAYER_ALL_TIME_HIGHS_SUCCESS:
      return {
        ...state,
        playerAllTimeHighs: action.data,
        isError: false,
        isLoading: false,
      };
    case GET_PLAYER_ALL_TIME_HIGHS_FAIL:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case GET_PLAYER_CURRENT_AVGS:
      return {
        ...state,
        playerCurrentAVGs: [],
        isLoading: true,
      };
    case GET_PLAYER_CURRENT_AVGS_SUCCESS:
      return {
        ...state,
        playerCurrentAVGs: action.data,
        isError: false,
        isLoading: false,
      };
    case GET_PLAYER_CURRENT_AVGS_FAIL:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case GET_PLAYER_MATCH_STATS:
      return {
        ...state,
        playerMatchStats: [],
        isLoading: true,
      };
    case GET_PLAYER_MATCH_STATS_SUCCESS:
      return {
        ...state,
        playerMatchStats: action.data,
        isError: false,
        isLoading: false,
      };
    case GET_PLAYER_MATCH_STATS_FAIL:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case GET_PLAYER_SEASON_STATS:
      return {
        ...state,
        playerSeasonStats: [],
        isLoading: true,
      };
    case GET_PLAYER_SEASON_STATS_SUCCESS:
      return {
        ...state,
        playerSeasonStats: action.data,
        isError: false,
        isLoading: false,
      };
    case GET_PLAYER_SEASON_STATS_FAIL:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
}
