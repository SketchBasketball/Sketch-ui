import axios from "axios";

export const GET_MAIN = "GET_MAIN";
export const GET_MAIN_SUCCESS = "GET_MAIN_SUCCESS";
export const GET_MAIN_FAIL = "GET_MAIN_FAIL";

export function getMainPage() {
  return (dispatch) => {
    dispatch({ type: GET_MAIN });
    axios
      .get(`${process.env.REACT_APP_API_PATH}/home`)
      .then((res) => {
        dispatch({
          type: GET_MAIN_SUCCESS,
          data: res.data,
        });
      })
      .catch((err) => {
        // TODO. toast some messages
        dispatch({ type: GET_MAIN_FAIL });
        console.log(err);
      });
  };
}
