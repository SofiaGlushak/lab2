const axios = require('axios');
const config = require('./config');

const apiUrl = config.get('apiUrl');

async function getData() {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.log(error);
    return 'Error. Resource not found';
  }
}

module.exports = { getData };