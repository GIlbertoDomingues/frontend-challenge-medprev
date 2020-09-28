import http from './http';

export const getPeople = (params = {}) => new Promise((resolve, reject) => http.get('/user', params)
  .then(({ data }) => resolve(data))
  .catch((err) => reject(err)));

export const getPerson = (id) => new Promise((resolve, reject) => http.get(`/user/${id}`)
  .then(({ data }) => resolve(data))
  .catch((err) => reject(err)));

export const deletePerson = (id) => new Promise((resolve, reject) => http.delete(`/user/${id}`)
  .then(({ data }) => resolve(data))
  .catch((err) => reject(err)));

export const sendPerson = (params = {}) => new Promise((resolve, reject) => http.post('/user/', params)
  .then(({ data }) => resolve(data))
  .catch((err) => reject(err)));

export const updatedPerson = (id) => new Promise((resolve, reject) => http.pu(`/user/${id}`)
  .then(({ data }) => resolve(data))
  .catch((err) => reject(err)));

export default {
  getPeople,
  getPerson,
  deletePerson,
  sendPerson,
};
