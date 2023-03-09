import { API_URL } from '../constants';

export const getMovie = async (movie) => {
  const getUrl = `${API_URL}/movie/${movie}?api_key=${process.env.apiKey}`;

  try {
    const movie = await fetch(getUrl, {
      method: 'GET'
      // next: { revalidate: 60 }
    }).then((movie) => movie.json());
  } catch (error) {
    throw error;
  }
};

export const getPopularMovies = async () => {
  const getUrl = `${API_URL}/movie/popular?api_key=${process.env.apiKey}`;

  try {
    return await fetch(getUrl, {
      method: 'GET'
    }).then((popularMovies) => popularMovies.json());
  } catch (error) {
    throw error;
  }
};

export const searchMovie = async (query) => {
  const getUrl = `${API_URL}/search/movie?api_key=${process.env.apiKey}&language=en-US&query=${query}&include_adult=false`;

  try {
    return await fetch(getUrl, {
      method: 'GET'
    }).then((movie) => movie.json());
  } catch (error) {
    throw error;
  }
};

export default {
  getMovie,
  getPopularMovies,
  searchMovie
};
