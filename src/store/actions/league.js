import axios from "axios";

export const GET_LEAGUES = "GET_LEAGUES";
export const GET_LEAGUES_SUCCESS = "GET_LEAGUES_SUCCESS";
export const GET_LEAGUES_FAILURE = "GET_LEAGUES_FAILURE";

export function getLeagues() {
  return (dispatch) => {
    axios
      .get(
        "http://alb-sketchbball-dev-1018877792.ap-northeast-2.elb.amazonaws.com/leagues"
      )
      .then((res) => {
        dispatch({ type: GET_LEAGUES_SUCCESS, data: res.data });
      })
      .catch((err) => {
        // TODO. toast some messages
        console.log(err);
      });
  };
}
