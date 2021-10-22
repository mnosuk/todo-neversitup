import axios from 'axios';
import { getTokenFromStorage } from './handleTokenWithStorage';

export const fetchDataWithToken = (url) => {
  const token = getTokenFromStorage();
  return axios.get(url, {
    headers: { Authorization: `Bearer ${token}` },
  }).then((res) => res.data);
};
