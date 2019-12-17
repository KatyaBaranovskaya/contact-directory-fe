import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

const enhanceWithToken = (config = {}, token) => {
  if (!token) {
    return config;
  }

  const headers = config.headers || {};

  return {
    ...config,
    headers: {
      ...headers,
      Authorization: `Bearer ${token}`,
    },
  };
};

const enhanceWithUrl = (config = {}) => {
  return {
    ...config,
    url: `${API_URL}${config.url}`
  };
};

class ApiService {
  static token = null;

  static setToken(token) {
    ApiService.token = token;
  }

  static call(config, { isAuthorizedRequest = true } = {}) {
    const newConfig = isAuthorizedRequest
      ? enhanceWithToken(config, ApiService.token)
      : config;
    return axios(enhanceWithUrl(newConfig));
  }
}

export default ApiService;
