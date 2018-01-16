import * as express from 'express';
import {Request,Response} from 'express';
import *as bodyParser from 'body-parser';
import {mainRoute} from './routes/main.route';
import {genderRoute} from './routes/gender.route';
import {siemensData} from './external/siemens.data/siemens.data.request';



const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname));
mainRoute(app);
genderRoute(app);

let sdata = siemensData();
sdata.then((response)=>{  
    console.log(response);
})



app.listen(3000); 
  