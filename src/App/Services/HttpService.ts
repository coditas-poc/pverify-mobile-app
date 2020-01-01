import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import {Config} from 'Config';

const AUTH_KEY = 'token';

const axiosInstance = axios.create({
  baseURL: Config.API_URL,
  headers: {
    'Content-Type': 'application/json',
    [AUTH_KEY]: AsyncStorage.getItem(AUTH_KEY),
  },
});

export default class HTTPService {
  static get(url: string, params = null): Promise<any> {
    return new Promise((resolve, reject) => {
      axiosInstance.interceptors.request.use(async config => {
        try {
          config.headers[AUTH_KEY] =
            (await AsyncStorage.getItem(AUTH_KEY)) || '';
        } catch (error) {}
        return config;
      });
      axiosInstance
        .get(url, {params: params})
        .then(response => {
          if (response.status) {
            resolve(response.data);
          }
        })
        .catch(error => reject(error));
    });
  }

  static put(url: string, body: any) {
    return new Promise((resolve, reject) => {
      axiosInstance.interceptors.request.use(async config => {
        try {
          config.headers[AUTH_KEY] = await AsyncStorage.getItem(AUTH_KEY);
        } catch (error) {}
        return config;
      });
      axiosInstance
        .put(url, body)
        .then(response => {
          if (response.status) {
            resolve(response.data);
          }
        })
        .catch(error => reject(error));
    });
  }

  static post(url: string, body: any): any {
    return new Promise((resolve, reject) => {
      axiosInstance.interceptors.request.use(async config => {
        try {
          config.headers[AUTH_KEY] = await AsyncStorage.getItem(AUTH_KEY);
        } catch (error) {}
        return config;
      });
      axiosInstance
        .post(url, body)
        .then(response => {
          if (response.data.status === 'invalid') {
            reject(response.data.error);
          }
          if (response.status) {
            saveToken(response);
            resolve(response.data);
          }
        })
        .catch(error => reject(error));
    });
  }

  static delete(url: string, body: any) {
    return new Promise((resolve, reject) => {
      axiosInstance
        .delete(url)
        .then(response => {
          if (response.status) {
            resolve(response.data);
          }
        })
        .catch(error => reject(error));
    });
  }
}

async function saveToken(response: any) {
  if (response.data && response.data[AUTH_KEY]) {
    try {
      await AsyncStorage.setItem(AUTH_KEY, response.data[AUTH_KEY]);
    } catch (error) {}
  }
}
