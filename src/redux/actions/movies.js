export const actionTypes = {
  FETCH_MOVIES_REQUEST: 'FETCH_MOVIES_REQUEST',
  FETCH_MOVIES_SUCCESS: 'FETCH_MOVIES_SUCCESS',
  FETCH_MOVIES_FAILURE: 'FETCH_MOVIES_FAILURE'
};

export const fetchMoviesRequest = () => ({
  type: actionTypes.FETCH_MOVIES_REQUEST
});

export const fetchMoviesSuccess = (movies) => ({
  type: actionTypes.FETCH_MOVIES_SUCCESS,
  payload: { movies }
});

export const fetchMoviesFailure = (error) => ({
  type: actionTypes.FETCH_MOVIES_FAILURE,
  payload: { error }
});
