import axios from "axios";

export const GET_TEAM_DETAILS = "GET_TEAM_DETAILS";
export const GET_TEAM_DETAILS_SUCCESS = "GET_TEAM_DETAILS_SUCCESS";
export const GET_TEAM_DETAILS_FAIL = "GET_TEAM_DETAILS_FAIL";

export const GET_WIN_LOSS_TEAM_DETAILS = "GET_WIN_LOSS_TEAM_DETAILS";
export const GET_WIN_LOSS_TEAM_DETAILS_SUCCESS =
  "GET_WIN_LOSS_TEAM_DETAILS_SUCCESS";
export const GET_WIN_LOSS_TEAM_DETAILS_FAIL = "GET_WIN_LOSS_TEAM_DETAILS_FAIL";

export const GET_All_TIME_HIGHS = "GET_All_TIME_HIGHS";
export const GET_All_TIME_HIGHS_SUCCESS = "GET_All_TIME_HIGHS_SUCCESS";
export const GET_All_TIME_HIGHS_FAIL = "GET_All_TIME_HIGHS_FAIL";

export function getTeamDetails(id) {
  return (dispatch) => {
    dispatch({ type: GET_TEAM_DETAILS });
    axios
      .get(`${process.env.REACT_APP_API_PATH}/teams/${id}/season-stats`)
      .then((res) => {
        dispatch({ type: GET_TEAM_DETAILS_SUCCESS, data: res.data });
      })
      .catch((err) => {
        // TODO. toast some messages
        dispatch({ type: GET_TEAM_DETAILS_FAIL });
        console.log(err);
      });
  };
}

export function getWLTeamDetails(id) {
  return (dispatch) => {
    dispatch({ type: GET_WIN_LOSS_TEAM_DETAILS });
    axios
      .get(
        `${process.env.REACT_APP_API_PATH}/teams/${id}/season-stats/win-loss`
      )
      .then((res) => {
        dispatch({ type: GET_WIN_LOSS_TEAM_DETAILS_SUCCESS, data: res.data });
      })
      .catch((err) => {
        // TODO. toast some messages
        dispatch({ type: GET_WIN_LOSS_TEAM_DETAILS_FAIL });
        console.log(err);
      });
  };
}

export function getAllTimeHighs(id) {
  return (dispatch) => {
    dispatch({ type: GET_All_TIME_HIGHS });
    axios
      .get(`${process.env.REACT_APP_API_PATH}/teams/${id}/all-stats/highs`)
      .then((res) => {
        dispatch({ type: GET_All_TIME_HIGHS_SUCCESS, data: res.data });
      })
      .catch((err) => {
        // TODO. toast some messages
        dispatch({ type: GET_All_TIME_HIGHS_FAIL });
        console.log(err);
      });
  };
}
