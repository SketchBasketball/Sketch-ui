import axios from "axios";

export const GET_SCHEDULES_IN_PAGES = "GET_SCHEDULES_IN_PAGES";
export const GET_SCHEDULES_IN_PAGES_NO_MORE_CONTENT =
  "GET_SCHEDULES_IN_PAGES_NO_MORE_CONTENT";
export const GET_SCHEDULES_IN_PAGES_SUCCESS = "GET_SCHEDULES_IN_PAGES_SUCCESS";
export const GET_SCHEDULES_IN_PAGES_FAIL = "GET_SCHEDULES_IN_PAGES_FAIL";

export function getSchedulesInPages(leagueName, pages) {
  const requestPath = leagueName
    ? `${process.env.REACT_APP_API_PATH}/schedules/leagues?league_abv=${leagueName}&page_number=${pages}`
    : `${process.env.REACT_APP_API_PATH}/schedules/pages?num=${pages}`;
  return (dispatch) => {
    dispatch({ type: GET_SCHEDULES_IN_PAGES });
    axios
      .get(requestPath)
      .then((res) => {
        if (res.data.match_schedules_list.length == 0) {
          dispatch({
            type: GET_SCHEDULES_IN_PAGES_NO_MORE_CONTENT,
            data: res.data.match_schedules_list,
            pages: pages,
            hasNext: res.data.has_next,
            hasPrev: res.data.has_prev,
          });
        } else {
          dispatch({
            type: GET_SCHEDULES_IN_PAGES_SUCCESS,
            data: res.data.match_schedules_list,
            pages: pages,
            hasNext: res.data.has_next,
            hasPrev: res.data.has_prev,
          });
        }
      })
      .catch((err) => {
        // TODO. toast some messages
        console.log(err);
      });
  };
}
