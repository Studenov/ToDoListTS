import axios from 'axios';

export const API = axios.create({
  baseURL: 'http://localhost:4001/',
  headers: {
    'Content-Type': 'application/json'
  }
});

export const setUserToken = (token: string) => {
  API.defaults.headers.common.Authorization = `JWT ${token}`;
};

export const clearUserToken = () => {
  API.defaults.headers.common.Authorization = null;
};
