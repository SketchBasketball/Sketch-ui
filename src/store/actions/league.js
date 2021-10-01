import axios from "axios";

export const GET_LEAGUES = "GET_LEAGUES";

export function getLeagues() {
  return (dispatch) => {
    axios
      .get(
        "http://alb-sketchbball-dev-1018877792.ap-northeast-2.elb.amazonaws.com/leagues"
      )
      .then((res) => {
        dispatch({ type: GET_LEAGUES, data: res.data });
      })
      .catch((err) => {
        // TODO. toast some messages
        console.log(err);
      });
  };
}
