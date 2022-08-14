import { BASE_URL } from '../constants';

export const Api = axios.create({
    baseURL: BASE_URL,
});
