import {Request,Response,Express} from 'express';
import {getGenderData} from '../external/gender_data/gender.data.request';

export function genderRoute(app:Express){
    app.get('/api/gender-data',(req:Request,res:Response)=>{
        let genderData= getGenderData();
        genderData.then((data)=>{
            res.send({data})
        });
    });
  }