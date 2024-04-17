"use client"

import axios from 'axios';
import { TextEncoder, TextDecoder } from 'text-encoding-utf-8';


export const API_BASE_URL = 'http://localhost:5454/api';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

const api = axios.create({
  baseURL: API_BASE_URL,
});
const jwt=localStorage.getItem("jwt");
// const token = localStorage.getItem('jwt');

api.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;

api.defaults.headers.post['Content-Type'] = 'application/json';

export { api };
