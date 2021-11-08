import {
  GET_MAIN_SCHEDULES,
  GET_MAIN_SCHEDULES_SUCCESS,
  GET_MAIN_SCHEDULES_FAIL,
} from "../actions/mainSchedule";
const initialState = {
  next_gemes: [],
  next_loading: false,
  prev_gemes: [],
  prev_loading: false,
};

export default function mainScheduleReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MAIN_SCHEDULES:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case GET_MAIN_SCHEDULES_SUCCESS:
      return {
        ...state,
        schedules: action.data,
        isLoading: false,
        isError: false,
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
