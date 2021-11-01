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
  hasPrev: true,
  hasNext: true,
};

export default function scheduleReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SCHEDULES_IN_PAGES:
      return {
        ...state,
        isLoading: true,
        schedules: [],
        hasPrev: true,
        hasNext: true,
      };
    case GET_SCHEDULES_IN_PAGES_SUCCESS:
      return {
        ...state,
        schedules: action.data,
        pages: action.pages,
        isLoading: false,
        isEndOfPage: false,
        isError: false,
        hasNext: action.hasNext,
        hasPrev: action.hasPrev,
      };
    case GET_SCHEDULES_IN_PAGES_NO_MORE_CONTENT:
      return {
        ...state,
        schedules: action.data,
        isLoading: false,
        isEndOfPage: true,
        isError: false,
        pages: action.pages,
        hasNext: action.hasNext,
        hasPrev: action.hasPrev,
      };

    case GET_SCHEDULES_IN_PAGES_FAIL:
      return {
        ...state,
        isLoading: false,
        isEndOfPage: false,
        isError: true,
        hasPrev: false,
        hasNext: false,
      };
    default:
      return state;
  }
}
