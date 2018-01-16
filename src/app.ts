import * as express from 'express';
import {Request,Response} from 'express';
import *as bodyParser from 'body-parser';
import {mainRoute} from './routes/main.route';
import {genderRoute} from './routes/gender.route';
import {siemensRoute} from './routes/siemens.route';




const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname));
mainRoute(app);
genderRoute(app);
siemensRoute(app);


app.listen(3000); 
  