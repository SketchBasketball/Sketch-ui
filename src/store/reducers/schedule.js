import { GET_SCHEDULES_IN_DAYS } from "../actions/schedule";
const initialState = {
  schedules: [],
};

export default function scheduleReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SCHEDULES_IN_DAYS:
      return {
        ...state,
        schedules: action.data,
      };
    default:
      return state;
  }
}
