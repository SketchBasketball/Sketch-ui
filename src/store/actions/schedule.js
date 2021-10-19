import axios from "axios";

export const GET_SCHEDULES_IN_PAGES = "GET_SCHEDULES_IN_PAGES";
export const GET_SCHEDULES_IN_PAGES_NO_MORE_CONTENT =
  "GET_SCHEDULES_IN_PAGES_NO_MORE_CONTENT";
export const GET_SCHEDULES_IN_PAGES_SUCCESS = "GET_SCHEDULES_IN_PAGES_SUCCESS";
export const GET_SCHEDULES_IN_PAGES_FAIL = "GET_SCHEDULES_IN_PAGES_FAIL";

export function getSchedulesInPages(pages) {
  return (dispatch) => {
    dispatch({ type: GET_SCHEDULES_IN_PAGES });
    axios
      .get(`${process.env.REACT_APP_API_PATH}/schedules/pages?num=${pages}`)
      .then((res) => {
        if (res.data.length == 0) {
          dispatch({
            type: GET_SCHEDULES_IN_PAGES_NO_MORE_CONTENT,
            data: res.data,
            pages: pages,
          });
        } else {
          dispatch({
            type: GET_SCHEDULES_IN_PAGES_SUCCESS,
            data: res.data,
            pages: pages,
          });
        }
      })
      .catch((err) => {
        // TODO. toast some messages
        console.log(err);
      });
  };
}
