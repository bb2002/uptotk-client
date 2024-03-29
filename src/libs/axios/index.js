import axios from "axios";

export const UPTOTK_SERVER = process.env.NODE_ENV === 'production' ? 'https://upi.blbt.app' : 'http://localhost:3001';

export function generateAxios() {
  const options = {
    baseURL: UPTOTK_SERVER,
    timeout: 120000,
  }
  return axios.create(options);
}