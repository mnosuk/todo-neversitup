import * as api from '../../api/api';
import { setTokenToStorage } from '../../helpers/handleTokenWithStorage';

export const handleLogin = async (setIsloading, setErr, loginPayload) => {
  setErr('');
  setIsloading(true);
  try {
    const res = await api.login(loginPayload);
    setTokenToStorage(res.data.data.access_token);
    setIsloading(false);
    console.log(res);
  } catch (e) {
    setErr(e.response.data.errors);
    setIsloading(false);
    throw e;
  }
};
