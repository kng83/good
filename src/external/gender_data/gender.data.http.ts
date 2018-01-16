import * as http from 'http';
import {IncomingMessage} from 'http';
import * as xml2json from 'xml2js';


export function getGenderData(){

interface GenderModel{
    description:string,
    value: string
};

const GenderModelArray:GenderModel[] =[{description:'',value:''}];

const options = {
    host: '172.27.22.203',
    path: '/dane3.xml'
  
  };

const req = http.get(options,(res:http.IncomingMessage)=>{
    const bodyChunks:Buffer[] = []; 
    let responeBody:string;
    let bodyToJson:any;

    res.on('data',(chunk:Buffer) => {
        bodyChunks.push(chunk);
    });
    res.on('end',()=>{
    
        responeBody = Buffer.concat(bodyChunks).toString();

        bodyToJson = xml2json.parseString(responeBody,(error,result) => {
            if(error){
                throw error.name;
            }else{
                let singleResult = result['table']['div'];
 
                for(let key in singleResult){

                    let genderModel:GenderModel = {
                        description:singleResult[key]['b'][0],
                        value:singleResult[key]['b'][1]
                    }
                    GenderModelArray.push(genderModel);
                }
            }
        })
    })
});

const req2 = http.get(options)
}