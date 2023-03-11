import { getDataFromUrl } from '@/utils/helpers';
import { fetchMoviesRequest, fetchMoviesSuccess, fetchMoviesFailure } from './movies';

export const fetchDataFromUrl = (url) => async (dispatch) => {
  dispatch(fetchMoviesRequest());
  try {
    const response = await getDataFromUrl(url);
    dispatch(fetchMoviesSuccess(response.results));
  } catch (error) {
    dispatch(fetchMoviesFailure(error.message));
  }
};
