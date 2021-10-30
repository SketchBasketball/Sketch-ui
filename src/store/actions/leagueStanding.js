import axios from "axios";

export const GET_LEAGUE_STANDING = "GET_LEAGUE_STANDING";
export const GET_LEAGUE_STANDING_SUCCESS = "GET_LEAGUE_STANDING_SUCCESS";
export const GET_LEAGUE_STANDING_FAIL = "GET_LEAGUE_STANDING_FAIL";

export function getLeagueStandings(league_name) {
  return (dispatch) => {
    dispatch({ type: GET_LEAGUE_STANDING });
    axios
      .get(
        `${process.env.REACT_APP_API_PATH}/leagues/standings?league_name=${league_name}`
      )
      .then((res) => {
        console.log(res.data);
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
