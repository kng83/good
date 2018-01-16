import * as express from 'express';
import {Request,Response} from 'express';
import *as bodyParser from 'body-parser';
import {mainRoute} from './routes/main.route';
import {genderRoute} from './routes/gender.route';
import {getGenderData} from './external/gender_data/gender.data.http'
import {getGenderData2} from './external/gender_data/gender.data.request';

const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname));
mainRoute(app);
genderRoute(app);
//getGenderData();
getGenderData2();



app.listen(3000); 
  