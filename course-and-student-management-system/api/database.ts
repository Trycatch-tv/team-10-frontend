import axios from 'axios';

const tesloApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL + '/api',
});

export default tesloApi;
