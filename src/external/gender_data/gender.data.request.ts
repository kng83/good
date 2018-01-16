import * as xml2json from 'xml2js';
import * as rp from 'request-promise';


export function getGenderData2(){
    
    interface GenderModel{
        description:string,
        value: string
    };

    const options: any = {
        uri: 'http://172.27.22.203/dane3.xml',
        headers: {
            'User-Agent': 'Request-Promise'
        },
        json: false// Automatically parses the JSON string in the response
    }

    rp(options)
    .then((response) => {
       // console.log(response);
    })
    .catch(function (err) {
        // API call failed...
    });

}