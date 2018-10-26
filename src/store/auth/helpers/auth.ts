import { API } from '../../../utilities/APIConfig';

export const authorizationUser = (email: string, password: string, newUser: boolean): Promise<string> => {
  const data = JSON.stringify({
    email,
    password
  });
  if (newUser) return API.post("signup", data).then(response => response.data.token);
  return API.post("signin", data).then(response => response.data.token);
};

export const verificationToken = (token: string): Promise<object> => {
  const data = JSON.stringify({
    token
  });
  return API.post("verification", data).then(response => response);
}
