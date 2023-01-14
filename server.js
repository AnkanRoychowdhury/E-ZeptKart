import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { Connection } from './database/db.js';
import DefaultData from './default.js';
import Router from './routes/route.js';
import bodyParser from 'body-parser';
import { v4 as uuid } from 'uuid';


const app = express();

dotenv.config();

app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/',Router);

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const PORT = process.env.PORT || 8000;
const URL = process.env.MONGODB_URI || `mongodb://${USERNAME}:${PASSWORD}@ac-vb6dr9s-shard-00-00.v1serrq.mongodb.net:27017,ac-vb6dr9s-shard-00-01.v1serrq.mongodb.net:27017,ac-vb6dr9s-shard-00-02.v1serrq.mongodb.net:27017/?ssl=true&replicaSet=atlas-ll7mze-shard-0&authSource=admin&retryWrites=true&w=majority`;

Connection(URL);

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
}

app.listen(PORT, () => console.log(`sever running on port ${PORT}`));

DefaultData();

export let paytmMerchantkey = process.env.PAYTM_MERCHANT_KEY;
export let paytmParams = {};
paytmParams['MID'] = process.env.PAYTM_MID,
paytmParams['WEBSITE'] = process.env.PAYTM_WEBSITE,
paytmParams['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID,
paytmParams['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE_ID,
paytmParams['ORDER_ID'] = uuid(),
paytmParams['CUST_ID'] = process.env.PAYTM_CUST_ID,
paytmParams['TXN_AMOUNT'] = '100',
paytmParams['CALLBACK_URL'] = 'callback';
paytmParams['EMAIL'] = 'roychowdhuryankan2001@gmail.com'
paytmParams['MOBILE_NO'] = '6295360555'