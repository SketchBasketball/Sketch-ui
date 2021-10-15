import axios from "axios";

export const GET_SCHEDULES_IN_DAYS = "GET_SCHEDULES_IN_DAYS";

export function getLeagues(days) {
  return (dispatch) => {
    axios
      .get(`${process.env.REACT_APP_API_PATH}/schedules/next?num=${days}`)
      .then((res) => {
        dispatch({ type: GET_SCHEDULES_IN_DAYS, data: res.data });
      })
      .catch((err) => {
        // TODO. toast some messages
        console.log(err);
      });
  };
}
