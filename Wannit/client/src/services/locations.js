import api from './apiConfig';

export const getAllLocations = async () => {
  const resp = await api.get('/locations');
  return resp.data;
}

export const addLocation = async (locationId, itemId) => {
  const resp = await api.put(`/flavors/${locationId}/foods/${itemId}`);
  return resp.data;
}


export const getOneLocation = async (id) => {
  const resp = await api.get(`/locations/${id}`);
  return resp.data;
}

export const postLocation = async (locationData) => {
  const resp = await api.post('/locations', { location: locationData });
  return resp.data;
}

export const putLocation = async (id, locationData) => {
  const resp = await api.put(`/locations/${id}`, { location: locationData });
  return resp.data;
}

export const destroyLocation = async (id) => {
  const resp = await api.delete(`/locations/${id}`);
  return resp;
}