import {
  GET_MAIN_SCHEDULES,
  GET_MAIN_SCHEDULES_SUCCESS,
  GET_MAIN_SCHEDULES_FAIL,
} from "../actions/main";
const initialState = {
  schedules: [],
  isLoading: true,
  isError: false,
};

export default function mainReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MAIN_SCHEDULES:
      return {
        ...state,
        isLoading: true,
      };
    case GET_MAIN_SCHEDULES_SUCCESS:
      return {
        ...state,
        schedules: action.data,
        isLoading: false,
      };
    case GET_MAIN_SCHEDULES_FAIL:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
}
