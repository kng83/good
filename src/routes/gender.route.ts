import {Request,Response,Express} from 'express';

export function genderRoute(app:Express){
    app.get('/api/gender-data',(req:Request,res:Response)=>{
        res.send({
            name:'Gender',
            data:'some data'

        })
    });
  }