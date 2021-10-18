import {
  GET_SCHEDULES_IN_PAGES,
  GET_SCHEDULES_IN_PAGES_SUCCESS,
  GET_SCHEDULES_IN_PAGES_FAIL,
  GET_SCHEDULES_IN_PAGES_NO_MORE_CONTENT,
} from "../actions/schedule";
const initialState = {
  pages: 0,
  schedules: [],
  isLoading: true,
  isError: false,
  isEndOfPage: false,
};

export default function scheduleReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SCHEDULES_IN_PAGES:
      return {
        ...state,
        isLoading: true,
        schedules: [],
      };
    case GET_SCHEDULES_IN_PAGES_SUCCESS:
      return {
        ...state,
        schedules: action.data,
        pages: action.pages,
        isLoading: false,
        isEndOfPage: false,
        isError: false,
      };
    case GET_SCHEDULES_IN_PAGES_NO_MORE_CONTENT:
      if (state.isEndOfPage) {
        return {
          ...state,
          schedules: action.data,
          isLoading: false,
          isEndOfPage: true,
          isError: false,
        };
      } else {
        return {
          ...state,
          schedules: action.data,
          pages: action.pages,
          isLoading: false,
          isEndOfPage: true,
          isError: false,
        };
      }

    case GET_SCHEDULES_IN_PAGES_FAIL:
      return {
        ...state,
        isLoading: false,
        isEndOfPage: false,
        isError: true,
      };
    default:
      return state;
  }
}
