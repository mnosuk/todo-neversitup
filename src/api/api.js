import axios from 'axios';
import { getTokenFromStorage } from '../helpers/handleTokenWithStorage';

export const registerUser = async (payload) => {
  const currentToken = getTokenFromStorage();
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${currentToken}`,
    },
  };
  const result = await axios.post(
    `${process.env.REACT_APP_SERVICE_URL}/auths/register`,
    payload,
    config,
  );
  return result;
};

export const editTask = async (id, payload) => {
  const currentToken = getTokenFromStorage();
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${currentToken}`,
    },
  };
  const result = await axios.put(
    `${process.env.REACT_APP_SERVICE_URL}/parties/${id}`,
    payload,
    config,
  );
  return result;
};

export const deleteTask = async (id) => {
  const currentToken = getTokenFromStorage();
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${currentToken}`,
    },
  };
  const result = await axios.delete(
    `${process.env.REACT_APP_SERVICE_URL}/parties/${id}`,
    config,
  );
  return result;
};
