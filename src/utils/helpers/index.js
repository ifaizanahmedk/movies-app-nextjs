export const getDataFromUrl = async (getUrl) => {
  const data = await fetch(getUrl, { method: 'GET' });
  const dataJSON = await data.json();
  return dataJSON;
};

export default {
  getDataFromUrl
};
