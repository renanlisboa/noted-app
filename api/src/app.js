import 'dotenv/config';
import express from 'express';
import path from 'path';
import cors from 'cors';

import routes from './routes';
import './database';

const app = express();
const port = 3333;

app.use(express.json());
app.use(cors());
app.use(
  '/files',
  express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
);
app.use(routes);

export { app, port };
