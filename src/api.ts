import axios from 'axios';
import { path } from 'ramda';

export const GIPHY_API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

export const client = axios.create({
  baseURL: 'https://api.giphy.com/v1/gifs',
  headers: { 'Content-Type': 'application/json' }
});

export const getRandomImage = async (tag = 'turtle'): Promise<string | undefined> => {
  const response = await client.get(`/random?api_key=${GIPHY_API_KEY}&tag=${tag}`);
  return path(['data', 'data'], response);
};

export const getImageById = async (id: string): Promise<string | undefined> => {
  const response = await client.get(`/${id}?api_key=${GIPHY_API_KEY}`);
  return path(['data', 'data'], response);
};
