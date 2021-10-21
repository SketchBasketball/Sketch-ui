import {
  GET_MAIN_SCHEDULES,
  GET_MAIN_SCHEDULES_SUCCESS,
  GET_MAIN_SCHEDULES_FAIL,
} from "../actions/mainSchedule";
const initialState = {
  schedules: [],
  isLoading: true,
  isError: false,
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
