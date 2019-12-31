const { expect } = require('chai');
const api = require('../page-objects/api_get_request.js');
const cases = require('../test-cases/api_get_testcases.js');

describe('@getdescribe GET Request /users', () => {
  it(`@getit ${cases.scenario.getOK.desc}`, async () => {
    const response = await api.getAPI();
    expect(response.status).to.equal(cases.scenario.getOK.response);
  });
});
