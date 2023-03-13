import { getDataFromUrl } from '@/utils/helpers';

import { API_URL } from '@/utils/constants';

describe('getDataFromUrl', () => {
  const getUrl = `${API_URL}/movie/popular?api_key=${process.env.apiKey}`;

  it('throws an error if the URL is invalid', async () => {
    await expect(getDataFromUrl('invalid-url')).rejects.toThrow();
  });
});
