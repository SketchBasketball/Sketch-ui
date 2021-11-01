import axios from "axios";

export const GET_MAIN_SCHEDULES = "GET_MAIN_SCHEDULES";
export const GET_MAIN_SCHEDULES_SUCCESS = "GET_MAIN_SCHEDULES_SUCCESS";
export const GET_MAIN_SCHEDULES_FAIL = "GET_MAIN_SCHEDULES_FAIL";

export function getMainSchedules() {
  return (dispatch) => {
    dispatch({ type: GET_MAIN_SCHEDULES });
    axios
      .get(`${process.env.REACT_APP_API_PATH}/schedules/days?num=7`)
      .then((res) => {
        dispatch({ type: GET_MAIN_SCHEDULES_SUCCESS, data: res.data });
      })
      .catch((err) => {
        // TODO. toast some messages
        dispatch({ type: GET_MAIN_SCHEDULES_FAIL });
        console.log(err);
      });
  };
}
