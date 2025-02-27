import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import { v4 as uuid } from 'uuid';

import Connection from './DataBase/db.js';
import DefaultData from './defaultdata.js';
import router from './Routes/route.js';

const app = express();

dotenv.config();


app.use(cors());
app.use(bodyParser.json({ extended: true}));
app.use(bodyParser.urlencoded({ extended: true}));
app.use('/', router);


const PORT = 4000;

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME, PASSWORD);

app.listen(PORT, () => console.log(`Server is running successfully ${PORT}`));

DefaultData();



