const convict = require('convict');
const dotenv = require('dotenv');

dotenv.config();

const config = convict({
  apiUrl: {
    doc: 'API application url',
    format: String,
    default: process.env.API_URL
  },
  port: {
    doc: 'Proxy application port',
    format: 'port',
    default: process.env.PROXY_PORT
  }
});

config.validate({ allowed: 'strict' });

module.exports = config;
