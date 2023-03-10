import { API_URL } from '../constants';

export const getMovie = async (movie) => {
  const getUrl = `${API_URL}/movie/${movie}?api_key=${process.env.apiKey}`;
  const data = await fetch(getUrl, { method: 'GET' });
  return data.json();
};

export const getPopularMovies = async () => {
  const getUrl = `${API_URL}/movie/popular?api_key=${process.env.apiKey}`;

  const data = await fetch(getUrl, { method: 'GET' });
  return data.json();
};

export const searchMovie = async (query) => {
  const getUrl = `${API_URL}/search/movie?api_key=${process.env.apiKey}&language=en-US&query=${query}&include_adult=false`;

  const data = await fetch(getUrl, { method: 'GET' });
  return data.json();
};

export default {
  getMovie,
  getPopularMovies,
  searchMovie
};
