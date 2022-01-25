import axios from "axios";

export const GET_TEAM_DETAILS = "GET_TEAM_DETAILS";
export const GET_TEAM_DETAILS_SUCCESS = "GET_TEAM_DETAILS_SUCCESS";
export const GET_TEAM_DETAILS_FAIL = "GET_TEAM_DETAILS_FAIL";

export function getTeamDetails(id) {
  return (dispatch) => {
    dispatch({ type: GET_TEAM_DETAILS });
    axios
      .get(`${process.env.REACT_APP_API_PATH}/teams/${id}/seasons`)
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
