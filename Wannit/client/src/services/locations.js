import api from './apiConfig';

export const getAllLocations = async () => {
  const resp = await api.get('/locations');
  return resp.data;
}

export const addLocation = async (locationId, itemId) => {
  const resp = await api.put(`/flavors/${locationId}/foods/${itemId}`);
  return resp.data;
}