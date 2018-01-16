import {Request,Response,Express} from 'express';
import {siemensData} from '../external/siemens.data/siemens.data.request';
import { Readable } from 'stream';

export function siemensRoute(app:Express){
    app.get('/api/siemens-data',(req:Request, res:Response)=>{
       siemensData().then((data)=>{
           res.send({data});
       })
    })

}