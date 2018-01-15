import {Request,Response,Express} from 'express';

/*
*Exporting function which gets a start page
*/
export function mainRoute(app:Express){
  app.get('/', (req:Request, res:Response) =>{
        res.sendFile('index.html', {
            root : __dirname
        });
    });
}
