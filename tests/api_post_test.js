/* eslint-disable no-underscore-dangle */

const { expect } = require('chai');
const api = require('../page-objects/api_post_request.js');

const cases = require('../test-cases/api_post_testcases.js');
const global = require('../helper/global.js');

describe('@postdescribe POST request /users', () => {
  it(`@postit ${cases.scenario.getOK.desc}`, async () => {
    const response = await api.postAPI(global.testData);
    expect(response.body._meta.code).to.equal(cases.scenario.getOK.response);
  });
});
