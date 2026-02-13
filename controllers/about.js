'use strict';
import logger from "../utils/logger.js";
import appDev from "../models/app-dev.js";
const about = {
  createView(request, response) {
    logger.info("About page loading!"); 
    const viewData = {
      title: "Welcome to the About Page!",
      info: appDev.getAppInfo()
    };

    response.render('about', viewData);
  },
};


export default about;