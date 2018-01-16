import {Request,Response,Express} from 'express';
import {mainRouteDriver} from '../controller/main.route.driver';

/*
*Exporting function which gets a start page
*/
export function mainRoute(app:Express){
  app.get('/',mainRouteDriver.indexPage);
}

