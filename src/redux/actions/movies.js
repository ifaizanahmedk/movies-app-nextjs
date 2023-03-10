import { getMovie, getPopularMovies, searchMovie } from '../../utils/api/moviesAPI';

export const FETCH_MOVIES_REQUEST = 'FETCH_MOVIES_REQUEST';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';

export const fetchMoviesRequest = () => ({
  type: FETCH_MOVIES_REQUEST
});

export const fetchMoviesSuccess = (movies) => ({
  type: FETCH_MOVIES_SUCCESS,
  payload: { movies }
});

export const fetchMoviesFailure = (error) => ({
  type: FETCH_MOVIES_FAILURE,
  payload: { error }
});

export const fetchInitialData = () => async (dispatch) => {
  dispatch(fetchMoviesRequest());
  try {
    const response = await getPopularMovies();
    dispatch(fetchMoviesSuccess(response.results));
  } catch (error) {
    dispatch(fetchMoviesFailure(error.message));
  }
};

export const fetchMovie = (query) => async (dispatch) => {
  try {
    dispatch(fetchMoviesRequest());

    const response = await getMovie(query);
    dispatch(fetchMoviesSuccess(response.results));
  } catch (error) {
    dispatch(fetchMoviesFailure(error.message));
  }
};

export const fetchSearchedMovie = (query) => async (dispatch) => {
  try {
    dispatch(fetchMoviesRequest());

    const response = await searchMovie(query);
    dispatch(fetchMoviesSuccess(response.results));
  } catch (error) {
    dispatch(fetchMoviesFailure(error.message));
  }
};
