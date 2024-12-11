import axios from 'axios';

const instance = axios.create();
instance.defaults.timeout = 30000;
instance.defaults.headers.common['authorization'] = process.env.REACT_APP_AUTH_MOVIE_TOKEN;
instance.defaults.headers.common['accept-language'] = 'en-GB,en;q=0.9';


export async function get(endpoint, params) { 
    try {
    const response = await instance.get(endpoint, params);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function post(endpoint, params) {
  try {
    const response = await instance.post(endpoint, params);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}