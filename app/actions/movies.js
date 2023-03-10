import { getMovie, getPopularMovies, searchMovie } from '../utils/api/moviesAPI';

export const FETCH_MOVIES_REQUEST = 'FETCH_MOVIES_REQUEST';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';

export const fetchMoviesRequest = () => ({
  type: FETCH_MOVIES_SUCCESS
});

export const fetchMoviesSuccess = (movies) => ({
  type: FETCH_MOVIES_SUCCESS,
  movies
});

export const fetchMoviesFailure = (error) => ({
  type: FETCH_MOVIES_FAILURE,
  error
});

export const fetchInitialData = () => async (dispatch) => {
  try {
    dispatch(fetchMoviesRequest());

    const response = await getPopularMovies();
    const data = await response.json();

    dispatch(fetchMoviesSuccess(data.results));
  } catch (error) {
    dispatch(fetchMoviesFailure(error.message));
  }
};

export const fetchMovie = (query) => async (dispatch) => {
  try {
    dispatch(fetchMoviesRequest());

    const response = await getMovie(query);
    const data = await response.json();

    dispatch(fetchMoviesSuccess(data.results));
  } catch (error) {
    dispatch(fetchMoviesFailure(error.message));
  }
};

export const fetchSearchedMovie = (query) => async (dispatch) => {
  try {
    dispatch(fetchMoviesRequest());

    const response = await searchMovie(query);
    const data = await response.json();

    dispatch(fetchMoviesSuccess(data.results));
  } catch (error) {
    dispatch(fetchMoviesFailure(error.message));
  }
};
