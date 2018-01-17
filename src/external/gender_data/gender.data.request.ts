import * as xml2json from 'xml2js';
import * as rp from 'request-promise';
import {GenderModel} from './gender_models/gender.model';


export function getGenderData(){
    
    const options: any = {
        uri: 'http://172.27.22.203/dane3.xml',
        headers: {
            'User-Agent': 'Request-Promise'
        },
        json: false
    }

    const genderResponse = rp(options)
    .then((response) => {
        return new Promise((resolve)=>{
            xml2json.parseString(response,(err,jsonResult)=>{
                if(err){
                    throw err;
                } else{
                    resolve(jsonResult);
                }
            });
        })      
    })
    .then((jsonResult:any)=>{
        let singleResult =jsonResult['table']['div'];
        let GenderModelArray:GenderModel[] =[];
        for(let key in singleResult){
            let genderModel: GenderModel ={
                description:singleResult[key]['b'][0],
                value: singleResult[key]['b'][1]
            }
            GenderModelArray.push(genderModel);
        }
        
        return GenderModelArray;
    })
    .catch( (err) => {
        // API call failed...
        console.log(err.message); 
    }); 

    /*
    *Zwrocenie obietnicy z zawartosci zmiennych z gendera
    */
    return genderResponse;
}