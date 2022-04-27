import axios from "axios";

export const GET_PLAYER_DETAILS = "GET_PLAYER_DETAILS";
export const GET_PLAYER_DETAILS_SUCCESS = "GET_PLAYER_DETAILS_SUCCESS";
export const GET_PLAYER_DETAILS_FAIL = "GET_PLAYER_DETAILS_FAIL";

export const GET_PLAYER_TEAMS = "GET_PLAYER_TEAMS";
export const GET_PLAYER_TEAMS_SUCCESS = "GET_PLAYER_TEAMS_SUCCESS";
export const GET_PLAYER_TEAMS_FAIL = "GET_PLAYER_TEAMS_FAIL";

export const GET_PLAYER_TEAM_SEASON = "GET_PLAYER_TEAM_SEASON";
export const GET_PLAYER_TEAM_SEASON_SUCCESS = "GET_PLAYER_TEAM_SEASON_SUCCESS";
export const GET_PLAYER_TEAM_SEASON_FAIL = "GET_PLAYER_TEAM_SEASON_FAIL";

export const GET_PLAYER_ALL_TIME_HIGHS = "GET_PLAYER_ALL_TIME_HIGHS";
export const GET_PLAYER_ALL_TIME_HIGHS_SUCCESS =
  "GET_PLAYER_ALL_TIME_HIGHS_SUCCESS";
export const GET_PLAYER_ALL_TIME_HIGHS_FAIL = "GET_PLAYER_ALL_TIME_HIGHS_FAIL";

export const GET_PLAYER_CURRENT_AVGS = "GET_PLAYER_CURRENT_AVGS";
export const GET_PLAYER_CURRENT_AVGS_SUCCESS =
  "GET_PLAYER_CURRENT_AVGS_SUCCESS";
export const GET_PLAYER_CURRENT_AVGS_FAIL = "GET_PLAYER_CURRENT_AVGS_FAIL";

export const GET_PLAYER_MATCH_STATS = "GET_PLAYER_MATCH_STATS";
export const GET_PLAYER_MATCH_STATS_SUCCESS = "GET_PLAYER_MATCH_STATS_SUCCESS";
export const GET_PLAYER_MATCH_STATS_FAIL = "GET_PLAYER_MATCH_STATS_FAIL";

export const GET_PLAYER_SEASON_STATS = "GET_PLAYER_SEASON_STATS";
export const GET_PLAYER_SEASON_STATS_SUCCESS =
  "GET_PLAYER_SEASON_STATS_SUCCESS";
export const GET_PLAYER_SEASON_STATS_FAIL = "GET_PLAYER_SEASON_STATS_FAIL";

export function getPlayerDetails(playerId) {
  return (dispatch) => {
    dispatch({ type: GET_PLAYER_DETAILS });
    axios
      .get(
        `${process.env.REACT_APP_API_PATH}/players/${playerId}/stats/average`
      )
      .then((res) => {
        dispatch({ type: GET_PLAYER_DETAILS_SUCCESS, data: res.data });
      })
      .catch((err) => {
        // TODO. toast some messages
        dispatch({ type: GET_PLAYER_DETAILS_FAIL });
        console.log(err);
      });
  };
}

export function getPlayerTeams(playerId) {
  return (dispatch) => {
    dispatch({ type: GET_PLAYER_TEAMS });
    axios
      .get(`${process.env.REACT_APP_API_PATH}/players/${playerId}/teams`)
      .then((res) => {
        dispatch({ type: GET_PLAYER_TEAMS_SUCCESS, data: res.data });
      })
      .catch((err) => {
        // TODO. toast some messages
        dispatch({ type: GET_PLAYER_TEAMS_FAIL });
        console.log(err);
      });
  };
}

export function getPlayerTeamSeasons(playerId, teamId) {
  return (dispatch) => {
    dispatch({ type: GET_PLAYER_TEAM_SEASON });
    axios
      .get(
        `${process.env.REACT_APP_API_PATH}/players/${playerId}/teams/${teamId}/seasons`
      )
      .then((res) => {
        dispatch({ type: GET_PLAYER_TEAM_SEASON_SUCCESS, data: res.data });
      })
      .catch((err) => {
        // TODO. toast some messages
        dispatch({ type: GET_PLAYER_TEAM_SEASON_FAIL });
        console.log(err);
      });
  };
}

export function getPlayerAllTimeHighs(playerId) {
  return (dispatch) => {
    dispatch({ type: GET_PLAYER_ALL_TIME_HIGHS });
    axios
      .get(
        `${process.env.REACT_APP_API_PATH}/players/${playerId}/all-stats/highs`
      )
      .then((res) => {
        dispatch({ type: GET_PLAYER_ALL_TIME_HIGHS_SUCCESS, data: res.data });
      })
      .catch((err) => {
        // TODO. toast some messages
        dispatch({ type: GET_PLAYER_ALL_TIME_HIGHS_FAIL });
        console.log(err);
      });
  };
}

export function getPlayerCurrentAVGs(playerId, teamId, seasonId) {
  return (dispatch) => {
    dispatch({ type: GET_PLAYER_CURRENT_AVGS });
    axios
      .get(
        `${process.env.REACT_APP_API_PATH}/players/${playerId}/teams/${teamId}/seasons/${seasonId}/stats/average`
      )
      .then((res) => {
        dispatch({ type: GET_PLAYER_CURRENT_AVGS_SUCCESS, data: res.data });
      })
      .catch((err) => {
        // TODO. toast some messages
        dispatch({ type: GET_PLAYER_CURRENT_AVGS_FAIL });
        console.log(err);
      });
  };
}

export function getPlayerMatchStats(playerId, teamId, seasonId) {
  return (dispatch) => {
    dispatch({ type: GET_PLAYER_MATCH_STATS });
    axios
      .get(
        `${process.env.REACT_APP_API_PATH}/players/${playerId}/teams/${teamId}/seasons/${seasonId}/stats`
      )
      .then((res) => {
        dispatch({ type: GET_PLAYER_MATCH_STATS_SUCCESS, data: res.data });
      })
      .catch((err) => {
        // TODO. toast some messages
        dispatch({ type: GET_PLAYER_MATCH_STATS_FAIL });
        console.log(err);
      });
  };
}

export function getPlayerSeasonStats(playerId, teamId) {
  return (dispatch) => {
    dispatch({ type: GET_PLAYER_SEASON_STATS });
    axios
      .get(
        `${process.env.REACT_APP_API_PATH}/players/${playerId}/teams/${teamId}/seasons/stats/avgs`
      )
      .then((res) => {
        dispatch({ type: GET_PLAYER_SEASON_STATS_SUCCESS, data: res.data });
      })
      .catch((err) => {
        // TODO. toast some messages
        dispatch({ type: GET_PLAYER_SEASON_STATS_FAIL });
        console.log(err);
      });
  };
}
