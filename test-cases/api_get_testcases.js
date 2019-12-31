const global = require('./../helper/global.js');

const scenario = ({
  getOK: {
    desc: 'GET scenario OK',
    response: global.response.ok,
  },
});

module.exports = {
  scenario,
};
