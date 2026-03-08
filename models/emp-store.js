'use strict';

import logger from '../utils/logger.js';
import JsonStore from './json-store.js';

const empStore = {

  store: new JsonStore('./models/emp-store.json', { employees: {} }),
  collection: 'employee',


  getEmpInfo() {
    return this.store.findAll(this.collection);
  },

};

export default empStore;
