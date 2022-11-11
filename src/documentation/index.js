import welcome from './welcome.js';
import {user, userDefinition} from './user';

const paths = { ...welcome, ...user};
const definitions = {...userDefinition}

const config = {
  swagger: '2.0',
  info: {
    title: 'vila',
    description: 'This vila API a project',
    version: '1.0.0',
    contact: {
      name: 'Sluu',
      email: 'vilagmail.com',
      url: 'localhost:3000/api/v1/api-docs',
    },
    license: {
      name: 'Apache 2.0',
      url: 'http://www.apache.org/licenses/LICENSE-2.0.html',
    },
  },

  schemes: ['HTTP', 'HTTPS'],

  securityDefinitions: {
    Bearer: {
      type: 'apiKey',
      name: 'authorization',
      in: 'header',
    },
    ApiKeyAuth: {
      type: 'apiKey',
      name: 'refreshToken',
      in: 'header',
    },
  },

  servers: [
    {
      url: 'http://localhost:3000',
      name: 'DEV',
    },
  ],

  paths,
  definitions
};

export default config;
