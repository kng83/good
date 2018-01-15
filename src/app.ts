import * as express from 'express';
import {Request,Response} from 'express';
import *as bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname));

app.get('/', (req:Request, res:Response) =>{
    res.sendFile('index.html', {
        root : __dirname
    });
});
app.listen(3000);
