import axios from "axios";

export const GET_MATCH_DETAILS = "GET_MATCH_DETAILS";
export const GET_MATCH_DETAILS_SUCCESS = "GET_MATCH_DETAILS_SUCCESS";
export const GET_MATCH_DETAILS_FAIL = "GET_MATCH_DETAILS_FAIL";

export function getMatchDetails(id) {
  return (dispatch) => {
    dispatch({ type: GET_MATCH_DETAILS });
    axios
      .get(`${process.env.REACT_APP_API_PATH}/matches/${id}`)
      .then((res) => {
        dispatch({ type: GET_MATCH_DETAILS_SUCCESS, data: res.data });
      })
      .catch((err) => {
        // TODO. toast some messages
        dispatch({ type: GET_MATCH_DETAILS_FAIL });
        console.log(err);
      });
  };
}
