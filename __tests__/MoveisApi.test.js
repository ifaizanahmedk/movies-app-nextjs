import { getPopularMovies } from '../app/utils/api/moviesAPI';

import { API_URL } from '../app/utils/constants';

describe('getPopularMovies', () => {
  const getUrl = `${API_URL}/movie/popular?api_key=${process.env.apiKey}`;

  it('throws an error if the URL is invalid', async () => {
    await expect(getPopularMovies('invalid-url')).rejects.toThrow();
  });
});
