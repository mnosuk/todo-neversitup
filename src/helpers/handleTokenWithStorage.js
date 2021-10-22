const storageKey = 'neversitup-access-token';
export const setTokenToStorage = (token) => {
  localStorage.setItem(storageKey, token);
};

export const getTokenFromStorage = () => {
  const token = localStorage.getItem(storageKey);
  return token;
};

export const removeTokenFromStorage = () => {
  localStorage.removeItem(storageKey);
};
