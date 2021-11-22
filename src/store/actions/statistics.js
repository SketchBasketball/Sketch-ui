import axios from "axios";

export const GET_STATS = "GET_STATS";
export const GET_STATS_SUCCESS = "GET_STATS_SUCCESS";
export const GET_STATS_FAIL = "GET_STATS_FAIL";
export const GET_LEAGUES = "GET_LEAGUES";
export const GET_SEASONS = "GET_SEASONS";
export const GET_TEAMS = "GET_TEAMS";

export function getLeagues() {
  return (dispatch) => {
    axios
      .get(`${process.env.REACT_APP_API_PATH}/leagues`)
      .then((res) => {
        dispatch({ type: GET_LEAGUES, data: res.data });
      })
      .catch((err) => {
        // TODO. toast some messages
        console.log(err);
      });
  };
}

export function getSeasons(leagueId) {
  return (dispatch) => {
    axios
      .get(`${process.env.REACT_APP_API_PATH}/seasons?league_id=${leagueId}`)
      .then((res) => {
        dispatch({ type: GET_SEASONS, data: res.data });
      })
      .catch((err) => {
        // TODO. toast some messages
        console.log(err);
      });
  };
}

export function getTeams(seasonId) {
  return (dispatch) => {
    axios
      .get(`${process.env.REACT_APP_API_PATH}/seasons/${seasonId}/teams`)
      .then((res) => {
        dispatch({ type: GET_TEAMS, data: res.data });
      })
      .catch((err) => {
        // TODO. toast some messages
        console.log(err);
      });
  };
}

export function getStats(seasonId, teamId, matchType) {
  return (dispatch) => {
    let requestURL = `${process.env.REACT_APP_API_PATH}/stats/${seasonId}?match_type=${matchType}`;
    if (teamId != "All") {
      requestURL = requestURL + `&team_id=${teamId}`;
    }
    dispatch({ type: GET_STATS });
    axios
      .get(requestURL)
      .then((res) => {
        dispatch({ type: GET_STATS_SUCCESS, data: res.data });
      })
      .catch((err) => {
        // TODO. toast some messages
        dispatch({ type: GET_STATS_FAIL });
        console.log(err);
      });
  };
}
