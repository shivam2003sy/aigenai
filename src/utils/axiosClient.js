import axios from 'axios';

export const  axiosClient = axios.create();

axiosClient.defaults.baseURL = 'http://localhost:5000/api';

axiosClient.defaults.headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json'
};

//All request will wait 2 seconds before timeout
axiosClient.defaults.timeout = 20000;

axiosClient.defaults.withCredentials = true;

