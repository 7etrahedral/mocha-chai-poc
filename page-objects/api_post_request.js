/* eslint no-unused-vars: off */

const supertest = require('supertest');
const env = require('dotenv').config();

const api = supertest(process.env.BASE_URL_API);

const Path = '/users';

function postAPI(body) {
  return api.post(Path)
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json')
    .set('Authorization', `Bearer ${process.env.TOKEN}`)
    .send(body);
}

module.exports = {
  postAPI,
};
