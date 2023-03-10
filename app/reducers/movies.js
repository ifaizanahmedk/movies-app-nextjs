import { combineReducers } from 'redux';

import {
  FETCH_MOVIES_FAILURE,
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS
} from '../actions/movies';

const initialState = {
  movies: [],
  isLoading: false,
  error: null
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES_REQUEST:
      ({
        ...state,
        isLoading: true
      });

    case FETCH_MOVIES_SUCCESS:
      ({
        ...state,
        isLoading: false,
        movies
      });

    case FETCH_MOVIES_FAILURE:
      ({
        ...state,
        isLoading: false,
        error
      });

    default:
      return state;
  }
};

const rootReducers = combineReducers({
  movies: moviesReducer
});

export default rootReducers;
