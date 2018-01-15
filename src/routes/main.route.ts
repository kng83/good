import {Request,Response,Express} from 'express';


export function mainRoute(app:Express){
  app.get('/', (req:Request, res:Response) =>{
        res.sendFile('index.html', {
            root : __dirname
        });
    });
}
