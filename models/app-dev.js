'use strict';

import logger from '../utils/logger.js';
import JsonStore from './json-store.js';

const appDev = {

  dev: new JsonStore('./models/app-dev.json', { info: {} }),
  collection: 'info',
  array: 'creators',

  getAppInfo() {
    return this.dev.findAll(this.collection);
  },

};

export default appDev;