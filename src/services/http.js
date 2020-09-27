import axios from 'axios';

const apiUrl = 'https://jsonbox.io/box_d5b7ab9e6b7f374be257/';

const http = axios.create({
  baseURL: apiUrl,
});

export default (http);
