import * as xml2json from 'xml2js';
import * as rp from 'request-promise';
import { SiemensModel }from './simenes.models/simens.data.model';

export function siemensData(){
    
    const options: any = {
        uri: 'http://172.27.20.214/awp/bobo/get_data.db.xml',
        headers: {
            'User-Agent': 'Request-Promise'
        },
        json: false
    }

    const siemensResponse = rp(options)
    .then((response:string) => {
        //change value to hex minus 12
        let offset =(response.length-12).toString(16).length;       
        return new Promise((resolve)=>{
            let resp =response.substring(offset,response.length-6);
            xml2json.parseString(resp,{ mergeAttrs:true,explicitArray:false,charkey:'value'},(err,jsonResult)=>{
                if(err){
                    throw err;
                } else{
                    resolve(jsonResult);
                } 
            });
        })      
    })
    .then((jsonResult:any)=>{
        console.log(jsonResult);
        console.log(jsonResult['Get_Data']['Machine_Speed']['type'])
        console.log(jsonResult['Get_Data']['Machine_Speed']['value'])
       console.log(jsonResult['Get_Data']['Machine_Speed']['desc']);
    })
    .catch( (err) => {
        // API call failed...
        console.log(err.message,'ja cie dziękuje, Mariusz zobacz oni tu klina dali'); 
    }); 

    /*
    *Zwrocenie obietnicy z zawartosci zmiennych z gendera
    */
    return siemensResponse;

}