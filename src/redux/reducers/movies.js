import { actionTypes } from '../actions/movies';

const initialState = {
  movies: [],
  isLoading: false,
  error: null
};

const moviesReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.FETCH_MOVIES_REQUEST: {
      return {
        ...state,
        isLoading: true
      };
    }

    case actionTypes.FETCH_MOVIES_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        movies: action?.payload?.movies || []
      };
    }

    case actionTypes.FETCH_MOVIES_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action?.payload?.error || null
      };
    }

    default:
      return state;
  }
};

export default moviesReducer;
