import axios from "axios";

export const GET_TEAM_SEASONS = "GET_TEAM_SEASONS";
export const GET_TEAM_SEASONS_SUCCESS = "GET_TEAM_SEASONS_SUCCESS";
export const GET_TEAM_SEASONS_FAIL = "GET_TEAM_SEASONS_FAIL";

export const GET_TEAM_PLAYER_STATS = "GET_TEAM_PLAYER_STATS";
export const GET_TEAM_PLAYER_STATS_SUCCESS = "GET_TEAM_PLAYER_STATS_SUCCESS";
export const GET_TEAM_PLAYER_STATS_FAIL = "GET_TEAM_PLAYER_STATS_FAIL";

export const GET_TEAM_STATS = "GET_TEAM_STATS";
export const GET_TEAM_STATS_SUCCESS = "GET_TEAM_STATS_SUCCESS";
export const GET_TEAM_STATS_FAIL = "GET_TEAM_STATS_FAIL";

export const GET_TEAM_WL_STATS = "GET_TEAM_WL_STATS";
export const GET_TEAM_WL_STATS_SUCCESS = "GET_TEAM_WL_STATS_SUCCESS";
export const GET_TEAM_WL_STATS_FAIL = "GET_TEAM_WL_STATS_FAIL";

export const GET_TEAM_ALL_TIME_HIGH = "GET_TEAM_ALL_TIME_HIGH";
export const GET_TEAM_ALL_TIME_HIGH_SUCCESS = "GET_TEAM_ALL_TIME_HIGH_SUCCESS";
export const GET_TEAM_ALL_TIME_HIGH_FAIL = "GET_TEAM_ALL_TIME_HIGH_FAIL";

export const GET_TEAM_BEST_FIVE = "GET_TEAM_BEST_FIVE";
export const GET_TEAM_BEST_FIVE_SUCCESS = "GET_TEAM_BEST_FIVE_SUCCESS";
export const GET_TEAM_BEST_FIVE_FAIL = "GET_TEAM_BEST_FIVE_FAIL";

export function getTeamSeasons(id) {
  return (dispatch) => {
    dispatch({ type: GET_TEAM_SEASONS });
    axios
      .get(`${process.env.REACT_APP_API_PATH}/teams/${id}/seasons`)
      .then((res) => {
        dispatch({ type: GET_TEAM_SEASONS_SUCCESS, data: res.data });
      })
      .catch((err) => {
        // TODO. toast some messages
        dispatch({ type: GET_TEAM_SEASONS_FAIL });
        console.log(err);
      });
  };
}

export function getTeamPlayerStats(teamId, seasonId) {
  return (dispatch) => {
    dispatch({ type: GET_TEAM_PLAYER_STATS });
    axios
      .get(
        `${process.env.REACT_APP_API_PATH}/teams/${teamId}/seasons/${seasonId}/players`
      )
      .then((res) => {
        dispatch({ type: GET_TEAM_PLAYER_STATS_SUCCESS, data: res.data });
      })
      .catch((err) => {
        // TODO. toast some messages
        dispatch({ type: GET_TEAM_PLAYER_STATS_FAIL });
        console.log(err);
      });
  };
}

export function getTeamStats(teamId, seasonId) {
  return (dispatch) => {
    dispatch({ type: GET_TEAM_STATS });
    axios
      .get(
        `${process.env.REACT_APP_API_PATH}/teams/${teamId}/seasons/${seasonId}/stats`
      )
      .then((res) => {
        dispatch({ type: GET_TEAM_STATS_SUCCESS, data: res.data });
      })
      .catch((err) => {
        // TODO. toast some messages
        dispatch({ type: GET_TEAM_STATS_FAIL });
        console.log(err);
      });
  };
}

export function getTeamWLStats(teamId, seasonId) {
  return (dispatch) => {
    dispatch({ type: GET_TEAM_WL_STATS });
    axios
      .get(
        `${process.env.REACT_APP_API_PATH}/teams/${teamId}/seasons/${seasonId}/stats/win-loss`
      )
      .then((res) => {
        dispatch({ type: GET_TEAM_WL_STATS_SUCCESS, data: res.data });
      })
      .catch((err) => {
        // TODO. toast some messages
        dispatch({ type: GET_TEAM_WL_STATS_FAIL });
        console.log(err);
      });
  };
}

export function getTeamAllTimeHigh(teamId) {
  return (dispatch) => {
    dispatch({ type: GET_TEAM_ALL_TIME_HIGH });
    axios
      .get(`${process.env.REACT_APP_API_PATH}/teams/${teamId}/all-stats/highs`)
      .then((res) => {
        dispatch({ type: GET_TEAM_ALL_TIME_HIGH_SUCCESS, data: res.data });
      })
      .catch((err) => {
        // TODO. toast some messages
        dispatch({ type: GET_TEAM_ALL_TIME_HIGH_FAIL });
        console.log(err);
      });
  };
}

export function getTeamBestFive(teamId, seasonId) {
  return (dispatch) => {
    dispatch({ type: GET_TEAM_BEST_FIVE });
    axios
      .get(
        `${process.env.REACT_APP_API_PATH}/teams/${teamId}/seasons/${seasonId}/bestfive`
      )
      .then((res) => {
        dispatch({ type: GET_TEAM_BEST_FIVE_SUCCESS, data: res.data });
      })
      .catch((err) => {
        // TODO. toast some messages
        dispatch({ type: GET_TEAM_BEST_FIVE_FAIL });
        console.log(err);
      });
  };
}
