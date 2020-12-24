import 'dotenv/config';
import express from 'express';

import routes from './routes';
import './database';

const app = express();
const port = 3333;

app.use(express.json());
app.use(routes);

export { app, port };
