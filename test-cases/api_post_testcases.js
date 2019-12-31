const global = require('./../helper/global.js');

const scenario = ({
  getOK: {
    desc: 'POST scenario created',
    response: global.response.created,
  },
});

module.exports = {
  scenario,
};
