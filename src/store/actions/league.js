import axios from "axios";

export const GET_LEAGUES = "GET_LEAGUES";

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
