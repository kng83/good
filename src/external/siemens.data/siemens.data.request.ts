import * as xml2json from 'xml2js';
import * as rp from 'request-promise';
import { SiemensModel }from './simenes.models/simens.data.model';

export function siemensData(){
    
    const options: any = {
        uri: 'http://172.27.20.214/awp/bobo/siemens_out.xml',
        headers: {
            'User-Agent': 'Request-Promise'
        },
        json: false
    }

    const siemensResponse = rp(options)
    .then((response) => {
        return new Promise((resolve)=>{
            console.log(response);
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
        let SiemensModelArray:SiemensModel[] =[];
        for(let key in singleResult){
            let genderModel: SiemensModel ={
                description:singleResult[key]['p'][0],
                value: singleResult[key]['p'][1]
            }
            SiemensModelArray.push(genderModel);
        }
        
        return SiemensModelArray;
    })
    .catch( (err) => {
        // API call failed...
        console.log(err.message); 
    }); 

    /*
    *Zwrocenie obietnicy z zawartosci zmiennych z gendera
    */
    return siemensResponse;

}