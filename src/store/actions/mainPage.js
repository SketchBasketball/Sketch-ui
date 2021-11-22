import axios from "axios";

export const GET_BANNERS = "GET_BANNERS";
export const GET_VIDEO = "GET_VIDEO";
export const GET_MAIN_LEAGUE_STANDING = "GET_MAIN_LEAGUE_STANDING";

export const GET_NEXT_GAMES = "GET_NEXT_GAMES";
export const GET_NEXT_GAMES_SUCCESS = "GET_NEXT_GAMES_SUCCESS";
export const GET_NEXT_GAMES_FAIL = "GET_NEXT_GAMES_FAIL";

export const GET_PREV_GAMES = "GET_PREV_GAMES";
export const GET_PREV_GAMES_SUCCESS = "GET_PREV_GAMES_SUCCESS";
export const GET_PREV_GAMES_FAIL = "GET_PREV_GAMES_FAIL";

export function getBanners() {
  return (dispatch) => {
    axios
      .get(`${process.env.REACT_APP_API_PATH}/banner/images`)
      .then((res) => {
        dispatch({
          type: GET_BANNERS,
          data: res.data.banner_images,
        });
      })
      .catch((err) => {
        // TODO. toast some messages
        // dispatch({ type: GET_BANNERS_FAIL });
        console.log(err);
      });
  };
}

export function getVideo() {
  return (dispatch) => {
    axios
      .get(`${process.env.REACT_APP_API_PATH}/banner/videos`)
      .then((res) => {
        dispatch({
          type: GET_VIDEO,
          data: res.data.banner_video,
        });
      })
      .catch((err) => {
        // TODO. toast some messages
        // dispatch({ type: GET_BANNERS_FAIL });
        console.log(err);
      });
  };
}

export function getMainNextGames() {
  return (dispatch) => {
    dispatch({ type: GET_NEXT_GAMES });
    axios
      .get(`${process.env.REACT_APP_API_PATH}/schedules/days?num=7`)
      .then((res) => {
        dispatch({ type: GET_NEXT_GAMES_SUCCESS, data: res.data });
      })
      .catch((err) => {
        // TODO. toast some messages
        dispatch({ type: GET_NEXT_GAMES_FAIL });
        console.log(err);
      });
  };
}

export function getMainPrevGames() {
  return (dispatch) => {
    dispatch({ type: GET_PREV_GAMES });
    axios
      .get(
        `${process.env.REACT_APP_API_PATH}/schedules/pages?num=-1&order_by_asc=false`
      )
      .then((res) => {
        dispatch({
          type: GET_PREV_GAMES_SUCCESS,
          data: res.data.match_schedules_list,
        });
      })
      .catch((err) => {
        // TODO. toast some messages
        dispatch({ type: GET_PREV_GAMES_FAIL });
        console.log(err);
      });
  };
}

export function getAllLeagueStandings() {
  return (dispatch) => {
    axios
      .get(`${process.env.REACT_APP_API_PATH}/leagues/standings`)
      .then((res) => {
        dispatch({
          type: GET_MAIN_LEAGUE_STANDING,
          data: res.data.league_details,
        });
      })
      .catch((err) => {
        // TODO. toast some messages
        console.log(err);
      });
  };
}
