import axios from "axios";

export const GET_LEAGUE_STANDING = "GET_LEAGUE_STANDING";
export const GET_LEAGUE_STANDING_SUCCESS = "GET_LEAGUE_STANDING_SUCCESS";
export const GET_LEAGUE_STANDING_FAIL = "GET_LEAGUE_STANDING_FAIL";
export const GET_ALL_LEAGUE_STANDING = "GET_ALL_LEAGUE_STANDING";
export const GET_ALL_LEAGUE_STANDING_SUCCESS =
  "GET_ALL_LEAGUE_STANDING_SUCCESS";
export const GET_ALL_LEAGUE_STANDING_FAIL = "GET_ALL_LEAGUE_STANDING_FAIL";
export const GET_LEADER_BOARD = "GET_LEADER_BOARD";
export const GET_LEADER_BOARD_SUCCESS = "GET_LEADER_BOARD_SUCCESS";
export const GET_LEADER_BOARD_FAIL = "GET_LEADER_BOARD_FAIL";

export function getLeagueStandings(league_name) {
  return (dispatch) => {
    dispatch({ type: GET_LEAGUE_STANDING });
    axios
      .get(`${process.env.REACT_APP_API_PATH}/leagues/standings/${league_name}`)
      .then((res) => {
        dispatch({
          type: GET_LEAGUE_STANDING_SUCCESS,
          data: res.data.team_standings,
        });
      })
      .catch((err) => {
        // TODO. toast some messages
        dispatch({ type: GET_LEAGUE_STANDING_FAIL });
        console.log(err);
      });
  };
}

export function getLeaderBoard(league_name) {
  return (dispatch) => {
    dispatch({ type: GET_LEADER_BOARD });
    axios
      .get(`${process.env.REACT_APP_API_PATH}/players/standings/${league_name}`)
      .then((res) => {
        dispatch({
          type: GET_LEADER_BOARD_SUCCESS,
          data: res.data.leader_board,
        });
      })
      .catch((err) => {
        // TODO. toast some messages
        dispatch({ type: GET_LEADER_BOARD_FAIL });
        console.log(err);
      });
  };
}

export function getAllLeagueStandings() {
  return (dispatch) => {
    dispatch({ type: GET_ALL_LEAGUE_STANDING });
    axios
      .get(`${process.env.REACT_APP_API_PATH}/leagues/standings`)
      .then((res) => {
        dispatch({
          type: GET_ALL_LEAGUE_STANDING_SUCCESS,
          data: res.data.league_details,
        });
      })
      .catch((err) => {
        // TODO. toast some messages
        dispatch({ type: GET_ALL_LEAGUE_STANDING_FAIL });
        console.log(err);
      });
  };
}
