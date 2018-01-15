import * as express from 'express';
import {Request,Response} from 'express';
import *as bodyParser from 'body-parser';
import {mainRoute} from './routes/main.route';

const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname));

mainRoute(app);

app.listen(3000);
  